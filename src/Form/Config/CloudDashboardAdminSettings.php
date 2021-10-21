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
      '#description' => $this->t('If you leave this field blank, the callback URI of Comsumer plugin on the same server as the Cloud Dashboard is used.'),
    ];

    $form['custom_urls']['json_api_server_uri'] = [
      '#type' => 'url',
      '#title' => $this->t('Server URL to get data by JSON:API'),
      '#default_value' => $config->get('json_api_server_uri'),
      '#description' => $this->t('If you leave this field blank, it will access the same server as the Cloud Dashboard to retrieve the data.'),
    ];

    return parent::buildForm($form, $form_state);

  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {

    $config = $this->configFactory()->getEditable('cloud_dashboard.settings');

    $config->set('oauth2_callback_uri', $form_state->getValue('oauth2_callback_uri'));
    $config->set('json_api_server_uri', $form_state->getValue('json_api_server_uri'));
    $config->save();

    parent::submitForm($form, $form_state);
  }

}
