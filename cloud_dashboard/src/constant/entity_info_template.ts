import EntityInfoTemplate from 'model/EntityInfoTemplate';

// Template for displaying detailed information about entities in AWS Cloud.
export const AWS_ENTITY_INFO_LIST: EntityInfoTemplate[] = [
  {
    cloudServiceProvider: 'aws_cloud',
    entityName: 'instance',
    entityRecords: [
      {
        panelName: 'Instance',
        tableRecordList: [],
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
        tableRecordList: [],
        keyValueRecords: [
          {
            labelName: 'Public IP', name: 'public_ip', type: 'join', info: {
              entityTypeId: 'aws_cloud_elastic_ip',
              keyColumn: 'public_ip',
              valueColumn: 'name',
            }
          },
          { labelName: 'Private IPs', name: 'private_ips', type: 'default' },
          { labelName: 'Public DNS', name: 'public_dns', type: 'default' },
          { labelName: 'Security groups', name: 'security_groups', type: 'default' },
          {
            labelName: 'VPC ID', name: 'vpc_id', type: 'join', info: {
              entityTypeId: 'aws_cloud_vpc',
              keyColumn: 'vpc_id',
              valueColumn: 'name',
            }
          },
          {
            labelName: 'Subnet ID', name: 'subnet_id', type: 'join', info: {
              entityTypeId: 'aws_cloud_subnet',
              keyColumn: 'subnet_id',
              valueColumn: 'name',
            }
          },
          { labelName: 'Availability Zone', name: 'availability_zone', type: 'default' },
          { labelName: 'Network interfaces', name: 'network_interfaces', type: 'array' },
        ]
      },
      {
        panelName: 'Storage',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: 'Root Device Type', name: 'root_device_type', type: 'default' },
          { labelName: 'Root Device', name: 'root_device', type: 'default' },
          { labelName: 'EBS Optimized', name: 'ebs_optimized', type: 'boolean', value: ['On', 'Off'] },
          { labelName: 'Volume', name: 'block_devices', type: 'default' },
        ]
      },
      {
        panelName: 'Tags',
        tableRecordList: ['tags'],
        keyValueRecords: [
          { labelName: 'Tags', name: 'tags', type: 'default' },
        ]
      },
      {
        panelName: 'Option',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: 'Termination protection', name: 'termination_protection', type: 'boolean', value: ['On', 'Off'] },
          { labelName: 'AMI Launch Index', name: 'ami_launch_index', type: 'default' },
          { labelName: 'Tenancy', name: 'tenancy', type: 'default' },
        ]
      },
    ]
  }
];

// Template for displaying detailed information about entities in K8s.
export const K8S_ENTITY_INFO_LIST: EntityInfoTemplate[] = [
  {
    cloudServiceProvider: 'k8s',
    entityName: 'pod',
    entityRecords: [
      {
        panelName: 'Metrics',
        tableRecordList: [],
        keyValueRecords: [
          {
            labelName: '', name: '', type: 'metrics', column: [
              { title: 'CPU Usage', yLabel: 'CPU (Cores)', name: 'cpu', type: 'default' },
              { title: 'Memory Usage', yLabel: 'Memory (Bytes)', name: 'memory', type: 'memory' }
            ]
          },
        ]
      },
      {
        panelName: 'Pod',
        tableRecordList: ['labels', 'annotations'],
        keyValueRecords: [
          { labelName: 'Name', name: 'name', type: 'default' },
          { labelName: 'Labels', name: 'labels', type: 'default' },
          { labelName: 'Annotations', name: 'annotations', type: 'default' },
          { labelName: 'Namespace', name: 'namespace', type: 'default' },
          { labelName: 'Status', name: 'status', type: 'default' },
          { labelName: 'Qos Class', name: 'qos_class', type: 'default' },
          { labelName: 'Node', name: 'node_name', type: 'default' },
          { labelName: 'Pod IP', name: 'pod_ip', type: 'default' },
        ]
      },
      {
        panelName: 'Metrics',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: 'CPU (Request)', name: 'cpu_request', type: 'cpu' },
          { labelName: 'CPU (Limit)', name: 'cpu_limit', type: 'cpu' },
          { labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'cpu' },
          { labelName: 'Memory (Request)', name: 'memory_request', type: 'memory' },
          { labelName: 'Memory (Limit)', name: 'memory_limit', type: 'memory' },
          { labelName: 'Memory (Usage)', name: 'memory_usage', type: 'memory' },
        ]
      },
      {
        panelName: 'Containers',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: 'Containers', name: 'containers', type: 'array' },
        ]
      },
      {
        panelName: 'Detail',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: 'Detail', name: 'detail', type: 'default' },
        ]
      },
      {
        panelName: 'Other',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
        ]
      },
    ]
  }
];
