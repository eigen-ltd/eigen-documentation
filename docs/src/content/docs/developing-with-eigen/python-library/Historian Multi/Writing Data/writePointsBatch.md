---
title: writePointsBatch
description: Write points to multiple tags in one request
sidebar:
  order: 3
---

Write points to multiple tags in a single request.

## Signature

`writePointsBatch(data)`

- `data` (dict | list[dict])

### Inputs

- `data`: Dict or list of dicts mapping tag names to lists of points.

## Examples

### JSON output (dict payload)

```python
batch = {
    "DEMO_02TI301.PV": [
        {"value": 38.5, "timestamp": "2024-01-01 00:00:00"}
    ],
    "DEMO_02TI201.PV": [
        {"value": 42.1, "timestamp": "2024-01-01 00:00:00"}
    ],
}

result = hm.writePointsBatch(batch)
```

Output:

```json
{ "success": true, "message": "All points written!" }
```

### JSON output (list payload)

```python
batch = [
    {"DEMO_02TI301.PV": [{"value": 38.6, "timestamp": "2024-01-01 01:00:00"}]},
    {"DEMO_02TI201.PV": [{"value": 41.9, "timestamp": "2024-01-01 01:00:00"}]},
]

result = hm.writePointsBatch(batch)
```

Output:

```json
{ "success": true, "message": "All points written!" }
```
