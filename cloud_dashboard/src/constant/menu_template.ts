import MenuTemplate from 'model/MenuTemplate';

// Template for displaying a list of entities in AWS Cloud.
export const AWS_MENU_LIST: MenuTemplate[] = [
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Instance',
    entityName: 'instance',
    detailInfoColumn: 'name',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Public IP', name: 'public_ip', type: 'default' },
      { labelName: 'Instance State', name: 'instance_state', type: 'default' },
      { labelName: 'Instance Type', name: 'instance_type', type: 'default' },
      { labelName: 'Availability Zone', name: 'availability_zone', type: 'default' },
      { labelName: 'Cost', name: 'cost', type: 'cost' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Image',
    entityName: 'image',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'AMI Name', name: 'ami_name', type: 'default' },
      { labelName: 'AMI ID', name: 'image_id', type: 'default' },
      { labelName: 'Status', name: 'status', type: 'default' },
      { labelName: 'Source', name: 'source', type: 'default' },
      { labelName: 'Root Device Type', name: 'root_device_type', type: 'default' },
      { labelName: 'Visibility', name: 'visibility', type: 'boolean', value: ['Public', 'Private'] },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Security Group',
    entityName: 'security_group',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Group ID', name: 'group_id', type: 'default' },
      {
        labelName: 'VPC', name: 'vpc_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_vpc',
          keyColumn: 'vpc_id',
          valueColumn: 'name',
        }
      },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Elastic IP',
    entityName: 'elastic_ip',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Allocation ID', name: 'allocation_id', type: 'default' },
      { labelName: 'Type', name: 'elastic_ip_type', type: 'default' },
      { labelName: 'Elastic IP', name: 'public_ip', type: 'default' },
      {
        labelName: 'Instance ID', name: 'instance_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_instance',
          keyColumn: 'instance_id',
          valueColumn: 'name',
        }
      },
      { labelName: 'Private IP Address', name: 'private_ip_address', type: 'default' },
      { labelName: 'Scope', name: 'scope', type: 'default' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Key Pair',
    entityName: 'key_pair',
    entityColumn: [
      { labelName: 'Key Pair Name', name: 'key_pair_name', type: 'default' },
      { labelName: 'Key Fingerprint', name: 'key_fingerprint', type: 'default' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Volume',
    entityName: 'volume',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Volume ID', name: 'volume_id', type: 'default' },
      { labelName: 'IOPS', name: 'iops', type: 'default' },
      { labelName: 'Size', name: 'size', type: 'default' },
      { labelName: 'Availability Zone', name: 'availability_zone', type: 'default' },
      { labelName: 'Volume Type', name: 'volume_type', type: 'default' },
      {
        labelName: 'Attachment Information', name: 'attachment_information', type: 'join', info: {
          entityTypeId: 'aws_cloud_instance',
          keyColumn: 'instance_id',
          valueColumn: 'name',
        }
      },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Snapshot',
    entityName: 'snapshot',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Snapshot ID', name: 'snapshot_id', type: 'default' },
      { labelName: 'Encrypted', name: 'encrypted', type: 'default' },
      { labelName: 'Size', name: 'size', type: 'default' },
      { labelName: 'Status', name: 'status', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Network Interface',
    entityName: 'network_interface',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      {
        labelName: 'Subnet', name: 'subnet_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_subnet',
          keyColumn: 'subnet_id',
          valueColumn: 'name',
        }
      },
      {
        labelName: 'VPC', name: 'vpc_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_vpc',
          keyColumn: 'vpc_id',
          valueColumn: 'name',
        }
      },
      { labelName: 'Status', name: 'status', type: 'default' },
      { labelName: 'Security Groups', name: 'security_groups', type: 'default' },
      { labelName: 'Primary Private IP', name: 'primary_private_ip', type: 'default' },
      { labelName: 'Secondary Private IPs', name: 'secondary_private_ips', type: 'default' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'VPC',
    entityName: 'vpc',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'VPC', name: 'vpc_id', type: 'default' },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'IPv4 CIDR', name: 'cidr_block', type: 'default' },
      { labelName: 'IPv6 CIDR', name: 'ipv6_cidr_blocks', type: 'array' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Subnet',
    entityName: 'subnet',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Subnet ID', name: 'subnet_id', type: 'default' },
      {
        labelName: 'VPC', name: 'vpc_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_vpc',
          keyColumn: 'vpc_id',
          valueColumn: 'name',
        }
      },
      { labelName: 'IPv4 CIDR', name: 'cidr_block', type: 'default' },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'Region Name', name: 'region_name', type: 'default' },
      { labelName: 'Zone Name', name: 'zone_name', type: 'default' },
      { labelName: 'Network Border Group', name: 'network_border_group', type: 'default' },
      { labelName: 'Zone Type', name: 'zone_type', type: 'default' },
      { labelName: 'Parent Zone Type', name: 'parent_zone_type', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'VPC Peering Connection',
    entityName: 'vpc_peering_connection',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'VPC Peering Connection ID', name: 'vpc_peering_connection_id', type: 'default' },
      { labelName: 'Status', name: 'status_code', type: 'default' },
      {
        labelName: 'Requester VPC', name: 'requester_vpc_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_vpc',
          keyColumn: 'vpc_id',
          valueColumn: 'name',
        }
      },
      {
        labelName: 'Accepter VPC', name: 'accepter_vpc_id', type: 'join', info: {
          entityTypeId: 'aws_cloud_vpc',
          keyColumn: 'vpc_id',
          valueColumn: 'name',
        }
      },
      { labelName: 'Requester CIDR Blocks', name: 'requester_cidr_block', type: 'default' },
      { labelName: 'Accepter CIDR Blocks', name: 'accepter_cidr_block', type: 'default' },
      { labelName: 'Requester AWS Account', name: 'requester_account_id', type: 'default' },
      { labelName: 'Accepter AWS Account', name: 'accepter_account_id', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Internet Gateway',
    entityName: 'internet_gateway',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Internet Gateway ID', name: 'internet_gateway_id', type: 'default' },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'VPC ID', name: 'vpc_id', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'default' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Career Gateway',
    entityName: 'career_gateway',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Carrier Gateway ID', name: 'carrier_gateway_id', type: 'default' },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'VPC ID', name: 'vpc_id', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'default' },
    ]
  },
  {
    cloudServiceProvider: 'aws_cloud',
    labelName: 'Transit Gateway',
    entityName: 'transit_gateway',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Transit Gateway ID', name: 'transit_gateway_id', type: 'default' },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'Amazon Account ID', name: 'account_id', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'default' },
    ]
  },
];

