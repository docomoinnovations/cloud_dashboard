import EntityColumn from 'model/EntityColumn';


// List of projects in K8s.
export const K8S_PROJECT_LIST: EntityColumn[] = [
  { labelName: 'Name', name: 'name', type: 'default' },
  { labelName: 'K8s Cluster', name: 'field_k8s_clusters', type: 'default' },
  { labelName: 'Enable resource scheduler', name: 'field_enable_resource_scheduler', type: 'default' },
];
