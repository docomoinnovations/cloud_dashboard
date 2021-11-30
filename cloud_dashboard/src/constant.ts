import CloudContext from "model/CloudContext";
import EntityColumn from "model/EntityColumn";
import EntityInfoTemplate from "model/EntityInfoTemplate";
import MenuTemplate from "model/MenuTemplate";

export const OAUTH2_CLIENT_LABEL = 'Cloud Dashboard';
export const OAUTH2_CLIENT_SECRET = 'cloud_dashboard';
export const ROUTE_URL = '/clouds/dashboard';
export const FETCH_TIMEOUT_MS = 10000;
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
          { labelName: 'Public IP', name: 'public_ip', type: 'join', info: {
            entityTypeId: 'aws_cloud_elastic_ip',
            keyColumn: 'public_ip',
            valueColumn: 'name',
          } },
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

export const K8S_ENTITY_INFO_LIST: EntityInfoTemplate[] = [
  {
    cloudServiceProvider: 'k8s',
    entityName: 'pod',
    entityRecords: [
      {
        panelName: 'Metrics',
        tableRecordList: [],
        keyValueRecords: [
          { labelName: '', name: '', type: 'metrics', column: [
            { title: 'CPU Usage', yLabel: 'CPU (Cores)', name: 'cpu', type: 'default' },
            { title: 'Memory Usage', yLabel: 'Memory (Bytes)', name: 'memory', type: 'memory' }
          ] },
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

export const ITEMS_PER_PAGE = 30;
export const CACHE_EXPIRED_UNIXTIME = 1000 * 60 * 60 * 24;
export const DEFAULT_CLOUD_CONTEXTS: CloudContext[] = [
  { cloudServiceProvider: 'aws_cloud', name: 'ALL', labelName: 'AWS Cloud (ALL)' },
  { cloudServiceProvider: 'k8s', name: 'ALL', labelName: 'K8s (ALL)' },
];

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
export const K8S_PROJECT_LIST: EntityColumn[] = [
  { labelName: 'Name', name: 'name', type: 'default' },
  { labelName: 'K8s Cluster', name: 'field_k8s_clusters', type: 'default' },
  { labelName: 'Enable resource scheduler', name: 'field_enable_resource_scheduler', type: 'default' },
];
