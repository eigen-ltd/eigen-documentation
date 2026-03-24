---
title: Get Aggregates
description: A guide to using the Get Aggregates Function in the Excel Addin
sidebar:
  order: 7
---

## Introduction

The Get Aggregates function (GETAGG) returns aggregations/statistical data for one or more tags across a specified time range.

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

- `EIGEN.GETAGG(datasource, tags, startT, endT, count = 1, aggFields = null, headers = true, showTag = true)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from your taskpane settings.
- `tags` (string[][]): One or more tag names.
- `startT` / `endT` (string): Time bounds (UTC). Normalized by `formatBounds`.
- `count` (number): Number of aggregated results (e.g., per-window). Default: `1`.
- `aggFields` (string[][]): Aggregate names (e.g. `min`, `max`, `avg`, `count`). If omitted, defaults to a full set: `min,max,avg,var,numGood,numBad,count,stdDev,median,first,last`.
- `headers` (boolean): Whether to show headers. Default: `true`.
- `showTag` (boolean): Include tag name in results. Default: `true`.

### Returns

- `string[][]` — Aggregated values in a table. Columns depend on `aggFields` and `showTag`.

## Notes

- `aggFields` are case-insensitive; If unknown fields are passed, function falls back to the default set.

## Further Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
