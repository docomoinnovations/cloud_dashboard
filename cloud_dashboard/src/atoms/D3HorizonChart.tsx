import * as d3 from 'd3';
import React, { useEffect } from 'react';
import { HorizonChart } from 'src/../../d3-horizon-chart/dist/d3-horizon-chart';

/**
 * Wrapper of d3-horizon-chart
 *
 * @param id The "id" attribute of tag.
 * @param dataSet Data of chart.
 * @param height Height of chart.
 * @param width Width of chart.
 * @param yRange Range of Y-Axis.
 * @param title Title text of chart.
 * @param titleColor Color of title on chart.
 * @param titleFontSize Size of font of title on chart.
 * @param colors Colors of chart's line.
 */
const D3HorizonChart = ({
  id, dataSet = [], height = 0, width = 0, yRange = undefined, title = '',
  titleColor = '', titleFontSize = 0, colors = []
}: {
  id: string,
  dataSet?: [Date, number][],
  height?: number,
  width?: number,
  yRange?: [number, number] | undefined,
  title?: string,
  titleColor?: string,
  titleFontSize?: number,
  colors?: string[],
}) => {

  useEffect(() => {
    // Erase old draw
    d3.selectAll(`#${id} > svg`).remove();

    // Write new draw
    const horizonChart = new HorizonChart();
    horizonChart.setSelector(`#${id}`);
    if (dataSet.length > 0) {
      horizonChart.setDataSet(dataSet);
    }
    if (height > 0) {
      horizonChart.setHeight(height);
    }
    if (width > 0) {
      horizonChart.setWidth(width);
    }
    if (typeof yRange !== 'undefined') {
      horizonChart.setYRange(yRange);
    }
    if (title !== '') {
      horizonChart.setTitle(title);
    }
    if (titleColor !== '') {
      horizonChart.setTitleColer(titleColor);
    }
    if (titleFontSize !== 0) {
      horizonChart.setTitleFontSize(titleFontSize);
    }
    if (colors.length > 0) {
      horizonChart.setColors(colors);
    }
    horizonChart.draw();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSet, height, width, yRange, title, titleColor, titleFontSize, colors]);

  return <div id={id}></div>;

}

export default D3HorizonChart;
