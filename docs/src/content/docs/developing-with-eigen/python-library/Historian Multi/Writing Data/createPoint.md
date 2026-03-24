---
title: createPoint
description: Build a point payload for write requests
sidebar:
  order: 1
---

A very simple utility to build a structured point.

## Signature

`createPoint(value, timestamp, status="OK")`

- `value` (int | float)
- `timestamp` (str | int | float | datetime)
- `status` (str, default: `OK`)

### Inputs

- `value`: Numeric value to store.
- `timestamp`: Timestamp for the value.
- `status`: Quality flag (`OK` or `BAD`).

## Examples

### JSON output (single point)

```python
point = createPoint(38.5, "2024-01-01 00:00:00", status="OK")
```

Output:

```json
{ "value": 38.5, "timestamp": "2024-01-01 00:00:00", "status": "OK" }
```

### JSON output (epoch seconds)

```python
point = createPoint(12.3, 1704067200, status="BAD")
```

Output:

```json
{ "value": 12.3, "timestamp": 1704067200, "status": "BAD" }
```
