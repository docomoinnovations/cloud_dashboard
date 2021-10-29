import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Polygon, Popup } from "react-leaflet";
import { convertCloudContenxtItemList, loadRawCloudContextItemList } from 'service/utility';
import { LatLngTuple } from 'leaflet';
import CloudContenxtItem from 'model/CloudContenxtItem';
import { MapData, MapFeature } from 'model/MapData';
import { Link } from 'react-router-dom';
import HttpService from 'service/http';
import { AppContext } from 'service/state';

const MapPolygonBlock: React.VFC<{
  coordinates: [number, number][][]
}> = ({ coordinates }) => {
  const convertPositions = (positions: [number, number][]) => {
    return positions.map((r) => {
      return [r[1], r[0]] as LatLngTuple;
    })
  }

  return <>
    {
      coordinates.map((positions, index) => {
        return <Polygon pathOptions={{
          fillColor: '#ddc',
          fillOpacity: 1,
          color: '#ddc',
          opacity: 1,
          weight: 1,
        }}  positions={convertPositions(positions)} key={index} />;
      })
    }
  </>;
}

const MapFeaturePolygonBlock: React.VFC<{
  feature: MapFeature
}> = ({ feature }) => {
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

const MapPolygonLayer: React.VFC<{
  mapData: MapData
}> = ({ mapData }) => {
  return <>
    {
      mapData.features.map((feature, index) => {
        return <MapFeaturePolygonBlock feature={feature} key={index} />;
      })
    }
  </>;
}

const CloudContenxtItemPopup: React.VFC<{
  item: CloudContenxtItem
}> = ({ item }) => {
  const { cloudContextList, dispatch } = useContext(AppContext);

  const onClickPopupLink = (cloudServiceProvider: string, labelName: string) => {
    const temp = cloudContextList.filter((r) => {
      return r.cloudServiceProvider === cloudServiceProvider && r.labelName === labelName;
    });
    if (temp.length >= 1) {
      dispatch({ type: 'setCloudContext', message: temp[0] });
    }
  }

  return <Marker position={item.position} icon={item.icon}>
    <Popup>
      {
        item.item.map((item2, index2) => {
          return <div key={index2}>
            <div>
              <Link to={item2.entityViewUrl} target="_blank" rel="noreferrer" onClick={() => {
                onClickPopupLink(item.cloudServiceProvider, item2.name);
              }}>
                <img src={item2.iconUrl} alt={item2.name} />
              </Link>
            </div>
            <div>
              <strong>
                <Link to={item2.entityViewUrl} target="_blank" rel="noreferrer" onClick={() => {
                  onClickPopupLink(item.cloudServiceProvider, item2.name);
                }}>
                  {item2.name}
                </Link>
              </strong><br />
              <span className="location">
                <span className="glyphicon glyphicon-map-marker"></span>
                {item2.positionLabel}
              </span>
            </div>
          </div>;
        })
      }
    </Popup>
  </Marker>;
};


const CloudServiceProviderMap: React.VFC = () => {
  const [cloudContenxtItemList, setCloudContenxtItemList] = useState<CloudContenxtItem[]>([]);
  const [mapData, setMapData] = useState<MapData>({
    features: []
  });

  useEffect(() => {
    const init = async () => {
      // Load CloudContenxtItemList.
      const res1 = await fetch('/clouds/cloud_dashboard/config/marker_icon_uri');
      if (res1.ok) {
        const resJson = await res1.json();
        const defaultIconUri: string = resJson['uri'];
        const rawCloudContextItemList = await loadRawCloudContextItemList();
        const cloudContextItemList = convertCloudContenxtItemList(rawCloudContextItemList, defaultIconUri);
        setCloudContenxtItemList(cloudContextItemList);
      }

      // Load MapData.
      const res2 = await fetch('/clouds/cloud_dashboard/config/map_geojson_uri');
      if (res2.ok) {
        const resJson = await res2.json();
        const mapDataRaw = await HttpService.getInstance().getJson<MapData>(resJson['uri']);
        setMapData(mapDataRaw);
      }
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
