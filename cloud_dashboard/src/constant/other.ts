import CloudContext from 'model/CloudContext';

export const OAUTH2_CLIENT_LABEL = 'Cloud Dashboard';
export const OAUTH2_CLIENT_SECRET = 'cloud_dashboard';
export const ROUTE_URL = '/clouds/dashboard';
export const FETCH_TIMEOUT_MS = 10000;
export const ITEMS_PER_PAGE = 30;
export const CACHE_EXPIRED_UNIXTIME = 1000 * 60 * 60 * 24;
export const DEFAULT_CLOUD_CONTEXTS: CloudContext[] = [
  { cloudServiceProvider: 'aws_cloud', name: 'ALL', labelName: 'AWS Cloud (ALL)' },
  { cloudServiceProvider: 'k8s', name: 'ALL', labelName: 'K8s (ALL)' },
];
