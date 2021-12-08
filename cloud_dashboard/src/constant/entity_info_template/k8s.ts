import EntityInfoTemplate from 'model/EntityInfoTemplate';

// Template for displaying detailed information about entities in K8s.
const K8S_ENTITY_INFO_LIST: EntityInfoTemplate[] = [
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

export default K8S_ENTITY_INFO_LIST;
