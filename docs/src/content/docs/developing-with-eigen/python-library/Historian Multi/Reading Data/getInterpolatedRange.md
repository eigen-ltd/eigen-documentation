---
title: getInterpolatedRange
description: Get evenly spaced points across a time range
sidebar:
  order: 3
---

Get evenly spaced points between a start and end time.

## Signature

`getInterpolatedRange(tags, start, end, count=1000, output="json")`

- `tags` (str | list[str])
- `start` (str | int | float | datetime)
- `end` (str | int | float | datetime)
- `count` (int, default: 1000)
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to interpolate.
- `start`: Start of time window.
- `end`: End of time window.
- `count`: Number of points per tag.
- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
range_points = hm.getInterpolatedRange(
  "DEMO_02TI301.PV",
  "2024-01-01 00:00:00",
  "2024-01-01 12:00:00",
  100,
)
```

Output:

```json
[
  { "timestamp": "2024-01-01T00:00:00Z", "value": 38.0, "status": "OK" },
  { "timestamp": "2024-01-01T00:07:12Z", "value": 37.9, "status": "OK" }
]
```

### DataFrame output (multiple tags)

```python
range_df = hm.getInterpolatedRange(
    ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
    "2024-01-01 00:00:00",
    "2024-01-01 06:00:00",
    6,
    output="df",
)
```

Output (`df`):

```text
                     DEMO_02TI301.PV  DEMO_02TI201.PV
2024-01-01 00:00:00             38.0             42.0
2024-01-01 01:00:00             37.7             41.8
```