// Template for displaying a list of entities in K8s.
export const K8S_MENU_LIST: MenuTemplate[] = [
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Node',
    entityName: 'node',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'State', name: 'status', type: 'default' },
      { labelName: 'CPU (Request)', name: 'cpu_request', type: 'default' },
      { labelName: 'CPU (Limit)', name: 'cpu_limit', type: 'default' },
      { labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'default' },
      { labelName: 'Memory (Request)', name: 'memory_request', type: 'memory' },
      { labelName: 'Memory (Limit)', name: 'memory_limit', type: 'memory' },
      { labelName: 'Memory (Usage)', name: 'memory_usage', type: 'memory' },
      { labelName: 'Pods (Applcation)', name: 'pods_allocation', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Namespace',
    entityName: 'namespace',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'State', name: 'status', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Deployment',
    entityName: 'deployment',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Pod',
    entityName: 'pod',
    detailInfoColumn: 'name',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Node', name: 'node_name', type: 'default' },
      { labelName: 'State', name: 'status', type: 'default' },
      { labelName: 'Restarts', name: 'restarts', type: 'default' },
      { labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'default' },
      { labelName: 'Memory (Usage)', name: 'memory_usage', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'ReplicaSet',
    entityName: 'replica_set',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Replica', name: 'replicas', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'CronJob',
    entityName: 'cron_job',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Schedule', name: 'schedule', type: 'default' },
      { labelName: 'Suspend', name: 'suspend', type: 'default' },
      { labelName: 'Active', name: 'active', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Job',
    entityName: 'job',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Image', name: 'image', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Service',
    entityName: 'service',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Cluster IP', name: 'cluster_ip', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Network Policy',
    entityName: 'network_policy',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Resource Quotas',
    entityName: 'resource_quota',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'LimitRange',
    entityName: 'limit_range',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Priority Class',
    entityName: 'priority_class',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Value', name: 'value', type: 'default' },
      { labelName: 'Global Default', name: 'global_default', type: 'boolean', value: ['TRUE', 'FALSE'] },
      { labelName: 'Description', name: 'description', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'ConfigMap',
    entityName: 'config_map',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Secret',
    entityName: 'secret',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Type', name: 'secret_type', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Role',
    entityName: 'role',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Role Binding',
    entityName: 'role_binding',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Role', name: 'role_ref', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Cluster Role',
    entityName: 'cluster_role',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Cluster Role Binding',
    entityName: 'cluster_role_binding',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Cluster Role', name: 'role_ref', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Persistent Volume',
    entityName: 'persistent_volume',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Capacity', name: 'capacity', type: 'default' },
      { labelName: 'Access Modes', name: 'access_modes', type: 'default' },
      { labelName: 'Reclaim Policy', name: 'reclaim_policy', type: 'default' },
      { labelName: 'Status', name: 'phase', type: 'default' },
      { labelName: 'Request', name: 'claim_ref', type: 'default' },
      { labelName: 'Storage Class', name: 'storage_class_name', type: 'default' },
      { labelName: 'Reason', name: 'reason', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Persistent Volume Claim',
    entityName: 'persistent_volume_claim',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Phase', name: 'phase', type: 'default' },
      { labelName: 'VolumeName', name: 'volume_name', type: 'default' },
      { labelName: 'Capacity', name: 'capacity', type: 'default' },
      { labelName: 'Request', name: 'request', type: 'default' },
      { labelName: 'Access Mode', name: 'access_mode', type: 'default' },
      { labelName: 'Storage Class', name: 'storage_class', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Storage Class',
    entityName: 'storage_class',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Provisioner', name: 'provisioner', type: 'default' },
      { labelName: 'Parameters', name: 'parameters', type: 'key-value' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'StatefulSet',
    entityName: 'stateful_set',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Ingress',
    entityName: 'ingress',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'DaemonSet',
    entityName: 'daemon_set',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Endpoint',
    entityName: 'endpoint',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Node', name: 'node_name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Event',
    entityName: 'event',
    entityColumn: [
      { labelName: 'Type', name: 'k8s_event_type', type: 'default' },
      { labelName: 'Reason', name: 'reason', type: 'default' },
      { labelName: 'Object Kind', name: 'object_kind', type: 'default' },
      { labelName: 'Object Name', name: 'object_name', type: 'default' },
      { labelName: 'Message', name: 'message', type: 'default' },
      { labelName: 'Last Time Stamp', name: 'time_stamp', type: 'datetime' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'API Service',
    entityName: 'api_service',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'ServiceAccount',
    entityName: 'service_account',
    entityColumn: [
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Horizontal Pod Autoscaler',
    entityName: 'horizontal_pod_autoscaler',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Namespace', name: 'namespace', type: 'default' },
      { labelName: 'Scale Target', name: 'scale_target', type: 'default' },
      { labelName: 'Target CPU Utilization Percentage', name: 'target_cpu_utilization_percentage', type: 'default' },
    ],
  },
  {
    cloudServiceProvider: 'k8s',
    labelName: 'Schedule',
    entityName: 'schedule',
    entityColumn: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Kind', name: 'kind', type: 'default' },
      { labelName: 'Namespace Name', name: 'namespace_name', type: 'default' },
      { labelName: 'Resource Name', name: 'resource_name', type: 'default' },
      { labelName: 'Launch Template Name', name: 'launch_template_name', type: 'default' },
      { labelName: 'State', name: 'state', type: 'default' },
      { labelName: 'Start', name: 'start_time', type: 'default' },
      { labelName: 'Stop', name: 'stop_time', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' }
    ],
  },
];
