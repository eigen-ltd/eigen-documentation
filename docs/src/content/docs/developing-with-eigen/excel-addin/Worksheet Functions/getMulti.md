---
title: Get Point In Time
description: A guide to using the GETMULTI Function in the Excel Addin
sidebar:
  order: 4
---

Returns interpolated values for tags at one or more specified timestamps.

## Signature

- `EIGEN.GETMULTI(datasource, tags, timestamps, headers = false, showTag = true, tabular = false, valueOnly = false)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `tags` (string[][]): One or more tag names.
- `timestamps` (string[][]): List of UTC timestamps (DD/MM/YYYY hh:mm:ss or compatible).
- `headers` (boolean): Show header row. Default: `false`.
- `showTag` (boolean): Include tag in output. Default: `true`.
- `tabular` (boolean): Render results in a tabular layout. Default: `false`.
- `valueOnly` (boolean): Return only value cells (no timestamps or tag names). Default: `false`.

### Returns

- `string[][]` — Array of rows containing interpolated values at specified timestamps.
  - **Default format**: Each row is `[Tag, Timestamp, Value]` for each tag-timestamp combination.
  - **With `headers=true`**: Header row `["Tag", "Timestamp", "Value"]` precedes data.
  - **With `tabular=true`**: Timestamps become column headers, values arranged in a matrix.
  - **With `valueOnly=true`**: Only the value cells (no timestamp or tag info).

## Notes

- Input timestamps are normalized with `formatTimestamps` before querying.
- When multiple tags and timestamps are given, labels are built as `tag/timestamp` for result mapping.

See [Advanced Options](/developing-with-eigen/excel-addin/advanced-options) for more on `headers`, `showTag`, `tabular`, and `valueOnly`.

## Example

- `=EIGEN.GETMULTI("Demo-influxdb", {"DEMO_02TI301.PV","DEMO_02TI201.PV"}, {"01/01/2024 00:00:00"})` — interpolated values for two DEMO tags at one timestamp.

Sample output (default format):

<div align="center">

| Tag             | Timestamp           | Value |
| --------------- | ------------------- | ----- |
| DEMO_02TI301.PV | 2024-01-01 00:00:00 | 72.1  |
| DEMO_02TI201.PV | 2024-01-01 00:00:00 | 68.5  |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
