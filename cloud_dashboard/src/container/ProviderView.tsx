import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_LIST } from 'i18n';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet, { LatLngTuple } from 'leaflet';
import HttpService from 'service/http';
import L from 'leaflet';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

interface CloudContetLocation {
  nameList: string[];
  icon: L.Icon;
  position: LatLngTuple;
}

const loadLocationData = async () => {
  // Get rawData.
  let url = '/clouds/cloud_config_location';
  const jsonApiServerUri = window.localStorage.getItem('jsonapiServerUri');
  if (jsonApiServerUri !== null) {
    url = jsonApiServerUri + url;
  }
  const http = HttpService.getInstance();
  const rawData = await http.getJson<{
    Items: {
      Image: string,
      Name: string,
    }[],
    Latitude: string,
    Longitude: string
  }[]>(url);

  // Convert rawData to cloudContentLocationDict.
  const cloudContentLocationDict: Record<string, CloudContetLocation> = {};
  for (const locationData of rawData) {
    for (const item of locationData.Items) {
      const key = `${locationData.Latitude},${locationData.Longitude}`;
      if (key in cloudContentLocationDict) {
        cloudContentLocationDict[key].nameList.push(item.Name);
      } else {
        cloudContentLocationDict[key] = {
          nameList: [item.Name],
          icon: new L.Icon({
            iconUrl: item.Image,
            iconSize: [30, 30]
          }),
          position: [
            parseFloat(locationData.Latitude),
            parseFloat(locationData.Longitude)
          ],
        };
      }
    }
  }
  return cloudContentLocationDict;
}

const ProviderView: React.VFC = () => {
  const { cloudContextList, dispatch } = useContext(AppContext);
  const [cloudContentLocationDict, setCloudContentLocationDict] = useState<Record<string, CloudContetLocation>>({});
  const { t, i18n } = useTranslation();

  useEffect(() => {
    loadLocationData().then((res) => {
      setCloudContentLocationDict(res);
    });
  }, []);

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} style={{ height: 500 }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            Object.values(cloudContentLocationDict).map((val, index) => {
              if (val.nameList.length >= 2) {
                return <Marker position={val.position} key={index}>
                  <Popup>
                    {val.nameList.join(', ')}
                  </Popup>
                </Marker>;
              } else {
                return <Marker position={val.position} icon={val.icon} key={index}>
                  <Popup>
                    {val.nameList[0]}
                  </Popup>
                </Marker>;
              }
            })
          }
        </MapContainer>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <form>
          <div className="form-group" style={{ marginTop: '2rem' }}>
            <label className="control-label">{t('Language')}</label><br />
            <div className="btn-group" role="group">
              {
                LANGUAGE_LIST.map((language) => {
                  return <button
                    type="button"
                    className="btn btn-default"
                    disabled={i18n.language === language.key}
                    onClick={() => {
                      dispatch({ type: 'setLanguage', message: language.key });
                    }}>{language.value}</button>;
                })
              }
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '2rem' }}>
            <label className="control-label">Cloud Service Providers</label>
          </div>
          <div className="table-responsive" style={{ marginTop: '2rem' }}>
            <table className="table table-hover table-striped sticky-enabled sticky-table">
              <thead>
                <th>Name</th>
              </thead>
              <tbody>
                {
                  cloudContextList
                    .filter((r) => r.name !== 'ALL')
                    .map((r, index) => {
                      return <tr key={index}>
                        <td>{r.labelName}</td>
                      </tr>;
                    })
                }
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>;
}

export default ProviderView;

