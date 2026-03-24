---
title: Get Closest Raw Point
description: A guide to using the Get Closest Raw Point Function in the Excel Addin
sidebar:
  order: 6
---

## Introduction

Returns the closest raw point for a tag at specified timestamp(s) using a selection method.

## Signature

- `EIGEN.GETCLOSESTRAW(datasource, tags, timestamps, method = "POINT_BEFORE_OR_AT", showReferenceTimestamp = false, headers = false, showTag = true, tabular = false, valueOnly = false)`

### Parameters

- `datasource` (string): Historian name. If omitted, reads default from settings.
- `tags` (string[][]): One or more tag names.
- `timestamps` (string[][]): List of reference timestamps.
- `method` (string): Selection method. Options include `POINT_BEFORE_OR_AT` (default), `BEFORE`, `AFTER`, `AFTER_OR_AT`, `ADJACENT_POINTS`.
- `showReferenceTimestamp` (boolean): Show the requested reference timestamp in results. Default: `false`.
- `headers`, `showTag`, `tabular`, `valueOnly`: see [Advanced Options](/developing-with-eigen/excel-addin/advanced-options).

### Returns

- `string[][]` — Array of rows containing the closest raw point(s) matching the selection method.
  - Default format: Each row is `[Tag, Timestamp, Value]` (the matched point's actual timestamp, not the requested one).
  - With `headers=true`: Header row precedes data.
  - With `showReferenceTimestamp=true`: Includes an additional column for the requested reference timestamp.
  - With `showTag=false`: Omits the tag column.

## Notes

- `method` alters how the historical point is selected relative to the requested timestamp.

## Examples

- `=EIGEN.GETCLOSESTRAW("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "POINT_BEFORE_OR_AT", true)` — closest raw point before or at the timestamp for `DEMO_02TI301.PV`, show reference timestamp.

Sample output (with headers and showReferenceTimestamp):

<div align="center">

| Tag             | Timestamp           | Value | Reference Timestamp |
| --------------- | ------------------- | ----- | ------------------- |
| DEMO_02TI301.PV | 2024-01-01 00:00:15 | 72.1  | 2024-01-01 00:00:00 |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
