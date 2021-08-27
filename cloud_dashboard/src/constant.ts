import MenuTemplate from "model/MenuTemplate";

export const OAUTH2_CLIENT_LABEL = 'Cloud Dashboard';
export const OAUTH2_CLIENT_SECRET = 'cloud_dashboard';
export const ROUTE_URL = '/clouds/dashboard';
export const AWS_MENU_LIST = [
  { type: 'AWS', name: 'Cloud instance', url: '/aws_cloud/instance' },
];
export const K8S_MENU_LIST: MenuTemplate[] = [
  {
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
    name: 'Priority Class',
    url: '/k8s/priority_class',
    entityTypeId: 'k8s_priority_class',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Value', name: 'value', type: 'default'},
      {labelName: 'Global Default', name: 'global_default', type: 'boolean'},
      {labelName: 'Description', name: 'description', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
    name: 'Cluster Role',
    url: '/k8s/cluster_role',
    entityTypeId: 'k8s_cluster_role',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
    name: 'API Service',
    url: '/k8s/api_service',
    entityTypeId: 'k8s_api_service',
    column: [
      {labelName: 'Name', name: 'name', type: 'default'},
      {labelName: 'Created', name: 'created', type: 'datetime'}
    ],
  },
  {
    type: 'K8s',
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
    type: 'K8s',
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
    type: 'K8s',
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
