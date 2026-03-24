---
title: writePoints
description: Write points to a single tag
sidebar:
  order: 2
---

Write one or more points to a single tag. Tags are created automatically if missing.

## Signature

`writePoints(tag, points)`

- `tag` (str)
- `points` (dict | list[dict])

### Inputs

- `tag`: Tag name to write to.
- `points`: One point dict or a list of points with `value`, `timestamp`, optional `status`.

## Examples

### JSON output (multiple points)

```python
result = hm.writePoints(
  "DEMO_02TI301.PV",
  [
    {"value": 38.5, "timestamp": "2024-01-01 00:00:00"},
    {"value": 38.6, "timestamp": "2024-01-01 01:00:00"},
  ],
)
```

Output:

```json
{ "success": true, "message": "All points written!" }
```

### JSON output (single point)

```python
result = hm.writePoints(
  "DEMO_02TI301.PV",
  {"value": 38.9, "timestamp": "2024-01-01 02:00:00", "status": "OK"},
)
```

Output:

```json
{ "success": true, "message": "All points written!" }
```
