import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_LIST } from 'i18n';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import RawCloudContextItem from 'model/RawCloudContextItem';
import { loadRawCloudContextItemList } from 'service/utility';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

const ProviderView: React.VFC = () => {
  const { cloudContextList, dispatch } = useContext(AppContext);
  const [rawCloudContenxtItemList, setRawCloudContenxtItemList] = useState<RawCloudContextItem[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    loadRawCloudContextItemList().then((res) => {
      console.log(res);
      setRawCloudContenxtItemList(res);
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
            rawCloudContenxtItemList.map((item, index) => {
              return <Marker position={[
                parseFloat(item.Latitude),
                parseFloat(item.Longitude),
              ]} key={index}>
                <Popup>
                  {
                    item.Items.map((item2, index2) => {
                      return <div key={index2}>
                        <div>
                          <a href={item2.Url} target="_blank" rel="noreferrer">
                            <img src={item2.Image} alt={item2.Name} />
                          </a>
                        </div>
                        <div>
                          <strong><a href={item2.Url} target="_blank" rel="noreferrer">{item2.Name}</a></strong><br/>
                          <span className="location">
                            <span className="glyphicon glyphicon-map-marker"></span>
                            {item.City}, {item.Country}
                          </span>
                        </div>
                      </div>;
                    })
                  }
                </Popup>
              </Marker>
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

