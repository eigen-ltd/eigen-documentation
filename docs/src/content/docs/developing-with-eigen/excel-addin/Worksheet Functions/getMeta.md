---
title: Get Metadata
description: A guide to using the GETMETA Function in the Excel Addin
sidebar:
  order: 9
---

Return metadata for tags that match a wildcard (description, units, stepped).

## Signature

- `EIGEN.GETMETA(datasource, wildcard, limit = null, headers = true)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `wildcard` (string): Tag search pattern.
- `limit` (number): Maximum tags to return. Non-numeric values default to `1000`.
- `headers` (boolean): Include header row. Default: `true`.

### Returns

- `string[][]` — Table of metadata for matching tags.
  - **Format**: Rows of `[Tag, Description, Units, Stepped]`.
  - **With `headers=true`** (default): Header row `["Tag", "Description", "Units", "Stepped"]` precedes data.
  - **Missing fields**: Coalesced to `"None"` if not available.

## Notes

- The function coalesces missing fields to `None`.

## Example

- `=EIGEN.GETMETA("Demo-influxdb", "DEMO_02TI*")` — returns metadata rows for tags matching `DEMO_02TI*`.

Sample output (with headers):

<div align="center">

| Tag             | Description             | Units | Stepped |
| --------------- | ----------------------- | ----- | ------- |
| DEMO_02TI301.PV | Temperature Indicator 3 | °C    | false   |
| DEMO_02TI201.PV | Temperature Indicator 2 | °C    | false   |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
