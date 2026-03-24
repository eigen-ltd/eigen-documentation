---
title: Get Current Point
description: A guide to using the GETCURRENT Function in the Excel Addin
sidebar:
  order: 1
---

Returns the current/latest value for one or more tags.

## Signature

- `EIGEN.GETCURRENT(datasource, tags, headers = false, showTag = true, tabular = false, valueOnly = false)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `tags` (string[][]): One or more tag names (can be single string or array).
- `headers` (boolean): Show header row. Default: `false`.
- `showTag` (boolean): Include tag name in the output columns. Default: `true`.
- `tabular` (boolean): Render in tabular layout (vs. vertical). Default: `false`.
- `valueOnly` (boolean): Return only the numeric/value cell (no timestamp or tag). Default: `false`.

### Returns

- `string[][]` — Array of rows representing the latest value(s) and timestamp(s).
  - With defaults (`headers=false`, `showTag=true`, `tabular=false`): Each row is `[Tag, Timestamp, Value]`
  - With `headers=true`: Header row `["Tag", "Timestamp", "Value"]` precedes data rows.
  - With `showTag=false`: Columns are `[Timestamp, Value]`.
  - With `valueOnly=true`: Only `[Value]`.

## Notes

- If multiple tags are requested the function returns one row per tag (unless `tabular` changes layout).
- On partial errors the function appends error rows to the result (strings prefixed with `ERROR:`).
- See [Advanced Options](/developing-with-eigen/excel-addin/advanced-options) for details on `headers`, `showTag`, `tabular`, and `valueOnly`.

## Example

- `=EIGEN.GETCURRENT("Demo-influxdb", "DEMO_02TI301.PV")` — returns latest value and timestamp for `DEMO_02TI301.PV`.

Sample output (with headers and showTag):

<div align="center">

| Tag             | Timestamp           | Value |
| --------------- | ------------------- | ----- |
| DEMO_02TI301.PV | 2024-01-01 10:30:45 | 75.3  |

</div>

## Support

For more help, open a ticket: https://eigen.freshdesk.com
