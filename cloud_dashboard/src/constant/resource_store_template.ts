import ResourceStoreTemplate from 'model/ResourceStoreTemplate';

const RESOURCE_STORE_LIST: ResourceStoreTemplate[] = [
  {
    bundleId: 'k8s_cost_store',
    column: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
      { labelName: 'Cloud context', name: 'cloud_context', type: 'default' },
      { labelName: 'Resources', name: 'field_resources', type: 'key-value-crlf' },
    ],
    title: 'K8s cost store',
  },
  {
    bundleId: 'k8s_namespace_resource_store',
    column: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
      { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
      { labelName: 'Costs', name: 'field_costs', type: 'key-value-crlf' },
      { labelName: 'Resources', name: 'field_resources', type: 'key-value-crlf' },
    ],
    title: 'K8s namespace resource store',
  },
  {
    bundleId: 'k8s_node_resource_store',
    column: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
      { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
      { labelName: 'Resources', name: 'field_resources', type: 'key-value-crlf' },
    ],
    title: 'K8s node resource store',
  },
  {
    bundleId: 'k8s_pod_resource_store',
    column: [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
      { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
      { labelName: 'Resources', name: 'field_resources', type: 'key-value-crlf' },
    ],
    title: 'K8s pod resource store',
  },
];

export default RESOURCE_STORE_LIST;
