import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CloudContenxtItemlabel from "model/CloudContenxtItemLabel";
import { AppContext } from 'service/state';

/**
 * Label on CloudContenxtItemPopup.
 *
 * @param cloudServiceProvider Name of cloudServiceProvider.
 * @param label Labeling data of CloudContenxtItem.
 */
const CloudContenxtItemPopupLabel = ({ cloudServiceProvider, label } : {
  cloudServiceProvider: string,
  label: CloudContenxtItemlabel
}) => {
  const { cloudContextList, dispatch } = useContext(AppContext);

  const onClickPopupLink = (labelName: string) => {
    const candidate = cloudContextList.filter((r) => {
      return r.cloudServiceProvider === cloudServiceProvider && r.labelName === labelName;
    });
    if (candidate.length >= 1) {
      dispatch({ type: 'setCloudContext', message: candidate[0] });
    }
  }

  return <div>
    <div>
      <Link to={label.entityViewUrl} target="_blank" rel="noreferrer" onClick={() => {
        onClickPopupLink(label.name);
      }}>
        <img src={label.iconUrl} alt={label.name} />
      </Link>
    </div>
    <div>
      <strong>
        <Link to={label.entityViewUrl} target="_blank" rel="noreferrer" onClick={() => {
          onClickPopupLink(label.name);
        }}>
          {label.name}
        </Link>
      </strong><br />
      <span className="location">
        <span className="glyphicon glyphicon-map-marker"></span>
        {label.positionLabel}
      </span>
    </div>
  </div>;
};

export default CloudContenxtItemPopupLabel;
