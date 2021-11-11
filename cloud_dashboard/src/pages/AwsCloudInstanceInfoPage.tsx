import React, { useEffect, useState } from 'react';
import MenuBar from 'organisms/MenuBar';
import { useParams } from 'react-router-dom';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import KeyValuePanel from 'molecules/KeyValuePanel';
import { convertDateString, getEntityDataAll } from 'service/utility';

const getVpcData = async (vpcId: string) => {
  const vpcList = await getEntityDataAll('aws_cloud_vpc');
  const filteredVpc = vpcList.filter((r) => {
    return r.attributes['vpc_id'] === vpcId;
  });
  if (filteredVpc.length >= 1) {
    return `${filteredVpc[0].attributes['name']} (${vpcId})`;
  } else {
    return `??? (${vpcId})`;
  }
};

const getSubnetData = async (subnetId: string) => {
  const subnetList = await getEntityDataAll('aws_cloud_subnet');
  const filteredSubnet = subnetList.filter((r) => {
    return r.attributes['subnet_id'] === subnetId;
  });
  if (filteredSubnet.length >= 1) {
    return `${filteredSubnet[0].attributes['name']} (${subnetId})`;
  } else {
    return `??? (${subnetId})`;
  }
};

const AwsCloudInstanceInfoPage = () => {
  const [entityData, setEntityData] = useState<EntityData>({
    id: '', attributes: {}
  });
  const [vpcText, setVpcText] = useState('');
  const [subnetText, setSubnetText] = useState('');
  const { uuid } = useParams<{
    uuid?: string
  }>();

  useEffect(() => {
    if (typeof uuid !== 'undefined') {
      const url = `/jsonapi/aws_cloud_instance/aws_cloud_instance/${uuid}`;
      HttpService.getInstance().getJson<{ data: EntityData }>(url).then((response) => {
        setEntityData(response.data);
      });
    }
  }, [uuid]);

  useEffect(() => {
    const refresh = async () => {
      if (entityData.id === '') {
        return;
      }

      setVpcText(await getVpcData(entityData.attributes['vpc_id']));
      setSubnetText(await getSubnetData(entityData.attributes['subnet_id']));
    };
    refresh();
  }, [entityData]);

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
        <KeyValuePanel title="Network" record={
          entityData.id !== ''
            ? {
              'Public IP': entityData.attributes['public_ip'],
              'Private IPs': entityData.attributes['private_ips'],
              'Public DNS': entityData.attributes['public_dns'],
              'Security groups': entityData.attributes['security_groups'],
              'VPC ID': vpcText,
              'Subnet ID': subnetText,
              'Availability Zone': entityData.attributes['availability_zone'],
              'Network interfaces': (entityData.attributes['network_interfaces'] as string[]).join(','),
            }
            : {
              'Status': 'Loading...'
            }} />
        <KeyValuePanel title="Storage" record={
          entityData.id !== ''
            ? {
              'Root Device Type': entityData.attributes['root_device_type'],
              'Root Device': entityData.attributes['root_device'],
              'EBS Optimized': entityData.attributes['ebs_optimized'] ? 'On' : 'Off',
              'Volume': entityData.attributes['block_devices'],
            }
            : {
              'Status': 'Loading...'
            }} />
        <KeyValuePanel title="Option" record={
          entityData.id !== ''
            ? {
              'Termination protection': entityData.attributes['termination_protection'] ? 'On' : 'Off',
              'AMI Launch Index': entityData.attributes['ami_launch_index'],
              'Tenancy': entityData.attributes['tenancy'],
            }
            : {
              'Status': 'Loading...'
            }} />
      </div>
    </div>
  </div>;
}

export default AwsCloudInstanceInfoPage;
