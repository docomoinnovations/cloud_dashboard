import CloudServiceProvider from 'model/CloudServiceProvider';

interface CloudContext {
  cloudServiceProvider: CloudServiceProvider;
  name: string;
  labelName: string;
}

export default CloudContext;
