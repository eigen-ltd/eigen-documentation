---
title: Advanced Options
description: Understanding the Optional parameters for Worksheet functions
sidebar:
  order: 3
---

This page explains the common optional flags used across most functions: `headers`, `showTag`, `tabular`, and `valueOnly`.

## `headers`

- Type: `boolean`.
- When `true` functions will include an additional header row describing the returned columns (e.g. `Tag`, `Value`, `Timestamp`, or aggregate names).
- Default varies by function (Most defaults are `false`, but functions that return multiple value columns, (`getAgg`/`getIntervals`) default to `true`.

## `showTag`

- Type: `boolean`.
- Controls whether the tag name is included as a column in results. When `false` the output omits tag names and may only show timestamps/values. When `true` this will add an additional column
- Default: `false` for most functions when querying a single tag. `true` if querying multiple tags.

## `tabular`

- Type: `boolean`.
- Controls result layout. When `false` functions commonly return rows like `[Tag, Timestamp, Value]` or repeated rows per point. When `true` results will be returned in a more tabular layout (e.g., timestamps in the left column and values across columns) where available.
- Use `tabular` to make multi-tag / multi-timestamp outputs easier to paste into spreadsheets, and to compare multiple timeseries.

## `valueOnly`

- Type: `boolean`.
- When `true` the function attempts to return only the primary value cell for each requested item (no timestamp or tag cell). Useful when populating single-cell formulas or entering in tables, which do not allow SPILL functions.
- Not all functions fully support `valueOnly`; behavior is best-effort.

## Interaction notes

- `valueOnly` + `tabular` are always mutually exclusive (value-only returns a single scalar value to a cell per query, while tabular returns a grid/matrix view). Passing both will default to `tabular`.
- `valueOnly` + `tabular` are top level settings, that will ignore values for `headers` and `showTag`.
- `headers` affects row counts. When using `tabular` with headers, ensure your target sheet has room for the extra header row.

## Troubleshooting

- If results look misaligned, try toggling `tabular` or `headers`.
- For unexpected empty results check the time bounds and `datasource` setting.

## Example summary

### Show Headers

**(headers=true, showTag=false, tabular=false)**

Example:

```
=EIGEN.GETCURRENT("Demo-influxdb", "DEMO_02TI301.PV", true, false)
```

<div align="center">

| Timestamp           | Value |
| ------------------- | ----- |
| 2024-01-01 10:30:45 | 75.3  |

</div>

### Show Tag

**(headers=false, showTag=true, tabular=false)**

Example:

```
=EIGEN.GETCURRENT("Demo-influxdb", "DEMO_02TI301.PV", false, true)
```

<div align="center">

| DEMO_02TI301.PV | 2024-01-01 10:30:45 | 75.3 |
| --------------- | ------------------- | ---- |

</div>

### Show headers and tag

**(headers=true, showTag=true, tabular=false)**

Example:

```
=EIGEN.GETCURRENT("Demo-influxdb", "DEMO_02TI301.PV", true, true)
```

<div align="center">

| Tag             | Timestamp           | Value |
| --------------- | ------------------- | ----- |
| DEMO_02TI301.PV | 2024-01-01 10:30:45 | 75.3  |

</div>

### Tabular layout

**(tabular=true)**

Example (multiple-tags):

```
=EIGEN.GETMULTI("Demo-influxdb", {"DEMO_02TI301.PV","DEMO_02TI201.PV"}, {"01/01/2024 10:30:00"}, true, true, true)
```

<div align="center">

| Timestamp           | DEMO_02TI301.PV | DEMO_02TI201.PV |
| ------------------- | --------------- | --------------- |
| 2024-01-01 10:30:00 | 75.3            | 68.5            |
| 2024-01-01 10:31:00 | 76.1            | 69.2            |

</div>

### Value only

**(valueOnly=true)**

Example:

```
=EIGEN.GETCURRENT("Demo-influxdb", "DEMO_02TI301.PV", false, false, false, true)
```

<div align="center">

| 75.3 |
| ---- |

</div>

**Support**
If you need more help or these options don't fulfill your requirements, please raise a ticket on our support system: https://eigen.freshdesk.com
