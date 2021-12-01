import D3HorizonChart from 'atoms/D3HorizonChart';
import Form from 'bootstrap3-components/Form';
import React, { useRef, useState } from 'react';

const sampleData = [
  {
    "timestamp": 1637249400,
    "cpu": 0.000138817,
    "memory": 220340224
  },
  {
    "timestamp": 1637263860,
    "cpu": 0.000110107,
    "memory": 222208000
  },
  {
    "timestamp": 1637277600,
    "cpu": 0.00012398,
    "memory": 220266496
  },
  {
    "timestamp": 1637277600,
    "cpu": 0.00012398,
    "memory": 220266496
  },
  {
    "timestamp": 1637277600,
    "cpu": 0.00012398,
    "memory": 220266496
  },
  {
    "timestamp": 1637281860,
    "cpu": 0.004310142,
    "memory": 248422400
  },
  {
    "timestamp": 1637281860,
    "cpu": 0.000129771,
    "memory": 252497920
  },
  {
    "timestamp": 1637283600,
    "cpu": 9.5309e-5,
    "memory": 211324928
  },
  {
    "timestamp": 1637283900,
    "cpu": 9.6911e-5,
    "memory": 213422080
  },
  {
    "timestamp": 1637283900,
    "cpu": 9.6911e-5,
    "memory": 213422080
  },
  {
    "timestamp": 1637283900,
    "cpu": 0.000127031,
    "memory": 213422080
  },
  {
    "timestamp": 1637283900,
    "cpu": 0.000127031,
    "memory": 213422080
  },
  {
    "timestamp": 1637285400,
    "cpu": 0.006522019,
    "memory": 240943104
  },
  {
    "timestamp": 1637285400,
    "cpu": 0.006522019,
    "memory": 240943104
  },
  {
    "timestamp": 1637285700,
    "cpu": 0.002248977,
    "memory": 242339840
  },
  {
    "timestamp": 1637285700,
    "cpu": 0.002248977,
    "memory": 242339840
  },
  {
    "timestamp": 1637285700,
    "cpu": 0.002248977,
    "memory": 242339840
  },
  {
    "timestamp": 1637287200,
    "cpu": 0.00209824,
    "memory": 242913280
  },
  {
    "timestamp": 1637287500,
    "cpu": 0.001688035,
    "memory": 238936064
  },
  {
    "timestamp": 1637287560,
    "cpu": 0.001688035,
    "memory": 238936064
  },
  {
    "timestamp": 1637289000,
    "cpu": 0.009681237,
    "memory": 236736512
  },
  {
    "timestamp": 1637289300,
    "cpu": 0.005398534,
    "memory": 237289472
  },
  {
    "timestamp": 1637289300,
    "cpu": 0.005398534,
    "memory": 237289472
  },
  {
    "timestamp": 1637289360,
    "cpu": 0.005398534,
    "memory": 237289472
  },
  {
    "timestamp": 1637290800,
    "cpu": 0.001600835,
    "memory": 240246784
  },
  {
    "timestamp": 1637291100,
    "cpu": 0.006233043,
    "memory": 244031488
  },
  {
    "timestamp": 1637291100,
    "cpu": 0.006233043,
    "memory": 244031488
  },
  {
    "timestamp": 1637291100,
    "cpu": 0.006233043,
    "memory": 244031488
  },
  {
    "timestamp": 1637291160,
    "cpu": 0.006233043,
    "memory": 244031488
  },
  {
    "timestamp": 1637292600,
    "cpu": 0.002824957,
    "memory": 236183552
  },
  {
    "timestamp": 1637292900,
    "cpu": 0.000104691,
    "memory": 250748928
  },
  {
    "timestamp": 1637292900,
    "cpu": 0.000117983,
    "memory": 250748928
  },
  {
    "timestamp": 1637292900,
    "cpu": 0.000117983,
    "memory": 250748928
  },
  {
    "timestamp": 1637292900,
    "cpu": 0.000117983,
    "memory": 250748928
  },
  {
    "timestamp": 1637294400,
    "cpu": 0.000137948,
    "memory": 244609024
  },
  {
    "timestamp": 1637294700,
    "cpu": 0.000117058,
    "memory": 242532352
  },
  {
    "timestamp": 1637294700,
    "cpu": 0.000166399,
    "memory": 242532352
  },
  {
    "timestamp": 1637294700,
    "cpu": 0.000166399,
    "memory": 242532352
  },
  {
    "timestamp": 1637294700,
    "cpu": 0.000166399,
    "memory": 242532352
  },
  {
    "timestamp": 1637294760,
    "cpu": 0.000166399,
    "memory": 242532352
  },
  {
    "timestamp": 1637296200,
    "cpu": 0.000113779,
    "memory": 238493696
  },
  {
    "timestamp": 1637296200,
    "cpu": 0.00013437,
    "memory": 238493696
  },
  {
    "timestamp": 1637296500,
    "cpu": 0.0001405,
    "memory": 236613632
  },
  {
    "timestamp": 1637296500,
    "cpu": 0.000118597,
    "memory": 236613632
  },
  {
    "timestamp": 1637296500,
    "cpu": 0.000118597,
    "memory": 236613632
  },
  {
    "timestamp": 1637296500,
    "cpu": 0.000118597,
    "memory": 236613632
  },
  {
    "timestamp": 1637296560,
    "cpu": 0.000116828,
    "memory": 236613632
  },
  {
    "timestamp": 1637298000,
    "cpu": 0.000131172,
    "memory": 232812544
  },
  {
    "timestamp": 1637298300,
    "cpu": 0.000125576,
    "memory": 228831232
  },
  {
    "timestamp": 1637298300,
    "cpu": 0.000125576,
    "memory": 228831232
  },
  {
    "timestamp": 1637298360,
    "cpu": 0.000135923,
    "memory": 226754560
  },
  {
    "timestamp": 1637298600,
    "cpu": 0.000156724,
    "memory": 226754560
  },
  {
    "timestamp": 1637299800,
    "cpu": 0.000125908,
    "memory": 226754560
  },
  {
    "timestamp": 1637300100,
    "cpu": 0.000115031,
    "memory": 226754560
  },
  {
    "timestamp": 1637300100,
    "cpu": 0.000115031,
    "memory": 226754560
  },
  {
    "timestamp": 1637300100,
    "cpu": 0.000115031,
    "memory": 226754560
  },
  {
    "timestamp": 1637300160,
    "cpu": 0.000113794,
    "memory": 224874496
  },
  {
    "timestamp": 1637300160,
    "cpu": 0.000113794,
    "memory": 224874496
  },
  {
    "timestamp": 1637301600,
    "cpu": 8.8823e-5,
    "memory": 216633344
  },
  {
    "timestamp": 1637301900,
    "cpu": 0.000122438,
    "memory": 216682496
  },
  {
    "timestamp": 1637301900,
    "cpu": 0.000122438,
    "memory": 216682496
  },
  {
    "timestamp": 1637301900,
    "cpu": 0.000122438,
    "memory": 216682496
  },
  {
    "timestamp": 1637301960,
    "cpu": 0.000122438,
    "memory": 216682496
  },
  {
    "timestamp": 1637301960,
    "cpu": 0.000109221,
    "memory": 216682496
  },
  {
    "timestamp": 1637303400,
    "cpu": 0.000118593,
    "memory": 213331968
  },
  {
    "timestamp": 1637303700,
    "cpu": 0.000141343,
    "memory": 213331968
  },
  {
    "timestamp": 1637303700,
    "cpu": 9.819e-5,
    "memory": 213331968
  },
  {
    "timestamp": 1637303760,
    "cpu": 9.819e-5,
    "memory": 213331968
  },
  {
    "timestamp": 1637303760,
    "cpu": 0.000116539,
    "memory": 213331968
  },
  {
    "timestamp": 1637303760,
    "cpu": 0.000116539,
    "memory": 213331968
  },
  {
    "timestamp": 1637305200,
    "cpu": 9.8335e-5,
    "memory": 205381632
  },
  {
    "timestamp": 1637305200,
    "cpu": 9.8335e-5,
    "memory": 205381632
  },
  {
    "timestamp": 1637305500,
    "cpu": 0.000116739,
    "memory": 205381632
  },
  {
    "timestamp": 1637305500,
    "cpu": 0.00012896,
    "memory": 205381632
  },
  {
    "timestamp": 1637305500,
    "cpu": 0.00012896,
    "memory": 205381632
  },
  {
    "timestamp": 1637305560,
    "cpu": 0.000125524,
    "memory": 205381632
  },
  {
    "timestamp": 1637305560,
    "cpu": 0.000125524,
    "memory": 205381632
  },
  {
    "timestamp": 1637307000,
    "cpu": 0.000118786,
    "memory": 205279232
  },
  {
    "timestamp": 1637307300,
    "cpu": 0.000147994,
    "memory": 205279232
  },
  {
    "timestamp": 1637307300,
    "cpu": 0.000107108,
    "memory": 205328384
  },
  {
    "timestamp": 1637307360,
    "cpu": 0.000184659,
    "memory": 205328384
  },
  {
    "timestamp": 1637307360,
    "cpu": 0.000184659,
    "memory": 205328384
  },
  {
    "timestamp": 1637307600,
    "cpu": 9.8894e-5,
    "memory": 203227136
  },
  {
    "timestamp": 1637309100,
    "cpu": 0.000131501,
    "memory": 203362304
  },
  {
    "timestamp": 1637309100,
    "cpu": 0.00011142,
    "memory": 203362304
  },
  {
    "timestamp": 1637309160,
    "cpu": 0.00011142,
    "memory": 203362304
  },
  {
    "timestamp": 1637309160,
    "cpu": 0.000112731,
    "memory": 203362304
  },
  {
    "timestamp": 1637310600,
    "cpu": 0.008314837,
    "memory": 220778496
  },
  {
    "timestamp": 1637310900,
    "cpu": 0.006660142,
    "memory": 215281664
  },
  {
    "timestamp": 1637310900,
    "cpu": 0.007124185,
    "memory": 216686592
  },
  {
    "timestamp": 1637310960,
    "cpu": 0.007124185,
    "memory": 216686592
  },
  {
    "timestamp": 1637310960,
    "cpu": 0.006600609,
    "memory": 216477696
  },
  {
    "timestamp": 1637311200,
    "cpu": 0.010519031,
    "memory": 214323200
  },
  {
    "timestamp": 1637312400,
    "cpu": 0.008529281,
    "memory": 209928192
  },
  {
    "timestamp": 1637312400,
    "cpu": 0.008529281,
    "memory": 209928192
  },
  {
    "timestamp": 1637312700,
    "cpu": 0.001341849,
    "memory": 217964544
  },
  {
    "timestamp": 1637312760,
    "cpu": 0.006508929,
    "memory": 218648576
  },
  {
    "timestamp": 1637312760,
    "cpu": 0.006508929,
    "memory": 218648576
  },
  {
    "timestamp": 1637313000,
    "cpu": 0.009002783,
    "memory": 210345984
  },
  {
    "timestamp": 1637314200,
    "cpu": 0.001729052,
    "memory": 210980864
  },
  {
    "timestamp": 1637314500,
    "cpu": 0.009166318,
    "memory": 217587712
  },
  {
    "timestamp": 1637314560,
    "cpu": 0.006498824,
    "memory": 218361856
  },
  {
    "timestamp": 1637314620,
    "cpu": 0.006498824,
    "memory": 218361856
  },
  {
    "timestamp": 1637314800,
    "cpu": 0.01112405,
    "memory": 216154112
  },
  {
    "timestamp": 1637316000,
    "cpu": 0.00873546,
    "memory": 214130688
  },
  {
    "timestamp": 1637544960,
    "cpu": 0.000132522,
    "memory": 221851648
  },
  {
    "timestamp": 1637544960,
    "cpu": 0.000132522,
    "memory": 221851648
  },
  {
    "timestamp": 1637544960,
    "cpu": 0.000132522,
    "memory": 221851648
  },
  {
    "timestamp": 1637546400,
    "cpu": 0.000105778,
    "memory": 221925376
  },
  {
    "timestamp": 1637546700,
    "cpu": 0.000139061,
    "memory": 228106240
  },
  {
    "timestamp": 1637546760,
    "cpu": 0.000139061,
    "memory": 228106240
  },
  {
    "timestamp": 1637546760,
    "cpu": 0.000135712,
    "memory": 227848192
  },
  {
    "timestamp": 1637548200,
    "cpu": 0.006516389,
    "memory": 214622208
  },
  {
    "timestamp": 1637548500,
    "cpu": 0.00530986,
    "memory": 219664384
  },
  {
    "timestamp": 1637548500,
    "cpu": 0.00530986,
    "memory": 219664384
  },
  {
    "timestamp": 1637548560,
    "cpu": 0.000124817,
    "memory": 221921280
  },
  {
    "timestamp": 1637550000,
    "cpu": 0.000493939,
    "memory": 207548416
  },
  {
    "timestamp": 1637550300,
    "cpu": 0.000116193,
    "memory": 216068096
  },
  {
    "timestamp": 1637550300,
    "cpu": 0.000116193,
    "memory": 216068096
  },
  {
    "timestamp": 1637550300,
    "cpu": 0.000116193,
    "memory": 216068096
  },
  {
    "timestamp": 1637550300,
    "cpu": 0.000116193,
    "memory": 216068096
  },
  {
    "timestamp": 1637551800,
    "cpu": 0.000113823,
    "memory": 204398592
  },
  {
    "timestamp": 1637552100,
    "cpu": 0.000519594,
    "memory": 214085632
  },
  {
    "timestamp": 1637552100,
    "cpu": 0.000519594,
    "memory": 214085632
  },
  {
    "timestamp": 1637552100,
    "cpu": 0.006935046,
    "memory": 221904896
  },
  {
    "timestamp": 1637552160,
    "cpu": 0.006935046,
    "memory": 221904896
  },
  {
    "timestamp": 1637553600,
    "cpu": 0.008026218,
    "memory": 218238976
  },
  {
    "timestamp": 1637553600,
    "cpu": 0.005582782,
    "memory": 216567808
  },
  {
    "timestamp": 1637556600,
    "cpu": 0.006071866,
    "memory": 216485888
  },
  {
    "timestamp": 1637556600,
    "cpu": 0.000402209,
    "memory": 216473600
  },
  {
    "timestamp": 1637557200,
    "cpu": 0.006023336,
    "memory": 216797184
  },
  {
    "timestamp": 1637557200,
    "cpu": 0.006023336,
    "memory": 216797184
  },
  {
    "timestamp": 1637557560,
    "cpu": 0.001079574,
    "memory": 216649728
  }
];

