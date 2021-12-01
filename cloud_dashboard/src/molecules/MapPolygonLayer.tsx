import { MapData } from 'model/MapData';
import MapFeaturePolygonBlock from 'molecules/MapFeaturePolygonBlock';
import React from 'react';

/**
 * Polygon layer of MapData.
 *
 * @param mapData MapData.
 */
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
