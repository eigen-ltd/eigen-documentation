---
title: getAggregates
description: Get aggregate statistics over a time range
sidebar:
  order: 6
---

Get aggregate statistics over a time window.

## Signature

`getAggregates(tags, start, end, intervals=1, aggregates=None, output="json")`

- `tags` (str | list[str])
- `start` (str | int | float | datetime)
- `end` (str | int | float | datetime)
- `intervals` (int, default: 1)
- `aggregates` (str | list[str] | None)
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to aggregate.
- `start`: Start of time window.
- `end`: End of time window.
- `intervals`: Number of aggregate windows.
- `aggregates`: List of aggregate functions to return.

  - (`first`, `last`, `min`, `max`, `avg`,`median`, `stddev`, `var`, `count`, `numgood`, `numbad`)

- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
aggregates = hm.getAggregates(
  "DEMO_02TI301.PV",
  "2024-01-01 00:00:00",
  "2024-01-01 12:00:00",
  intervals=1,
  aggregates=["AVG", "MAX", "MIN"],
)
```

Output:

```json
[
  {
    "from": "2024-01-01T00:00:00Z",
    "to": "2024-01-01T12:00:00Z",
    "avg": 37.9,
    "max": 39.1,
    "min": 36.8
  }
]
```

### DataFrame output (multiple tags)

```python
agg_df = hm.getAggregates(
    ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
    "2024-01-01 00:00:00",
    "2024-01-01 12:00:00",
    intervals=4,
    aggregates=["AVG", "MAX"],
    output="df",
)
```

Output (`df`):

```text
                   from                  to   avg   max
tag
DEMO_02TI301.PV  2024-01-01T00:00:00Z  ...  37.9  39.1
DEMO_02TI201.PV  2024-01-01T00:00:00Z  ...  41.8  43.0
```
