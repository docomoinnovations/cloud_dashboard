import CloudContenxtItem from 'model/CloudContenxtItem';
import CloudContenxtItemPopupLabel from 'molecules/CloudContenxtItemPopupLabel';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

/**
 * Popup on CloudServiceProviderMap.
 *
 * @param item Information of CloudContenxt.
 */
const CloudContenxtItemPopup = ({ item }: {
  item: CloudContenxtItem
}) => {

  return <Marker position={item.position} icon={item.icon}>
    <Popup>
      {
        item.item.map((item2, index) => {
          return <CloudContenxtItemPopupLabel
            cloudServiceProvider={item.cloudServiceProvider}
            label={item2}
            key={index} />;
        })
      }
    </Popup>
  </Marker>;

};

export default CloudContenxtItemPopup;
