type MapPolygon = {
  coordinates: [number, number][][],
  type: 'Polygon'
};

type MapMultiPolygon = {
  coordinates: [number, number][][][],
  type: 'MultiPolygon'
};

export type MapFeature = {
  geometry: MapPolygon | MapMultiPolygon,
  properties: {
    name: string;
  }
};

export type MapData = {
  features: MapFeature[];
}
