import D3HorizonChart from 'atoms/D3HorizonChart';
import Col from 'bootstrap3-components/Col';
import Row from 'bootstrap3-components/Row';
import EntityInfoRecordData from 'model/EntityInfoRecordData';
import React from 'react';

/**
 * Block of metric info view.
 *
 * @param record Record data fo metric info.
 */
const D3MetricsBlock = ({ record }: { record: EntityInfoRecordData }) => {

  if (record.type !== 'metrics') {
    return <></>;
  }

  return <>
    {
      record.record.map((data, index) => {
        return <Row key={index}>
          <Col>
            <D3HorizonChart
              id={`metric-${index}`}
              dataSet={
                data.record.map((r) => {
                  return [new Date(r.x * 1000), r.y];
                })
              }
              height={100}
              titleFontSize={10}
              titleColor="white"
              title={data.title}
              colors={
                index === 0
                  ? ['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c']
                  : ['#e9f8f4', '#b3e4dc', '#74c1c4', '#317fa3', '#003f6d']
              } />
          </Col>
        </Row>;
      })
    }
  </>;

}

export default D3MetricsBlock;
