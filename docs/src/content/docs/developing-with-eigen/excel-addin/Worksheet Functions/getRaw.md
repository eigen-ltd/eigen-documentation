---
title: Get Raw Points
description: A guide to using the GETRAW Function in the Excel Addin
sidebar:
  order: 5
---

Returns raw (recorded) values for tags over a timeframe.

## Signature

- `EIGEN.GETRAW(datasource, tags, startT, endT, count = 100, headers = false, showTag = true, tabular = false)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `tags` (string[][]): One or more tag names.
- `startT` / `endT` (string): Time bounds (UTC). `formatBounds` normalizes inputs.
- `count` (number): Maximum raw points to return per tag. Default: `100`.
- `headers`, `showTag`, `tabular`: see [Advanced Options](/developing-with-eigen/excel-addin/advanced-options).

### Returns

- `string[][]` — Array of rows containing recorded (raw) historical points within the time range, up to `count` per tag.
  - **Default format**: Each row is `[Tag, Timestamp, Value]` for each raw point as stored.
  - **With `headers=true`**: Header row `["Tag", "Timestamp", "Value"]` precedes data.
  - **Order**: Points are typically ordered by timestamp (ascending or as returned by historian).

## Notes

- `RAW_POINTS` returns only stored points (no interpolation).

## Example

- `=EIGEN.GETRAW("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 02:00:00", 50)` — up to 50 raw points in the 2 hour window for `DEMO_02TI301.PV`.

Sample output (raw points as stored):

<div align="center">

| Tag             | Timestamp           | Value |
| --------------- | ------------------- | ----- |
| DEMO_02TI301.PV | 2024-01-01 00:02:15 | 70.5  |
| DEMO_02TI301.PV | 2024-01-01 00:07:45 | 72.1  |
| DEMO_02TI301.PV | 2024-01-01 00:15:30 | 71.8  |
| DEMO_02TI301.PV | 2024-01-01 00:22:00 | 73.4  |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
