Installation
============

1. `composer require drupal/cloud`
2. Enable these modules.
  - [Cloud Dashboard](https://github.com/docomoinnovations/cloud_dashboard), this module (`cloud_dashboard`)
  - [Cloud](https://drupal.org/project/cloud) (`cloud`)
  - [Simple OAuth (OAuth2) & OpenID Connect](https://drupal.org/project/simple_oauth) (`simple_oauth`)
  - [JSON:API] (`jsonapi`), Drupal core module
3. Go to the Simple OAuth settings form 
  (`https://example.com/admin/config/people/simple_oauth`)
  and register your public key and private key.
4. Register the new Consumer Client in the Simple OAuth settings form.
  At that time, configure as follows.

| setting name                | value                                            |
|-----------------------------|--------------------------------------------------|
| Label                       | Cloud Dashboard                                  |
| New Secret (Client Secret)  | cloud_dashboard                                  |
| Is this consumer 3rd party? | ON                                               |
| Redirect URI                | `https://example.com/clouds/dashboard/callback` |

5. The Cloud Dashboard's SPA can be used by logging in from
  `https://example.com/clouds/dashboard`.
