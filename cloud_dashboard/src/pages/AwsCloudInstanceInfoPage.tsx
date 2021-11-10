import React, { useEffect, useState } from 'react';
import MenuBar from 'organisms/MenuBar';
import { useParams } from 'react-router-dom';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import KeyValuePanel from 'molecules/KeyValuePanel';
import { convertDateString } from 'service/utility';

const AwsCloudInstanceInfoPage = () => {
  const [ entityData, setEntityData ] = useState<EntityData>({
    id: '', attributes: {}
  });
  const {uuid} = useParams<{
    uuid?: string
  }>();

  useEffect(() => {
    if (typeof uuid !== 'undefined') {
      const url = `/jsonapi/aws_cloud_instance/aws_cloud_instance/${uuid}`;
      HttpService.getInstance().getJson<{data: EntityData}>(url).then((response) => {
        setEntityData(response.data);
      });
    }
  }, [uuid]);

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        <KeyValuePanel title="Instance" record={
          entityData.id !== ''
          ? {
            'Name': entityData.attributes['name'],
            'Instance ID': entityData.attributes['instance_id'],
            'Instance State': entityData.attributes['instance_state'],
            'Instance type': entityData.attributes['instance_type'],
            'Cost': '$' + entityData.attributes['cost'],
            'AMI Image': entityData.attributes['image_id'],
            'Virtualization': entityData.attributes['virtualization'],
            'Reservation': entityData.attributes['reservation'],
            'AWS account ID': entityData.attributes['account_id'],
            'Launch Time': convertDateString(entityData.attributes['launch_time']),
            'Created': convertDateString(entityData.attributes['created']),
          }
          : {
            'Status': 'Loading...'
          }} />
      </div>
    </div>
  </div>;
}

export default AwsCloudInstanceInfoPage;
