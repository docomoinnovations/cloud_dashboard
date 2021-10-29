import React from 'react';
import { MapData } from 'model/MapData';
import MapFeaturePolygonBlock from 'molecules/MapFeaturePolygonBlock';

const MapPolygonLayer = ({ mapData }: {
  mapData: MapData
}) => {
  return <>
    {
      mapData.features.map((feature, index) => {
        return <MapFeaturePolygonBlock feature={feature} key={index} />;
      })
    }
  </>;
}

export default MapPolygonLayer;
