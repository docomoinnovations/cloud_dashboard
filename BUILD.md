Folder Structure
================

## Root directory

| File name             | Description                                      |
|-----------------------|--------------------------------------------------|
| cloud_dashboard.*.yml | Definition files for this custom module          |
| composer.json         | Composer definition for this custom module       |
| BUILD.md              | This document                                    |
| INSTALL.md            | Describes how to install                         |
| README.md             | Summary for this custom module                   |
| LICENSE               | Licenses of libraries used by this custom module |

## src directory

- Drupal-side code that provides admin settings form and REST API
- The Cloud Dashboard form is displayed by the code of the SPA client

| File name                          | Description                                       |
|------------------------------------|---------------------------------------------------|
| CloudDashboardConfigController.php | Provides a REST API for retrieving the set values |
| CloudDashboardAdminSettings.php    | Form to display the admin settings form           |
| CloudDashboardForm.php             | Form for displaying the SPA client                |

## cloud_dashboard directory

- SPA-side code that provides Cloud Dashboard (SPA client)

| File/Directory name | Description                                           |
|---------------------|-------------------------------------------------------|
| build.sh            | Assist in building the SPA client                     |
| package.json        | Settings of the library you are using, etc.           |
| tsconfig.json       | Configuration file describing the build-time settings |
| yarn.lock           | Details of the using library, and managed by yarn     |
| public              | (Not used in this custom module)                      |
| src                 | Source code of the SPA client                         |

## Other directories

| Directory name | Description                                   |
|----------------|-----------------------------------------------|
| js             | JavaScript created by building the SPA client |
| css            | CSS created by building the SPA client        |

How to build the SPA client
===========================

```bash
# Go to the directory where build.sh exists
cd cloud_dashboard

# Install libraries managed by yarn.lock
yarn

# Use the build script to copy the results of the build to the js and css directories
sh ./build.sh
```

SPA client Structure
====================

- In `index.tsx`, the `<div id="root">` part will be replaced by the SPA client.
  - `src/Form/React/CloudDashboardForm.php`　provides the `<div id="root">` part.
- `App.tsx` is called from `index.tsx`, and `App.tsx` switches pages for each endpoint.
  - Each page is defined in the pages directory.
- `i18n.ts` defines the processing required for i18n support.
- `constant` directory defines the various constants required by the SPA client.

| Directory name        | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| atoms                 | Definition of components that represents an element on the SPA    |
| bootstrap3-components | Wrapper Component for the part that depends on `Bootstrap3`       |
| constant              | Definition of constants                                           |
| hooks                 | Library called by the entire SPA, defined in Custom Hooks         |
| model                 | The data model used by the SPA, defined by `interface` and `type` |
| molecules             | Defining a Component that consists of multiple `atoms`            |
| organisms             | Defining a Component that consists of multiple `molecules`        |
| pages                 | Define a page-by-page Component                                   |
| service               | Defining service classes and utility functions                    |
