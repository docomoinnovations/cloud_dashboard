<?php

namespace Drupal\cloud_dashboard\Form\Config;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class Cloud Admin Settings.
 */
class CloudDashboardAdminSettings extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'cloud_dashboard_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames(): array {
    return ['cloud_dashboard.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {

    $config = $this->config('cloud_dashboard.settings');

    $form['custom_urls'] = [
      '#type' => 'details',
      '#title' => $this->t('Custom URLs'),
      '#open' => TRUE,
    ];

    $form['custom_urls']['oauth2_callback_uri'] = [
      '#type' => 'url',
      '#title' => $this->t('Callback URI for OAuth2'),
      '#default_value' => $config->get('oauth2_callback_uri'),
      '#description' => $this->t('If you leave this field blank, the callback URI will be the same as the consumer plugin at the server of Cloud Dashboard.'),
      '#attributes'    => ['placeholder' => 'e.g. https://example.com/clouds/dashboard/callback'],
    ];

    $form['custom_urls']['oauth2_client_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Client ID for OAuth2'),
      '#default_value' => $config->get('oauth2_client_id'),
      '#description' => $this->t('If you leave this field blank, the client ID will be the same as the consumer plugin at the server of Cloud Dashboard.'),
      '#attributes'    => ['placeholder' => 'e.g. e0a08590-4a13-419d-a64d-f859806c21a9'],
    ];

    $form['custom_urls']['json_api_server_uri'] = [
      '#type' => 'url',
      '#title' => $this->t('Server URL to get data by JSON:API'),
      '#default_value' => $config->get('json_api_server_uri'),
      '#description' => $this->t('If you leave this field blank, it will access the same server of Cloud Dashboard to retrieve the data.'),
      '#attributes'    => ['placeholder' => 'e.g. https://example.com'],
    ];

    $form['custom_urls']['marker_icon_uri'] = [
      '#type' => 'url',
      '#title' => $this->t('URL of default marker icon for Leaflet.js'),
      '#default_value' => $config->get('marker_icon_uri'),
      '#description' => $this->t('If you leave this field blank, it will access data from CDN'),
      '#attributes'    => ['placeholder' => 'e.g. https://example.com/marker-icon.png'],
    ];

    $form['custom_urls']['map_geojson_uri'] = [
      '#type' => 'url',
      '#title' => $this->t('URL of coordinate data for drawing world map (GeoJson format)'),
      '#default_value' => $config->get('map_geojson_uri'),
      '#description' => $this->t('If you leave this field blank, it will access data from GitHub'),
      '#attributes'    => ['placeholder' => 'e.g. https://example.com/world_map.geojson'],
    ];

    return parent::buildForm($form, $form_state);

  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {

    $config = $this->configFactory()->getEditable('cloud_dashboard.settings');

    $config->set('oauth2_callback_uri', $form_state->getValue('oauth2_callback_uri'));
    $config->set('oauth2_client_id', $form_state->getValue('oauth2_client_id'));
    $config->set('json_api_server_uri', $form_state->getValue('json_api_server_uri'));
    $config->set('marker_icon_uri', $form_state->getValue('marker_icon_uri'));
    $config->set('map_geojson_uri', $form_state->getValue('map_geojson_uri'));
    $config->save();

    parent::submitForm($form, $form_state);
  }

}
