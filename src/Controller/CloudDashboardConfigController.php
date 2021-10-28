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
   * Get client ID for OAuth2.
   *
   * @return Symfony\Component\HttpFoundation\JsonResponse
   *   A JSON response of callback URI.
   */
  public function getClientId(): JsonResponse {
    // If the URL has been entered in the settings form, follow it.
    $config_factory = \Drupal::configFactory();
    $config = $config_factory->get('cloud_dashboard.settings');
    $client_id = $config->get('oauth2_client_id');
    if (!empty($client_id)) {
      return new JsonResponse(['id' => $client_id]);
    }

    // If a client ID has been set in
    // the Comsumer configuration form, follow it.
    $entities = \Drupal::entityTypeManager()
      ->getStorage('consumer')
      ->loadByProperties([
        'label' => 'Cloud Dashboard',
      ]);
    if (!empty($entities)) {
      return new JsonResponse(['id' => current($entities)->get('uuid')->value]);
    }

    // If none of the above, return an error.
    return new JsonResponse([
      'result' => 'NG',
      'reason' => 'The client ID can not load.',
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

  /**
   * Get URL of default marker icon for Leaflet.js.
   *
   * @return Symfony\Component\HttpFoundation\JsonResponse
   *   A JSON response of callback URI.
   */
  public function getMakerIconUri(): JsonResponse {
    // If the URL has been entered in the settings form, follow it.
    $config_factory = \Drupal::configFactory();
    $config = $config_factory->get('cloud_dashboard.settings');
    $server_uri = $config->get('marker_icon_uri');
    if (!empty($server_uri)) {
      return new JsonResponse(['uri' => $server_uri]);
    }

    return new JsonResponse(['uri' => 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png']);
  }

  /**
   * Get URL of coordinate data for drawing world map (GeoJson format).
   *
   * @return Symfony\Component\HttpFoundation\JsonResponse
   *   A JSON response of callback URI.
   */
  public function getMapGeoJsonUri(): JsonResponse {
    // If the URL has been entered in the settings form, follow it.
    $config_factory = \Drupal::configFactory();
    $config = $config_factory->get('cloud_dashboard.settings');
    $server_uri = $config->get('map_geojson_uri');
    if (!empty($server_uri)) {
      return new JsonResponse(['uri' => $server_uri]);
    }

    return new JsonResponse(['uri' => 'https://enjalot.github.io/wwsd/data/world/ne_50m_admin_0_countries.geojson']);
  }

}
