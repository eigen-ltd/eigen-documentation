---
title: Get Aggregate Intervals
description: A guide to using the GETINTERVALS Function in the Excel Addin
sidebar:
  order: 8
---

Compute aggregates over sliding/partitioned intervals in a time range.

The results of this function are the same as the GETAGG function, but allows for calculating aggregates on subintervals.

## Aggregations:

- **max** - Maximum value
- **min** - Minimum value
- **first** - First Value in range
- **last** - Last value in range
- **avg** - Average
- **stddev** - Standard deviation
- **var** - Variance
- **median** - Median value
- **count** - Total number of points in range
- **numgood** - Number of points with "Good/OK" status
- **numbad** - Number of points with "Bad" status

:::note

> (Not all historians support status. For those historians all points will be treated as Good)

:::

## Signature

- `EIGEN.GETINTERVALS(datasource, tags, startT, endT, timeWindow, aggFields, headers = true, showTag = true)`

### Parameters

- `datasource` (string): Historian name.
- `tags` (string[][]): One or more tag names.
- `startT` / `endT` (string): Time bounds (UTC).
- `timeWindow` (string): Window duration. If omitted, defaults to total duration split rules.
- `aggFields` (string[][]): Aggregates to compute per window.
- `headers`, `showTag`: see [Advanced Options](/developing-with-eigen/excel-addin/advanced-options).

timeWindow Aacepts a format of {`number`}{`timescale`} (e.g. `1h`, `30m`). Accepted timescales are:

- Seconds (e.g. `30s`)
- Minutes (e.g. `5m`)
- Hours (e.g. `12h`)
- Days (e.g. `3d`)
- Weeks (e.g. `2w`)
- Years (e.g. `1y`)

### Returns

- `string[][]` — Array of rows containing aggregated values (per `aggFields`) for each time interval.
  - **Default format**: Each row is `[Tag, StartTime, EndTime, ...aggregates]` (columns determined by `aggFields`).
  - **With `headers=true`** (default): Header row with column names: `["Tag", "StartTime", "EndTime", "avg", "max", ...]`.
  - **Multi-tag results**: Returns all intervals for tag 1, then tag 2, etc.

## Notes

- If `timeWindow` > total duration an error row is returned.

## Example

- `=EIGEN.GETINTERVALS("Demo-influxdb", {"DEMO_02TI301.PV"}, "01/01/2024 00:00:00", "01/01/2024 06:00:00", "1h", {"avg","max"})` — hourly avg and max over 6 hours for `DEMO_02TI301.PV`.

Sample output (1-hour intervals with avg and max):

<div align="center">

| Tag             | StartTime           | EndTime             | avg  | max  |
| --------------- | ------------------- | ------------------- | ---- | ---- |
| DEMO_02TI301.PV | 2024-01-01 00:00:00 | 2024-01-01 01:00:00 | 71.2 | 76.5 |
| DEMO_02TI301.PV | 2024-01-01 01:00:00 | 2024-01-01 02:00:00 | 72.8 | 78.3 |
| DEMO_02TI301.PV | 2024-01-01 02:00:00 | 2024-01-01 03:00:00 | 70.5 | 75.1 |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
