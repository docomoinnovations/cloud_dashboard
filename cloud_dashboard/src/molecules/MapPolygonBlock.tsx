import { LatLngTuple } from 'leaflet';
import React from 'react';
import { Polygon } from 'react-leaflet';

/**
 * Converter of type format for viewing polygon data.
 *
 * @param positions Polygon data.
 */
const convertPositions = (positions: [number, number][]) => {
  return positions.map((r) => {
    return [r[1], r[0]] as LatLngTuple;
  })
};

// Polygon path parameter.
const PATH_OPTIONS = {
  fillColor: '#ddc',
  fillOpacity: 1,
  color: '#ddc',
  opacity: 1,
  weight: 1,
};

/**
 * Polygon block of map.
 *
 * @param coordinates Map polygon data.
 */
const MapPolygonBlock = ({ coordinates }: {
  coordinates: [number, number][][]
}) => {

  return <>
    {
      coordinates.map((positions, index) => {
        return <Polygon pathOptions={PATH_OPTIONS} positions={convertPositions(positions)} key={index} />;
      })
    }
  </>;

}

export default MapPolygonBlock;
