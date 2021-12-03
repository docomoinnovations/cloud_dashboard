import EntityColumn from 'model/EntityColumn';


export const AWS_LAUNCH_TEMPLATE_LIST: EntityColumn[] = [
  { labelName: 'Name', 'name': 'name', type: 'default' },
  { labelName: 'AMI Name', 'name': 'field_image_id', type: 'default' },
  { labelName: 'Instance type', 'name': 'field_instance_type', type: 'default' },
  {
    labelName: 'VPC', 'name': 'field_vpc', type: 'join', info: {
      entityTypeId: 'aws_cloud_vpc',
      keyColumn: 'vpc_id',
      valueColumn: 'name',
    }
  },
  { labelName: 'Max count', 'name': 'field_max_count', type: 'default' },
  { labelName: 'Status', 'name': 'field_workflow_status', type: 'default' },
];
export const K8S_LAUNCH_TEMPLATE_LIST: EntityColumn[] = [
  { labelName: 'Name', 'name': 'name', type: 'default' },
  { labelName: 'Namespace', 'name': 'field_namespace', type: 'default' },
  { labelName: 'Object', 'name': 'field_object', type: 'array' },
  { labelName: 'Enable time scheduler', 'name': 'field_enable_time_scheduler', type: 'boolean', value: ['On', 'Off'] },
  { labelName: 'Workflow status', 'name': 'field_workflow_status', type: 'default' },
];
