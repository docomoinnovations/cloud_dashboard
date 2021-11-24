import React from 'react';
import EntityInfoRecordData from 'model/EntityInfoRecordData';
import D3HorizonChart from 'atoms/D3HorizonChart';

const D3MetricsBlock = ({ record }: { record: EntityInfoRecordData }) => {
  if (record.type !== 'metrics') {
    return <></>;
  }

  return <>
    {
      record.record.map((data, index) => {
        return <div className="row">
          <div className="col" key={index}>
            <D3HorizonChart id={`metric-${index}`} dataSet={
              data.record.map((r) => {
                return [new Date(r.x * 1000), r.y];
              })
            }
              height={100} titleFontSize={10} titleColor="white" title={data.title}
              colors={
                index === 0
                  ? ['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c']
                  : ['#e9f8f4', '#b3e4dc', '#74c1c4', '#317fa3', '#003f6d']
              } />
          </div>
        </div>;
      })
    }
  </>;
}

export default D3MetricsBlock;
