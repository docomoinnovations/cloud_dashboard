<?php

namespace Drupal\cloud_dashboard\Form\React;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class CloudReactForm.
 *
 * @package Drupal\cloud_dashboard\Form\React
 */
class CloudDashboardForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'cloud_dashboard';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['html'] = [
      '#markup' => '<div id="root"></div>',
      '#attached' => [
        'library' => 'cloud_dashboard/react_app',
      ],
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
  }

}
