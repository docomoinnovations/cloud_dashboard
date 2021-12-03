import CloudContext from 'model/CloudContext';
import CloudServiceProvider from 'model/CloudServiceProvider';
import EntityColumn from 'model/EntityColumn';


// List of projects in K8s.
const K8S_PROJECT_TEMPLATE_LIST: EntityColumn[] = [
  { labelName: 'Name', name: 'name', type: 'default' },
  { labelName: 'K8s Cluster', name: 'field_k8s_clusters', type: 'default' },
  { labelName: 'Enable resource scheduler', name: 'field_enable_resource_scheduler', type: 'default' },
];

// Default template of projects in K8s.
const DEFAULT_K8S_PROJECT_TEMPLATE: EntityColumn = {
  labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default'
};

/**
 * Get ProjectColumnList by cloud_context.
 * 
 * @param cloudContext cloud_context.
 * @returns ProjectColumnList.
 */
export const getProjectColumnList = (cloudContext: CloudContext): EntityColumn[] => {
  switch (cloudContext.cloudServiceProvider) {
    case 'aws_cloud':
      return [];
    case 'k8s':
      return cloudContext.name !== 'ALL'
        ? K8S_PROJECT_TEMPLATE_LIST
        : [DEFAULT_K8S_PROJECT_TEMPLATE,
          ...K8S_PROJECT_TEMPLATE_LIST];
  }
};

// List of CloudServiceProvider where the Project resides.
export const PROJECT_CLOUD_CONTEXT_LIST: CloudServiceProvider[] = [
  'k8s'
];
