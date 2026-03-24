---
title: Get Datasource
description: A guide to using the GETDATASOURCE Function in the Excel Addin
sidebar:
  order: 12
---

Return the current default datasource from settings.

## Signature

- `EIGEN.GETDATASOURCE()`

### Parameters

- None.

### Returns

- `string[][]` — Single-cell array: `[["DataSourceName"]]` containing the configured default datasource.

## Example

- `=EIGEN.GETDATASOURCE()` — returns the currently configured default datasource name.

Sample output:

<div align="center">

| DataSource    |
| ------------- |
| Demo-influxdb |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
