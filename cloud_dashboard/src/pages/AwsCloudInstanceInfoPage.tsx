import React, { useEffect, useState } from 'react';
import MenuBar from 'organisms/MenuBar';
import { useParams } from 'react-router-dom';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import KeyValuePanel from 'molecules/KeyValuePanel';
import { convertDataForUI, readDataCache } from 'service/utility';
import EntityColumn from 'model/EntityColumn';

const DETAIL_ENTITY_INFO_RECORDS: {
  panelName: string,
  keyValueRecords: EntityColumn[]
}[] = [
  {
    panelName: 'Instance',
    keyValueRecords: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Instance ID', name: 'instance_id', type: 'default' },
      { labelName: 'Instance State', name: 'instance_state', type: 'default' },
      { labelName: 'Instance type', name: 'instance_type', type: 'default' },
      { labelName: 'Cost', name: 'cost', type: 'cost' },
      { labelName: 'AMI Image', name: 'image_id', type: 'default' },
      { labelName: 'Virtualization', name: 'virtualization', type: 'default' },
      { labelName: 'Reservation', name: 'reservation', type: 'default' },
      { labelName: 'AWS account ID', name: 'account_id', type: 'default' },
      { labelName: 'Launch Time', name: 'launch_time', type: 'datetime' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
    ]
  },
  {
    panelName: 'Network',
    keyValueRecords: [
      { labelName: 'Public IP', name: 'public_ip', type: 'default' },
      { labelName: 'Private IPs', name: 'private_ips', type: 'default' },
      { labelName: 'Public DNS', name: 'public_dns', type: 'default' },
      { labelName: 'Security groups', name: 'security_groups', type: 'default' },
      { labelName: 'VPC ID', name: 'vpc_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_vpc',
        keyColumn: 'vpc_id',
        valueColumn: 'name',
      } },
      { labelName: 'Subnet ID', name: 'subnet_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_subnet',
        keyColumn: 'subnet_id',
        valueColumn: 'name',
      } },
      { labelName: 'Availability Zone', name: 'availability_zone', type: 'default' },
      { labelName: 'Network interfaces', name: 'network_interfaces', type: 'array' },
    ]
  },
  {
    panelName: 'Storage',
    keyValueRecords: [
      { labelName: 'Root Device Type', name: 'root_device_type', type: 'default' },
      { labelName: 'Root Device', name: 'root_device', type: 'default' },
      { labelName: 'EBS Optimized', name: 'ebs_optimized', type: 'boolean', value: ['On', 'Off'] },
      { labelName: 'Volume', name: 'block_devices', type: 'default' },
    ]
  },
  {
    panelName: 'Option',
    keyValueRecords: [
      { labelName: 'Termination protection', name: 'termination_protection', type: 'boolean', value: ['On', 'Off'] },
      { labelName: 'AMI Launch Index', name: 'ami_launch_index', type: 'default' },
      { labelName: 'Tenancy', name: 'tenancy', type: 'default' },
    ]
  },
];

const AwsCloudInstanceInfoPage = () => {
  const [entityData, setEntityData] = useState<EntityData>({
    id: '', attributes: {}
  });
  const [keyValData, setKeyValData] = useState<{
    title: string,
    record: Record<string, string>
  }[]>([]);
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
      const newKeyValData: {
        title: string,
        record: Record<string, string>
      }[] = [];
      for (const infoRecord of DETAIL_ENTITY_INFO_RECORDS) {
        const dataCache = await (readDataCache(infoRecord.keyValueRecords));
        const keyVal: Record<string, string> = {};
        for (const record of infoRecord.keyValueRecords) {
          keyVal[record.labelName] = convertDataForUI(
            entityData.attributes[record.name],
            record,
            dataCache
          );
        }
        newKeyValData.push( { title: infoRecord.panelName, record: keyVal } );
      }
      setKeyValData(newKeyValData);
    };
    if (entityData.id !== '') {
      refresh();
    }
  }, [entityData]);

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        {
          keyValData.map((keyValRecord) => {
            return <KeyValuePanel key={keyValRecord.title} title={keyValRecord.title} record={keyValRecord.record} />;
          })
        }
      </div>
    </div>
  </div>;
}

export default AwsCloudInstanceInfoPage;
