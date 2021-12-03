import EntityColumn from 'model/EntityColumn';


export const K8S_PROJECT_LIST: EntityColumn[] = [
  { labelName: 'Name', name: 'name', type: 'default' },
  { labelName: 'K8s Cluster', name: 'field_k8s_clusters', type: 'default' },
  { labelName: 'Enable resource scheduler', name: 'field_enable_resource_scheduler', type: 'default' },
];