/**
 * Wrapper of parseInt()
 *
 * @param s String of integer number.
 * @param defaultValue Default value when parseInt fails.
 */
const tryParseInt = (s: string, defaultValue: number) => {
  try {
    return parseInt(s, 10);
  } catch {
    return defaultValue;
  }
}

/**
 * Wrapper of parseFloat()
 *
 * @param s String of floating number.
 * @param defaultValue Default value when parseFloat fails.
 */
const tryParseFloat = (s: string, defaultValue: number) => {
  const temp = parseFloat(s);
  return isNaN(temp) ? defaultValue : temp;
}

/**
 * Sample compont for D3HorizonChart.
 */
const D3HorizonChartSampleBlock = () => {

  const [title, setTitle] = useState('Sample Chart');
  const [height, setHeight] = useState('100');
  const [width, setWidth] = useState('1000');
  const [yRangeMin, setYRangeMin] = useState('0');
  const [yRangeMax, setYRangeMax] = useState('-1');
  const [titleColor, setTitleColor] = useState('#000000');
  const [titleFontSize, setTitleFontSize] = useState('20');
  const [colors, setColors] = useState(['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c']);
  const [newColor, setNewColor] = useState('#000000');
  const colorsRef = useRef<HTMLSelectElement>(null);

  return <>
    <hr />
    <D3HorizonChart
      id="horizon-chart"
      dataSet={
        sampleData.map((r) => {
          return [new Date(r.timestamp * 1000), r.cpu];
        })
      }
      height={tryParseInt(height, 100)}
      width={tryParseInt(width, 1000)}
      yRange={
        tryParseFloat(yRangeMin, 0) < tryParseFloat(yRangeMax, -1)
          ? [tryParseFloat(yRangeMin, 0), tryParseFloat(yRangeMax, -1)]
          : undefined
      }
      title={title}
      titleColor={titleColor}
      titleFontSize={tryParseInt(titleFontSize, 20)}
      colors={colors}
    />
    <hr />
    <form>
      <Form.Group>
        <Form.Label htmlFor="chartTitle">Title</Form.Label>
        <Form.Input type="text" id="chartTitle" value={title} onChange={(e) => {
          setTitle(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartHeight">Height</Form.Label>
        <Form.Input type="number" id="chartHeight" value={height} onChange={(e) => {
          setHeight(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartWidth">Width</Form.Label>
        <Form.Input type="number" id="chartWidth" value={width} onChange={(e) => {
          setWidth(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartYRangeMin">yRangeMin</Form.Label>
        <Form.Input type="number" id="chartYRangeMin" value={yRangeMin} onChange={(e) => {
          setYRangeMin(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartYRangeMax">yRangeMax</Form.Label>
        <Form.Input type="number" id="chartYRangeMax" value={yRangeMax} onChange={(e) => {
          setYRangeMax(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartTitleColor">TitleColor</Form.Label>
        <Form.Input type="text" id="chartTitleColor" value={titleColor} onChange={(e) => {
          setTitleColor(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartTitleFontSize">TitleFontSize</Form.Label>
        <Form.Input type="number" id="chartTitleFontSize" value={titleFontSize} onChange={(e) => {
          setTitleFontSize(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="chartColors">Colors</Form.Label>
        <Form.Select ref={colorsRef} multiple style={{ marginLeft: 0, marginRight: 0 }}>
          {
            colors.map((c, index) => {
              return <option key={index}>{c}</option>
            })
          }
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Input type="text" id="chartColors" value={newColor} onChange={(e) => {
          setNewColor(e.currentTarget.value);
        }} />
      </Form.Group>
      <Form.Group>
        <button type="button" className="btn btn-default" style={{ marginRight: 20 }} onClick={() => {
          setColors([...colors, newColor]);
        }}>追加</button>
        <button type="button" className="btn btn-default" onClick={() => {
          const temp = colorsRef.current;
          if (temp === null) {
            return;
          }
          const newColors: string[] = [];
          for (let i = 0; i < temp.options.length; i++) {
            const record = temp.options.item(i);
            if (record !== null && !record.selected) {
              newColors.push(record.text);
            }
          }
          setColors(newColors);
        }}>削除</button>
      </Form.Group>
    </form>
    <hr />
  </>;

}

export default D3HorizonChartSampleBlock;
