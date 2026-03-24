---
title: Get Interpolated on Interval
description: A guide to using the GETSTEP Function in the Excel Addin
sidebar:
  order: 3
---

Returns evenly spaced interpolated values of tags over a timeframe using a time window.

## Signature

- `EIGEN.GETSTEP(datasource, tags, startT, endT, timeWindow = "1h", headers = false, showTag = true, tabular = false)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `tags` (string[][]): One or more tag names.
- `startT` / `endT` (string): Time bounds (UTC). `calculateTimeWindowParameters` adjusts windows.
- `timeWindow` (string): Duration string (e.g. `1h`, `30m`). Default: `1h`.
- `headers`, `showTag`, `tabular`: see [Advanced Options](/developing-with-eigen/excel-addin/advanced-options).

### Returns

- `string[][]` — Array of rows with values at evenly spaced intervals defined by `timeWindow`.
  - **Default format**: Each row is `[Tag, Timestamp, Value]` for each step.
  - **With `headers=true`**: Header row `["Tag", "Timestamp", "Value"]` precedes data.
  - **Step count**: Computed from total duration and `timeWindow`.

## Notes

- If `timeWindow` is invalid the function returns an error row.

## Example

- `=EIGEN.GETSTEP("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 03:00:00", "30m")` — values every 30 minutes for 3 hours for `DEMO_02TI301.PV`.

Sample output (30-minute steps over 3 hours):

<div align="center">

| Tag             | Timestamp           | Value |
| --------------- | ------------------- | ----- |
| DEMO_02TI301.PV | 2024-01-01 00:00:00 | 70.0  |
| DEMO_02TI301.PV | 2024-01-01 00:30:00 | 71.5  |
| DEMO_02TI301.PV | 2024-01-01 01:00:00 | 73.2  |
| DEMO_02TI301.PV | 2024-01-01 01:30:00 | 74.8  |
| DEMO_02TI301.PV | 2024-01-01 02:00:00 | 73.1  |
| DEMO_02TI301.PV | 2024-01-01 02:30:00 | 71.6  |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
