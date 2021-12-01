import useDrupalJsonApi, { GetJsonDataType } from 'hooks/drupal_jsonapi';
import CloudContenxtItem from 'model/CloudContenxtItem';
import { MapData } from 'model/MapData';
import RawCloudContextItem from 'model/RawCloudContextItem';
import CloudContenxtItemPopup from 'molecules/CloudContenxtItemPopup';
import MapPolygonLayer from 'molecules/MapPolygonLayer';
import React, { useEffect, useState } from 'react';
import { MapContainer } from 'react-leaflet';
import { convertCloudContenxtItemList } from 'service/utility';

/**
 * Load List of CloudContenxtItem.
 */
const LoadCloudContenxtItemList = async (getJsonData: GetJsonDataType) => {
  const response = await fetch('/clouds/cloud_dashboard/config/marker_icon_uri');
  if (!response.ok) {
    return [];
  }
  const resJson = await response.json();
  const defaultIconUri: string = resJson['uri'];
  const rawCloudContextItemList = await getJsonData<RawCloudContextItem[]>('/clouds/cloud_config_location');
  const cloudContextItemList = convertCloudContenxtItemList(rawCloudContextItemList, defaultIconUri);
  return cloudContextItemList;
};

/**
 * Load MapData.
 */
const LoadMapData = async (
  getJsonData: GetJsonDataType
) => {
  const response = await fetch('/clouds/cloud_dashboard/config/map_geojson_uri');
  if (!response.ok) {
    return {
      features: []
    };
  }
  const responseJson = await response.json();
  return await getJsonData<MapData>(responseJson['uri']);
};

/**
 * Map for cloud service providers.
 */
const CloudServiceProviderMap = () => {

  const [cloudContenxtItemList, setCloudContenxtItemList] = useState<CloudContenxtItem[]>([]);
  const [mapData, setMapData] = useState<MapData>({
    features: []
  });
  const { getJsonData } = useDrupalJsonApi();

  useEffect(() => {
    const init = async () => {
      // Load CloudContenxtItemList.
      setCloudContenxtItemList(await LoadCloudContenxtItemList(getJsonData));

      // Load MapData.
      setMapData(await LoadMapData(getJsonData));
    }

    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
