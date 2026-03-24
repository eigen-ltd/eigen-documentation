---
title: getAggregateIntervals
description: Get aggregates split into fixed-length intervals
sidebar:
  order: 7
---

Get aggregates split into fixed-length intervals (e.g. hourly).

## Signature

`getAggregateIntervals(tags, start, end, interval_size, aggregates=None, final_interval_behavior="EXCLUDE", output="json")`

- `tags` (str | list[str])
- `start` (str | int | float | datetime)
- `end` (str | int | float | datetime)
- `interval_size` (str): e.g. `1s`, `1m`, `1h`, `1d`, `1w`, `1y`
- `aggregates` (str | list[str] | None)
- `final_interval_behavior` (`INCLUDE` or `EXCLUDE`, default: `EXCLUDE`)
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to aggregate.
- `start`: Start of time window.
- `end`: End of time window.
- `interval_size`: Interval size string (e.g. `1h`).
  - `interval_size` accepts `s`, `m`, `h`, `d`, `w`, `y` suffixes (for seconds, minutes, hours, days, weeks, years respectively).
- `aggregates`: List of aggregate functions to return. If omitted returns all.
- `final_interval_behavior`: How to handle partial final interval.
- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
intervals = hm.getAggregateIntervals(
    "DEMO_02TI301.PV",
    "2024-01-01 00:00:00",
    "2024-01-01 12:00:00",
    interval_size="1h",
    aggregates=["AVG", "MAX"],
)
```

Output:

```json
[
  {
    "from": "2024-01-01T00:00:00Z",
    "to": "2024-01-01T01:00:00Z",
    "avg": 37.8,
    "max": 38.6
  },
  {
    "from": "2024-01-01T01:00:00Z",
    "to": "2024-01-01T02:00:00Z",
    "avg": 37.4,
    "max": 38.2
  }
]
```

Include partial final interval and return a DataFrame:

### DataFrame output (single tag)

```python
intervals_df = hm.getAggregateIntervals(
  "DEMO_02TI301.PV",
  "2024-01-01 00:00:00",
  "2024-01-01 02:30:00",
  interval_size="1h",
  aggregates=["AVG", "MAX"],
  final_interval_behavior="INCLUDE",
  output="df",
)
```

Output (`df`):

```text
           from                  to   avg   max
tag
DEMO_02TI301.PV  2024-01-01T00:00:00Z  ...  37.8  38.6
DEMO_02TI301.PV  2024-01-01T01:00:00Z  ...  37.4  38.2
DEMO_02TI301.PV  2024-01-01T02:00:00Z  ...  37.1  37.9
```
