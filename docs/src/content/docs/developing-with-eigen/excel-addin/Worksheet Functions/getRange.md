---
title: Get Interpolated Points
description: A guide to using the GETRANGE Function in the Excel Addin
sidebar:
  order: 2
---

Returns interpolated values for tags across a time range.

## Signature

- `EIGEN.GETRANGE(datasource, tags, startT, endT, count = 1000, headers = false, showTag = true, tabular = false)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `tags` (string[][]): One or more tag names.
- `startT` / `endT` (string): UTC start and end times. `formatBounds` normalizes inputs.
- `count` (number): Number of interpolated points to return per tag. Default: `1000`.
- `headers`, `showTag`, `tabular`: see [Advanced Options](/developing-with-eigen/excel-addin/advanced-options).

### Returns

- `string[][]` — Array of rows with interpolated values sampled at regular intervals across the time range.
  - **Default format**: Each row is `[Tag, Timestamp, Value]` for each interpolation point.
  - **With `headers=true`**: Header row `["Tag", "Timestamp", "Value"]` precedes data.
  - **Multi-tag results**: Returns all points for tag 1, then all points for tag 2, etc.

## Notes

- Use `count` to control resolution; large counts may increase query time.

## Example

- `=EIGEN.GETRANGE("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 01:00:00", 12)` — 12 interpolated points across one hour for `DEMO_02TI301.PV`.

Sample output (3 of 12 points shown):

<div align="center">

| Tag             | Timestamp           | Value |
| --------------- | ------------------- | ----- |
| DEMO_02TI301.PV | 2024-01-01 00:00:00 | 70.0  |
| DEMO_02TI301.PV | 2024-01-01 00:05:00 | 71.3  |
| DEMO_02TI301.PV | 2024-01-01 00:10:00 | 72.5  |
| ...             | ...                 | ...   |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
