import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_LIST } from 'i18n';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet, { LatLngTuple } from 'leaflet';
import RawCloudContextItem from 'model/RawCloudContextItem';
import { loadRawCloudContextItemList } from 'service/utility';
import L from 'leaflet';
import { Link } from 'react-router-dom';

interface CloudContenxtItem {
  icon: L.Icon | undefined,
  cloudServiceProvider: string,
  position: LatLngTuple,
  item: {
    iconUrl: string,
    entityViewUrl: string,
    name: string,
    positionLabel: string,
  }[]
}

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

const convert = (rawCloudContenxtItemList: RawCloudContextItem[]): CloudContenxtItem[] => {
  const hash: Record<string, CloudContenxtItem> = {};
  for (const rawCloudContenxtItem of rawCloudContenxtItemList) {
    const hashKey = `${rawCloudContenxtItem.Latitude},${rawCloudContenxtItem.Longitude}`;
    if (hashKey in hash) {
      hash[hashKey].icon = undefined;
    } else {
      hash[hashKey] = {
        icon: new L.Icon({
          iconUrl: rawCloudContenxtItem.Items[0].Image
        }),
        cloudServiceProvider: rawCloudContenxtItem.Type,
        position: [
          parseFloat(rawCloudContenxtItem.Latitude),
          parseFloat(rawCloudContenxtItem.Longitude),
        ],
        item: []
      };
    }

    const itemList = rawCloudContenxtItem.Items.map((rawItem) => {
      return {
        iconUrl: rawItem.Image,
        entityViewUrl: rawCloudContenxtItem.Type === 'aws_cloud'
          ? '/aws_cloud/instance'
          : '/k8s/node',
        name: rawItem.Name,
        positionLabel: `${rawCloudContenxtItem.City}, ${rawCloudContenxtItem.Country}`,
      };
    });
    hash[hashKey].item = [...hash[hashKey].item, ...itemList];
  }
  return Object.values(hash);
}

const ProviderView: React.VFC = () => {
  const { cloudContextList, dispatch } = useContext(AppContext);
  const [cloudContenxtItemList, setCloudContenxtItemList] = useState<CloudContenxtItem[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    loadRawCloudContextItemList().then((res) => {
      setCloudContenxtItemList(convert(res));
    });
  }, []);

  const onClickPopupLink = (cloudServiceProvider: string, labelName: string) => {
    const temp = cloudContextList.filter((r) => {
      return r.cloudServiceProvider === cloudServiceProvider && r.labelName === labelName;
    });
    if (temp.length >= 1) {
      dispatch({type: 'setCloudContext', message: temp[0]});
    }
  }

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} style={{ height: 500 }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            cloudContenxtItemList.map((item, index) => {
              return <Marker position={item.position} icon={item.icon} key={index}>
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
                            </strong><br/>
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

