import MenuTemplate from "model/MenuTemplate";

export const OAUTH2_CLIENT_LABEL = 'Cloud Dashboard';
export const OAUTH2_CLIENT_SECRET = 'cloud_dashboard';
export const ROUTE_URL = '/clouds/dashboard';
export const AWS_MENU_LIST: MenuTemplate[] = [
  {
    type: 'aws_cloud',
    name: 'Instance',
    url: '/aws_cloud/instance',
    entityTypeId: 'aws_cloud_instance',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Public IP', name: 'public_ip', type: 'default'},
      {labelName: 'Instance State', name: 'instance_state', type: 'default'},
      {labelName: 'Instance Type', name: 'instance_type', type: 'default'},
      {labelName: 'Availability Zone', name: 'availability_zone', type: 'default'},
      {labelName: 'Cost', name: 'cost', type: 'cost'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Image',
    url: '/aws_cloud/image',
    entityTypeId: 'aws_cloud_image',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'AMI Name', name: 'ami_name', type: 'default'},
      {labelName: 'AMI ID', name: 'image_id', type: 'default'},
      {labelName: 'Status', name: 'status', type: 'default'},
      {labelName: 'Source', name: 'source', type: 'default'},
      {labelName: 'Root Device Type', name: 'root_device_type', type: 'default'},
      {labelName: 'Visibility', name: 'visibility', type: 'boolean', value: ['Public', 'Private']},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Security Group',
    url: '/aws_cloud/security_group',
    entityTypeId: 'aws_cloud_security_group',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Group ID', name: 'group_id', type: 'default'},
      {labelName: 'VPC', name: 'vpc_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_vpc',
        keyColumn: 'vpc_id',
        valueColumn: 'name',
      }},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Elastic IP',
    url: '/aws_cloud/elastic_ip',
    entityTypeId: 'aws_cloud_elastic_ip',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Allocation ID', name: 'allocation_id', type: 'default'},
      {labelName: 'Type', name: 'elastic_ip_type', type: 'default'},
      {labelName: 'Elastic IP', name: 'public_ip', type: 'default'},
      {labelName: 'Instance ID', name: 'instance_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_instance',
        keyColumn: 'instance_id',
        valueColumn: 'name',
      }},
      {labelName: 'Private IP Address', name: 'private_ip_address', type: 'default'},
      {labelName: 'Scope', name: 'scope', type: 'default'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Key Pair',
    url: '/aws_cloud/key_pair',
    entityTypeId: 'aws_cloud_key_pair',
    column: [
      {labelName: 'Key Pair Name', name: 'key_pair_name', type: 'default'},
      {labelName: 'Key Fingerprint', name: 'key_fingerprint', type: 'default'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Volume',
    url: '/aws_cloud/volume',
    entityTypeId: 'aws_cloud_volume',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Volume ID', name: 'volume_id', type: 'default'},
      {labelName: 'IOPS', name: 'iops', type: 'default'},
      {labelName: 'Size', name: 'size', type: 'default'},
      {labelName: 'Availability Zone', name: 'availability_zone', type: 'default'},
      {labelName: 'Volume Type', name: 'volume_type', type: 'default'},
      {labelName: 'Attachment Information', name: 'attachment_information', type: 'join', info: {
        entityTypeId: 'aws_cloud_instance',
        keyColumn: 'instance_id',
        valueColumn: 'name',
      }},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Snapshot',
    url: '/aws_cloud/snapshot',
    entityTypeId: 'aws_cloud_snapshot',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Snapshot ID', name: 'snapshot_id', type: 'default'},
      {labelName: 'Encrypted', name: 'encrypted', type: 'default'},
      {labelName: 'Size', name: 'size', type: 'default'},
      {labelName: 'Status', name: 'status', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Network Interface',
    url: '/aws_cloud/network_interface',
    entityTypeId: 'aws_cloud_network_interface',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Subnet', name: 'subnet_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_subnet',
        keyColumn: 'subnet_id',
        valueColumn: 'name',
      }},
      {labelName: 'VPC', name: 'vpc_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_vpc',
        keyColumn: 'vpc_id',
        valueColumn: 'name',
      }},
      {labelName: 'Status', name: 'status', type: 'default'},
      {labelName: 'Security Groups', name: 'security_groups', type: 'default'},
      {labelName: 'Primary Private IP', name: 'primary_private_ip', type: 'default'},
      {labelName: 'Secondary Private IPs', name: 'secondary_private_ips', type: 'default'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'VPC',
    url: '/aws_cloud/vpc',
    entityTypeId: 'aws_cloud_vpc',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'VPC', name: 'vpc_id', type: 'default'},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'IPv4 CIDR', name: 'cidr_block', type: 'default'},
      {labelName: 'IPv6 CIDR', name: 'ipv6_cidr_blocks', type: 'array'},
      {labelName: 'Created', name: 'created', type: 'datetime'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Subnet',
    url: '/aws_cloud/subnet',
    entityTypeId: 'aws_cloud_subnet',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Subnet ID', name: 'subnet_id', type: 'default'},
      {labelName: 'VPC', name: 'vpc_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_vpc',
        keyColumn: 'vpc_id',
        valueColumn: 'name',
      }},
      {labelName: 'IPv4 CIDR', name: 'cidr_block', type: 'default'},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'Region Name', name: 'region_name', type: 'default'},
      {labelName: 'Zone Name', name: 'zone_name', type: 'default'},
      {labelName: 'Network Border Group', name: 'network_border_group', type: 'default'},
      {labelName: 'Zone Type', name: 'zone_type', type: 'default'},
      {labelName: 'Parent Zone Type', name: 'parent_zone_type', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'VPC Peering Connection',
    url: '/aws_cloud/vpc_peering_connection',
    entityTypeId: 'aws_cloud_vpc_peering_connection',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'VPC Peering Connection ID', name: 'vpc_peering_connection_id', type: 'default'},
      {labelName: 'Status', name: 'status_code', type: 'default'},
      {labelName: 'Requester VPC', name: 'requester_vpc_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_vpc',
        keyColumn: 'vpc_id',
        valueColumn: 'name',
      }},
      {labelName: 'Accepter VPC', name: 'accepter_vpc_id', type: 'join', info: {
        entityTypeId: 'aws_cloud_vpc',
        keyColumn: 'vpc_id',
        valueColumn: 'name',
      }},
      {labelName: 'Requester CIDR Blocks', name: 'requester_cidr_block', type: 'default'},
      {labelName: 'Accepter CIDR Blocks', name: 'accepter_cidr_block', type: 'default'},
      {labelName: 'Requester AWS Account', name: 'requester_account_id', type: 'default'},
      {labelName: 'Accepter AWS Account', name: 'accepter_account_id', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Internet Gateway',
    url: '/aws_cloud/internet_gateway',
    entityTypeId: 'aws_cloud_internet_gateway',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Internet Gateway ID', name: 'internet_gateway_id', type: 'default'},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'VPC ID', name: 'vpc_id', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'default'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Career Gateway',
    url: '/aws_cloud/career_gateway',
    entityTypeId: 'aws_cloud_career_gateway',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Carrier Gateway ID', name: 'carrier_gateway_id', type: 'default'},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'VPC ID', name: 'vpc_id', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'default'},
    ]
  },
  {
    type: 'aws_cloud',
    name: 'Transit Gateway',
    url: '/aws_cloud/transit_gateway',
    entityTypeId: 'aws_cloud_transit_gateway',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Transit Gateway ID', name: 'transit_gateway_id', type: 'default'},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'Amazon Account ID', name: 'account_id', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'default'},
    ]
  },
];
export const K8S_MENU_LIST: MenuTemplate[] = [
  {
    type: 'k8s',
    name: 'Node',
    url: '/k8s/node',
    entityTypeId: 'k8s_node',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'State', name: 'status', type: 'default'},
      {labelName: 'CPU (Request)', name: 'cpu_request', type: 'default'},
      {labelName: 'CPU (Limit)', name: 'cpu_limit', type: 'default'},
      {labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'default'},
      {labelName: 'Memory (Request)', name: 'memory_request', type: 'memory'},
      {labelName: 'Memory (Limit)', name: 'memory_limit', type: 'memory'},
      {labelName: 'Memory (Usage)', name: 'memory_usage', type: 'memory'},
      {labelName: 'Pods (Applcation)', name: 'pods_allocation', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Namespace',
    url: '/k8s/namespace',
    entityTypeId: 'k8s_namespace',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'State', name: 'status', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Deployment',
    url: '/k8s/deployment',
    entityTypeId: 'k8s_deployment',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Pod',
    url: '/k8s/pod',
    entityTypeId: 'k8s_pod',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Node', name: 'node_name', type: 'default'},
      {labelName: 'State', name: 'status', type: 'default'},
      {labelName: 'Restarts', name: 'restarts', type: 'default'},
      {labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'default'},
      {labelName: 'Memory (Usage)', name: 'memory_usage', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'ReplicaSet',
    url: '/k8s/replica_set',
    entityTypeId: 'k8s_replica_set',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Replica', name: 'replicas', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'CronJob',
    url: '/k8s/cron_job',
    entityTypeId: 'k8s_cron_job',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Schedule', name: 'schedule', type: 'default'},
      {labelName: 'Suspend', name: 'suspend', type: 'default'},
      {labelName: 'Active', name: 'active', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Job',
    url: '/k8s/job',
    entityTypeId: 'k8s_job',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Image', name: 'image', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Service',
    url: '/k8s/service',
    entityTypeId: 'k8s_service',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Cluster IP', name: 'cluster_ip', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Network Policy',
    url: '/k8s/network_policy',
    entityTypeId: 'k8s_network_policy',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Resource Quotas',
    url: '/k8s/resource_quota',
    entityTypeId: 'k8s_resource_quota',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'LimitRange',
    url: '/k8s/limit_range',
    entityTypeId: 'k8s_limit_range',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Priority Class',
    url: '/k8s/priority_class',
    entityTypeId: 'k8s_priority_class',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Value', name: 'value', type: 'default'},
      {labelName: 'Global Default', name: 'global_default', type: 'boolean', value: ['TRUE', 'FALSE']},
      {labelName: 'Description', name: 'description', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'ConfigMap',
    url: '/k8s/config_map',
    entityTypeId: 'k8s_config_map',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Secret',
    url: '/k8s/secret',
    entityTypeId: 'k8s_secret',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Type', name: 'secret_type', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Role',
    url: '/k8s/role',
    entityTypeId: 'k8s_role',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Role Binding',
    url: '/k8s/role_binding',
    entityTypeId: 'k8s_role_binding',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Role', name: 'role_ref', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Cluster Role',
    url: '/k8s/cluster_role',
    entityTypeId: 'k8s_cluster_role',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Cluster Role Binding',
    url: '/k8s/cluster_role_binding',
    entityTypeId: 'k8s_cluster_role_binding',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Cluster Role', name: 'role_ref', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Persistent Volume',
    url: '/k8s/persistent_volume',
    entityTypeId: 'k8s_persistent_volume',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Capacity', name: 'capacity', type: 'default'},
      {labelName: 'Access Modes', name: 'access_modes', type: 'default'},
      {labelName: 'Reclaim Policy', name: 'reclaim_policy', type: 'default'},
      {labelName: 'Status', name: 'phase', type: 'default'},
      {labelName: 'Request', name: 'claim_ref', type: 'default'},
      {labelName: 'Storage Class', name: 'storage_class_name', type: 'default'},
      {labelName: 'Reason', name: 'reason', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Persistent Volume Claim',
    url: '/k8s/persistent_volume_claim',
    entityTypeId: 'k8s_persistent_volume_claim',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Phase', name: 'phase', type: 'default'},
      {labelName: 'VolumeName', name: 'volume_name', type: 'default'},
      {labelName: 'Capacity', name: 'capacity', type: 'default'},
      {labelName: 'Request', name: 'request', type: 'default'},
      {labelName: 'Access Mode', name: 'access_mode', type: 'default'},
      {labelName: 'Storage Class', name: 'storage_class', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Storage Class',
    url: '/k8s/storage_class',
    entityTypeId: 'k8s_storage_class',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Provisioner', name: 'provisioner', type: 'default'},
      {labelName: 'Parameters', name: 'parameters', type: 'key-value'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'StatefulSet',
    url: '/k8s/stateful_set',
    entityTypeId: 'k8s_stateful_set',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Ingress',
    url: '/k8s/ingress',
    entityTypeId: 'k8s_ingress',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'DaemonSet',
    url: '/k8s/daemon_set',
    entityTypeId: 'k8s_daemon_set',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Endpoint',
    url: '/k8s/endpoint',
    entityTypeId: 'k8s_endpoint',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Node', name: 'node_name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Event',
    url: '/k8s/event',
    entityTypeId: 'k8s_event',
    column: [
      {labelName: 'Type', name: 'k8s_event_type', type: 'default'},
      {labelName: 'Reason', name: 'reason', type: 'default'},
      {labelName: 'Object Kind', name: 'object_kind', type: 'default'},
      {labelName: 'Object Name', name: 'object_name', type: 'default'},
      {labelName: 'Message', name: 'message', type: 'default'},
      {labelName: 'Last Time Stamp', name: 'time_stamp', type: 'datetime'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'API Service',
    url: '/k8s/api_service',
    entityTypeId: 'k8s_api_service',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'ServiceAccount',
    url: '/k8s/service_account',
    entityTypeId: 'k8s_service_account',
    column: [
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'k8s',
    name: 'Horizontal Pod Autoscaler',
    url: '/k8s/horizontal_pod_autoscaler',
    entityTypeId: 'k8s_horizontal_pod_autoscaler',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Namespace', name: 'namespace', type: 'default'},
      {labelName: 'Scale Target', name: 'scale_target', type: 'default'},
      {labelName: 'Target CPU Utilization Percentage', name: 'target_cpu_utilization_percentage', type: 'default'},
    ],
  },
  {
    type: 'k8s',
    name: 'Schedule',
    url: '/k8s/schedule',
    entityTypeId: 'k8s_schedule',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Kind', name: 'kind', type: 'default'},
      {labelName: 'Namespace Name', name: 'namespace_name', type: 'default'},
      {labelName: 'Resource Name', name: 'resource_name', type: 'default'},
      {labelName: 'Launch Template Name', name: 'launch_template_name', type: 'default'},
      {labelName: 'State', name: 'state', type: 'default'},
      {labelName: 'Start', name: 'start_time', type: 'default'},
      {labelName: 'Stop', name: 'stop_time', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
];
export const ITEMS_PER_PAGE = 30;
export const CACHE_EXPIRED_UNIXTIME = 1000 * 60 * 60 * 24;
