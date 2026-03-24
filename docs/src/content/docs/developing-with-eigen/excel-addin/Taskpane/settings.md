---
title: Settings
description: Configuring the Excel Addin
sidebar:
  order: 1
---

This page explains the configuration options available in the Eigen Ingenuity Excel add-in and the difference between the two onboarding paths:

- `Try the Demo`
- `Connect to Your Ingenuity`

The add-in stores connection settings for the Eigen Ingenuity server and the historian source you want to query. Depending on how you start the add-in, it will either:

- run in a preconfigured demo mode with default values, or
- connect to your own Ingenuity environment using the settings you provide.

## Config options

The Settings screen includes the following options.

### Eigen Ingenuity server

- Label in UI: `Eigen Ingenuity server`
- Purpose: Base server address used for API requests.
- Example: `demo.eigen.co`
- Required: Yes
- Validation: Must be a valid domain/URL.
- Default value: `demo.eigen.co`

### Historian source

- Purpose: Default historian/data source queried by the add-in.
- Example: `Demo-influxdb`
- Required: Yes
- Validation: Must be at least 3 characters.
- Default value: `Demo-influxdb`

### API Key

- Label in UI: `API Key`
- Purpose: Forwards the key with all requests when provided.
- Required: No
- Default value: empty
- Typical use: Environments that secure API access with a server-side API key will reject requests without a valid API key.

### Use Azure AD

- Label in UI: `Use Azure AD`
- Purpose: Enables Microsoft Entra ID / Azure AD authentication for API requests.
- Required: Optional
- Default in stored settings: `false`
- Effect when enabled:
  - The add-in will prompt user to authenticate, and access the secured APIs on their behalf.
  - The addin does not see your Azure username or password, but recieves an access token to pass with requests
  - Scope is limited to the provided client ID (Eigen Ingenuity)
  - Azure Tenant ID and Azure Client ID fields are shown, - Tenant ID and Client ID must be provided with auth - You must have Eigen Ingenuity installed with Azure AD, and have the correct User/Group permissions - If you don't know your client and tenant ID, you can enquire at https://eigen.freshdesk.com

### Skip Proxy (Direct API Requests)

- Label in UI: `Skip Proxy (Direct API Requests)`
- Purpose: Bypass the `/api` proxy and call the Ingenuity API directly.
- Required: Optional
- Default value: `false`
- Availability:
  - enabled only when `Use Azure AD` is off,
  - disabled when `Use Azure AD` is on.
- Notes:
  - useful for direct API calls in non-Azure-AD flows,
  - Required if yur Ingenuity Instance is not exposed to the internet (VPN, Citrix, or Local Network)
  - if Azure AD is enabled, the UI forces proxy usage to avoid CORS issues.

### Azure Tenant ID

- Purpose: Tenant used for Azure AD authentication.
- Required: Required when `Use Azure AD` is enabled.

### Azure Client ID

- Purpose: Application/client ID used for Azure AD authentication.
- Required: Required when `Use Azure AD` is enabled.

## Try the Demo vs Connect to Your Ingenuity

On start there are two options provided for connecting the Addin to an Ingenuity Instance. These two entry paths behave differently.

### `Try the Demo`

`Try the Demo` puts the add-in into guest/demo mode.

- Forces `useAzureAD` to `false`
- Uses default stored settings while in guest mode
- Makes direct API requests without authentication
- Does not require the user to perform any configuration or authentication

In practice, demo mode is intended to let a user start using the add-in immediately against the built-in demo environment.

While in guest mode, setting reads fall back to the default values from the settings store, including:

- Server: `demo.eigen.co`
- Historian source: `Demo-influxdb`
- Azure AD: `false`

### `Connect to Your Ingenuity`

`Connect to Your Ingenuity` is the normal configured mode for a real environment.

- Opens the Settings screen if connection settings are not yet saved
- Lets the user configure server, historian source, API key, Azure AD, proxy behavior, and Azure IDs
- Persists settings to Office document settings and local storage
- Can use:
  - Azure AD authentication,
  - API key authentication,
  - proxied requests,
  - direct API requests when proxy is skipped and Azure AD is off

This mode is intended for connecting the add-in to your own Ingenuity deployment rather than the bundled demo setup.

### Key differences

<div align="center">

| Area                           | Try the Demo              | Connect to Your Ingenuity                     |
| ------------------------------ | ------------------------- | --------------------------------------------- |
| Intended use                   | Quick evaluation          | Real environment setup                        |
| Guest mode                     | Yes                       | No                                            |
| Requires settings screen first | No                        | Usually yes                                   |
| Default server                 | `demo.eigen.co`           | User-provided                                 |
| Default historian source       | `Demo-influxdb`           | User-provided                                 |
| Azure AD available             | No                        | Yes                                           |
| API key supported              | Not required in demo flow | Yes                                           |
| Proxy configuration            | Not user-driven           | User-configurable                             |
| Request style                  | Simple direct request     | Proxy or direct request depending on settings |
| Best for                       | Trial, demos, exploration | Connections to your own Ingenuity             |

</div>

### How requests differ

#### Demo mode request behavior

In demo mode, requests are made as simple direct browser requests:

- no Azure AD token,
- no proxy headers,
- no authenticated proxy flow.

#### Connected mode request behavior

In connected mode, request behavior depends on settings:

- If `Skip Proxy` is off:
  - the add-in tries the `/api` proxy first,
  - if a CORS-style proxy failure occurs, it may fall back to a direct request.
- If `Skip Proxy` is on:
  - the add-in calls the server directly.
- If `Use Azure AD` is on:
  - the add-in acquires a bearer token and authenticates the request.
- If an API key is provided:
  - it is added to the request headers.

### Recommended usage

- Use `Try the Demo` if you want to explore the add-in immediately with the sample environment.
- Use `Connect to Your Ingenuity` if you want to connect to your own server, historian, and authentication setup.

## Support

If you need more help configuring the add-in, please raise a ticket on our support system: https://eigen.freshdesk.com
