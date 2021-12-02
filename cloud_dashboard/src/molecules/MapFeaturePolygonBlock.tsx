import { MapFeature } from 'model/MapData';
import MapPolygonBlock from 'molecules/MapPolygonBlock';
import React from 'react';

/**
 * Polygon block of MapFeature.
 *
 * @param feature MapFeature.
 */
const MapFeaturePolygonBlock = ({ feature }: {
  feature: MapFeature
}) => {

  if (feature.geometry.type === 'Polygon') {
    return <MapPolygonBlock coordinates={feature.geometry.coordinates} />;
  }

  return <>
    {
      feature.geometry.coordinates.map((coordinates, index) => {
        return <MapPolygonBlock coordinates={coordinates} key={index} />;
      })
    }
  </>;

}

export default MapFeaturePolygonBlock;
