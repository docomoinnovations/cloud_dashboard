<?php

namespace Drupal\cloud_dashboard\Service;

use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Provides CloudDashboard service.
 */
class CloudDashboardService implements CloudDashboardServiceInterface {

  use StringTranslationTrait;

  /**
   * Get the version number of the module.
   *
   * @return string
   *   The version signature string.
   */
  public function getVersion(): string {
    return $this->t('Version: @version', ['@version' => self::VERSION]);
  }

}
