import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_LIST } from 'i18n';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet, { LatLngTuple } from 'leaflet';
import HttpService from 'service/http';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

interface CloudContetLocation {
  name: string;
  position: LatLngTuple;
}

const ProviderView: React.VFC = () => {
  const { cloudContextList, dispatch } = useContext(AppContext);
  const [cloudContetLocationList, setCloudContetLocationList] = useState<CloudContetLocation[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const http = HttpService.getInstance();
    http.getJson<{
      Items: {
        Image: string,
        Name: string
      }[],
      Latitude: string,
      Longitude: string
    }[]>('/clouds/cloud_config_location').then((res) => {
      const newList: CloudContetLocation[] = [];
      for (const item of res) {
        for (const item2 of item.Items) {
          newList.push({
            name: item2.Name,
            position: [
              parseFloat(item.Latitude),
              parseFloat(item.Longitude)
            ]
          });
        }
      }
      setCloudContetLocationList(newList);
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
            cloudContetLocationList.map((cloudContetLocation, index) => {
              return <Marker position={cloudContetLocation.position} key={index}>
                <Popup>
                  {cloudContetLocation.name}
                </Popup>
              </Marker>;
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

