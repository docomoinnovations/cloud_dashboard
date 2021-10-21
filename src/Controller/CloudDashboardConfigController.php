<?php

namespace Drupal\cloud_dashboard\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class CloudConfigController.
 *
 *  Returns responses for cloud service provider (CloudConfig) routes.
 */
class CloudDashboardConfigController extends ControllerBase {

  /**
   * Get callback URI for OAuth2.
   *
   * @return Symfony\Component\HttpFoundation\JsonResponse
   *   A JSON response of callback URI.
   */
  public function getCallbackUri(): JsonResponse {
    // If the URL has been entered in the settings form, follow it.
    $config_factory = \Drupal::configFactory();
    $config = $config_factory->get('cloud_dashboard.settings');
    $callback_uri = $config->get('oauth2_callback_uri');
    if (!empty($callback_uri)) {
      return new JsonResponse(['uri' => $callback_uri]);
    }

    // If a callback URL has been set in
    // the Comsumer configuration form, follow it.
    $entities = \Drupal::entityTypeManager()
      ->getStorage('consumer')
      ->loadByProperties([
        'label' => 'Cloud Dashboard',
      ]);
    if (!empty($entities)) {
      return new JsonResponse(['uri' => current($entities)->get('redirect')->value]);
    }

    // If none of the above, return an error.
    return new JsonResponse([
      'result' => 'NG',
      'reason' => 'The callback URL is not set.',
    ], 404);
  }

  /**
   * Get Server URI for JSON:API.
   *
   * @return Symfony\Component\HttpFoundation\JsonResponse
   *   A JSON response of callback URI.
   */
  public function getJsonApiServerUri(): JsonResponse {
    // If the URL has been entered in the settings form, follow it.
    $config_factory = \Drupal::configFactory();
    $config = $config_factory->get('cloud_dashboard.settings');
    $server_uri = $config->get('json_api_server_uri');
    if (!empty($server_uri)) {
      return new JsonResponse(['uri' => $server_uri]);
    }

    return new JsonResponse(['uri' => \Drupal::request()->getSchemeAndHttpHost()]);
  }

}
