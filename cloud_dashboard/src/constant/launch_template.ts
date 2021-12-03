import CloudContext from 'model/CloudContext';
import EntityColumn from 'model/EntityColumn';

// Template for displaying the Launch template in AWS Cloud.
const AWS_LAUNCH_TEMPLATE_LIST: EntityColumn[] = [
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

const DEFAULT_AWS_LAUNCH_TEMPLATE: EntityColumn = { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' };

// Template for displaying the Launch template in K8s.
const K8S_LAUNCH_TEMPLATE_LIST: EntityColumn[] = [
  { labelName: 'Name', 'name': 'name', type: 'default' },
  { labelName: 'Namespace', 'name': 'field_namespace', type: 'default' },
  { labelName: 'Object', 'name': 'field_object', type: 'array' },
  { labelName: 'Enable time scheduler', 'name': 'field_enable_time_scheduler', type: 'boolean', value: ['On', 'Off'] },
  { labelName: 'Workflow status', 'name': 'field_workflow_status', type: 'default' },
];

const DEFAULT_K8S_LAUNCH_TEMPLATE: EntityColumn = { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' };

/**
 * Get LaunchTemplateColumnList by cloud_context.
 * 
 * @param cloudContext cloud_context.
 * @returns LaunchTemplateColumnList.
 */
const getLaunchTemplateColumnList = (cloudContext: CloudContext): EntityColumn[] => {
  switch (cloudContext.cloudServiceProvider) {
    case 'aws_cloud':
      return cloudContext.name !== 'ALL'
        ? AWS_LAUNCH_TEMPLATE_LIST
        : [
          DEFAULT_AWS_LAUNCH_TEMPLATE,
          ...AWS_LAUNCH_TEMPLATE_LIST
        ];
    case 'k8s':
      return cloudContext.name !== 'ALL'
        ? K8S_LAUNCH_TEMPLATE_LIST
        : [
          DEFAULT_K8S_LAUNCH_TEMPLATE,
          ...K8S_LAUNCH_TEMPLATE_LIST
        ];
    default:
      throw new Error('It is an unknown Cloud Context.');
  }
};

export default getLaunchTemplateColumnList;
