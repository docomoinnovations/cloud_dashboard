Installation
============

1. `composer require drupal/cloud`
2. Enable these modules.
  - `cloud/cloud` (Cloud)
  - `drupal/simple_oauth` (Simple OAuth (OAuth2) & OpenID Connect)
  - `drupal/jsonapi` (JSON:API)
  - `cloud/cloud_dashboard` (Cloud Dashboard, this module)
3. Go to the Simple OAuth settings form 
  (`<Drupal site domain>/admin/config/people/simple_oauth`)
  and register your public key and private key.
4. Register the new Consumer Client in the Simple OAuth settings form.
  At that time, configure as follows.

| setting name                | value                                            |
|-----------------------------|--------------------------------------------------|
| Label                       | Cloud Dashboard                                  |
| New Secret (Client Secret)  | cloud_dashboard                                  |
| Is this consumer 3rd party? | ON                                               |
| Redirect URI                | `<Drupal site domain>/clouds/dashboard/callback` |

5. The Cloud Dashboard's SPA can be used by logging in from
  `<Drupal site domain>/clouds/dashboard`.
