<?php

namespace Drupal\cloud_dashboard\Service;

/**
 * Class CloudDashboardService.
 */
interface CloudDashboardServiceInterface {

  /**
   * The version signature string.
   */
  public const VERSION = '4.x';

  /**
   * Get the version number of the module.
   *
   * @return string
   *   The version signature string.
   */
  public function getVersion(): string;

}
