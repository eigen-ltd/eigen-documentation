---
title: getRawDatapoints
description: Get raw points between a start and end time
sidebar:
  order: 4
---

Get raw stored points between a start and end time.

## Signature

`getRawDatapoints(tags, start, end, maxpoints=1000, output="json")`

- `tags` (str | list[str])
- `start` (str | int | float | datetime)
- `end` (str | int | float | datetime)
- `maxpoints` (int, default: 1000)
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to read raw points for.
- `start`: Start of time window.
- `end`: End of time window.
- `maxpoints`: Maximum number of points returned.
- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
raw_points = hm.getRawDatapoints(
  "DEMO_02TI301.PV",
  "2024-01-01 00:00:00",
  "2024-01-01 12:00:00",
  maxpoints=1000,
)
```

Output:

```json
[
  { "timestamp": "2024-01-01T00:01:03Z", "value": 38.0, "status": "OK" },
  { "timestamp": "2024-01-01T00:02:05Z", "value": 38.1, "status": "OK" }
]
```

### DataFrame output (multiple tags)

```python
raw_df = hm.getRawDatapoints(
    ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
    "2024-01-01 00:00:00",
    "2024-01-01 01:00:00",
    maxpoints=200,
    output="df",
)
```

Output (`df`):

```text
                     DEMO_02TI301.PV  DEMO_02TI201.PV
2024-01-01 00:01:03             38.0             42.1
2024-01-01 00:02:05             38.1             42.0
```
