---
title: getInterpolatedPoints
description: Get interpolated values at specific timestamps
sidebar:
  order: 2
---

Get interpolated values for one or more tags at specific timestamps.

## Signature

`getInterpolatedPoints(tags, timestamps, output="json")`

- `tags` (str | list[str])
- `timestamps` (str | int | float | datetime | list[...])
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to interpolate.
- `timestamps`: One or more timestamps to query.
- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
points = hm.getInterpolatedPoints(
  "DEMO_02TI301.PV",
  ["2024-01-01 00:00:00", "2024-01-01 01:00:00"],
)
```

Output:

```json
[
  { "timestamp": "2024-01-01T00:00:00Z", "value": 38.0, "status": "OK" },
  { "timestamp": "2024-01-01T01:00:00Z", "value": 37.5, "status": "OK" }
]
```

### JSON output (multiple tags)

```python
points = hm.getInterpolatedPoints(
    ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
    "2024-01-01 00:00:00",
)
```

Output:

```json
{
  "DEMO_02TI301.PV": [{ "timestamp": "2024-01-01T00:00:00Z", "value": 38.0, "status": "OK" }],
  "DEMO_02TI201.PV": [{ "timestamp": "2024-01-01T00:00:00Z", "value": 42.0, "status": "OK" }]
}
```

### DataFrame output (multiple tags)

```python
points_df = hm.getInterpolatedPoints(
    ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
    ["2024-01-01 00:00:00", "2024-01-01 01:00:00"],
    output="df",
)
```

Output (`df`):

```text
                     DEMO_02TI301.PV  DEMO_02TI201.PV
2024-01-01 00:00:00             38.0             42.0
2024-01-01 01:00:00             37.5             41.7
```
