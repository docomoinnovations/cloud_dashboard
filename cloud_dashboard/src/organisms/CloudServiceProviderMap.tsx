import React, { useEffect, useState } from 'react';
import { MapContainer } from "react-leaflet";
import { convertCloudContenxtItemList, loadRawCloudContextItemList } from 'service/utility';
import CloudContenxtItem from 'model/CloudContenxtItem';
import { MapData } from 'model/MapData';
import HttpService from 'service/http';
import MapPolygonLayer from 'molecules/MapPolygonLayer';
import CloudContenxtItemPopup from 'molecules/CloudContenxtItemPopup';

/**
 * Load List of CloudContenxtItem.
 */
const LoadCloudContenxtItemList = async () => {
  const res1 = await fetch('/clouds/cloud_dashboard/config/marker_icon_uri');
  if (!res1.ok) {
    return [];
  }
  const resJson = await res1.json();
  const defaultIconUri: string = resJson['uri'];
  const rawCloudContextItemList = await loadRawCloudContextItemList();
  const cloudContextItemList = convertCloudContenxtItemList(rawCloudContextItemList, defaultIconUri);
  return cloudContextItemList;
};

/**
 * Load MapData.
 */
const LoadMapData = async () => {
  const res2 = await fetch('/clouds/cloud_dashboard/config/map_geojson_uri');
  if (!res2.ok) {
    return {
      features: []
    };
  }
  const resJson = await res2.json();
  return await HttpService.getInstance().getJson<MapData>(resJson['uri']);
};

const CloudServiceProviderMap = () => {
  const [cloudContenxtItemList, setCloudContenxtItemList] = useState<CloudContenxtItem[]>([]);
  const [mapData, setMapData] = useState<MapData>({
    features: []
  });

  useEffect(() => {
    const init = async () => {
      // Load CloudContenxtItemList.
      setCloudContenxtItemList(await LoadCloudContenxtItemList());

      // Load MapData.
      setMapData(await LoadMapData());
    }

    init();
  }, []);

  return <MapContainer
    center={[0, 0]}
    zoom={2}
    scrollWheelZoom={false}
    style={{ height: 500, backgroundColor: '#4e5d6c' }}>
    <MapPolygonLayer mapData={mapData} />
    {
      cloudContenxtItemList.map((item, index) => {
        return <CloudContenxtItemPopup item={item} key={index} />;
      })
    }
  </MapContainer>;
};

export default CloudServiceProviderMap;
