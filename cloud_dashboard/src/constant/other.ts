import CloudContext from 'model/CloudContext';
import CloudServiceProvider from 'model/CloudServiceProvider';

// The name of the client to be used for OAuth2 authentication,
// corresponding to the description in INSTALL.md.
export const OAUTH2_CLIENT_LABEL = 'Cloud Dashboard';

// Client secret used when performing OAuth2 authentication,
// corresponding to the description in INSTALL.md.
export const OAUTH2_CLIENT_SECRET = 'cloud_dashboard';

// The URL where the Cloud Dashboard will be placed,
// corresponding to the description in cloud_dashboard.routing.yml.
export const ROUTE_URL = '/clouds/dashboard';

// Fetch API timeout (in milliseconds), as referenced by drupal_jsonapi.ts.
export const FETCH_TIMEOUT_MS = 10000;
export const ITEMS_PER_PAGE = 30;

// Expiration time (in milliseconds) of the cache for the GET method
// in the Fetch API, as referenced by drupal_jsonapi.ts.
export const CACHE_EXPIRED_UNIXTIME = 1000 * 60 * 60 * 24;

// Initial list of Cloud Context (Cloud Service Provider).
export const DEFAULT_CLOUD_CONTEXTS: CloudContext[] = [
  { cloudServiceProvider: 'aws_cloud', name: 'ALL', labelName: 'AWS Cloud (ALL)' },
  { cloudServiceProvider: 'k8s', name: 'ALL', labelName: 'K8s (ALL)' },
];

export const CLOUD_SERVICE_PROVIDER_LIST: CloudServiceProvider[] = [
  'aws_cloud', 'k8s'
];
