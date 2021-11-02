import React from 'react';
import { LatLngTuple } from 'leaflet';
import { Polygon } from 'react-leaflet';

const convertPositions = (positions: [number, number][]) => {
  return positions.map((r) => {
    return [r[1], r[0]] as LatLngTuple;
  })
};

const PATH_OPTIONS = {
  fillColor: '#ddc',
  fillOpacity: 1,
  color: '#ddc',
  opacity: 1,
  weight: 1,
};

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
