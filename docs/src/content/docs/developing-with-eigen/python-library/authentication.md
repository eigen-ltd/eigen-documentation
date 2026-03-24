---
title: Authentication
description: How Azure authentication is configured for Python Eigen Ingenuity
sidebar:
  order: -1
---

Python Eigen Ingenuity supports Azure authentication for secured endpoints. Authentication can be configured by environment variables or by calling helper functions at runtime.

## Introduction

If your machine is domain joined, or you connect to the eigen system via VPN, you likely will not require authentication, as requests do not need to cross an Azure gateway. If this is the case, then if you encounter errors, try using the `disable_azure_auth()` method set on the `eigeningenuity` class.

(You may still need to set your API Key if it is enforced.)

For the python application to authenticate to your Ingenuity may require certain permissions to be configured on the Ingenuity App Registration in your corporate Azure. If you encounter difficulties with the authentication process. Please contact our [Support](#support) and raise a ticket, and we will work with your IT to enable this.

## Summary of Settings

| Setting             | Env Var                         | Default              | Required                    | Purpose                                                                        |
| ------------------- | ------------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------------------------ |
| Tenant ID           | `EIGEN_INGENUITY_TENANT_ID`     | `None`               | Yes (for Azure auth)        | Azure tenant ID used for token requests                                        |
| Client ID           | `EIGEN_INGENUITY_CLIENT_ID`     | `None`               | Yes (for Azure auth)        | App registration client ID                                                     |
| Client Secret       | `EIGEN_INGENUITY_CLIENT_SECRET` | `None`               | Only for client-credentials | Secret for client-credentials auth                                             |
| API Token           | `EIGEN_INGENUITY_API_TOKEN`     | `False`              | For API token auth          | Token used for secured endpoints                                               |
| Auth Scope          | `EIGEN_INGNEUITY_AUTH_SCOPE`    | `user_impersonation` | Only if custom scope        | Scope requested from Azure                                                     |
| Azure Auth Enabled  | N/A                             | `True`               | No                          | Enables or disables Azure Auth                                                 |
| Token Cache Enabled | N/A                             | `True`               | No                          | Enables or disables token cache (Prevents constant requests to reauthenticate) |

## Defaults and How They Are Configured

Defaults are loaded from environment variables when the library is imported. If the variable is not set, the library falls back to the defaults shown in the table above.

At runtime you can override any default using the settings helpers below.

## Required Inputs

You will need:

- **Tenant ID** and **Client ID** for any Azure-authenticated environment.
- **Client Secret** only when using a client-credentials flow [(NOT RECOMMENDED)](#why-client-secret-auth-is-not-recommended).
- **Auth Scope** only if your Azure app registration uses a non-standard scope.
- **API Token** if your environment is configured to require token-based access. Currently this is not required on most instances.

If you are unsure of the required values, check your Azure app registration or contact your system administrator.

## Configure via Environment Variables

Set these before importing the library in your application:

```bash
export EIGEN_INGENUITY_TENANT_ID="<tenant-id>"
export EIGEN_INGENUITY_CLIENT_ID="<client-id>"
export EIGEN_INGENUITY_CLIENT_SECRET="<client-secret>"  # only if required
export EIGEN_INGENUITY_API_TOKEN="<api-token>"           # only if required
export EIGEN_INGNEUITY_AUTH_SCOPE="user_impersonation"   # only if required
```

## Configure via Code

```python
import eigeningenuity as eigen

# Core Azure settings
eigen.set_azure_tenant_id("<tenant-id>")
eigen.set_azure_client_id("<client-id>")

# Optional settings
eigen.set_azure_client_secret("<client-secret>")  # client-credentials only
eigen.set_api_token("<api-token>")
eigen.set_auth_scope("user_impersonation")         # only if custom scope
```

## Azure Auth Controls

You can adjust runtime behavior if needed:

- `disable_azure_auth()` to skip Azure authentication.
- `disable_auth_token_cache()` to prevent reading or writing cached tokens.
- `clear_auth_token_cache()` to delete cached tokens for the current user.

## Why Client Secret Auth Is NOT recommended

Client secrets are long-lived credentials that are easy to leak through logs, environment dumps, or shared scripts. They are harder to rotate safely and increase the risk surface for automation workloads. Furthermore due to their long expiry, if exposed they can allow unauthorized access for significant lengths of time.

Where possible, prefer user-based authentication or managed identity, as these have short expiry. For a script that needs headless automation, we prefer to set this in the Ingenuity Deployment, so it runs within the server, and requires no credentials. If this fits your requirements, please raise a ticket at the support URL below and we will help integrate your script.

## Support

If you need help with tenant details, scopes, or the right auth flow for your environment, raise a request with support [https://eigen.freshdesk.com](https://eigen.freshdesk.com) or send us an email at `support@eigen.co` and we can help with this porcess.
