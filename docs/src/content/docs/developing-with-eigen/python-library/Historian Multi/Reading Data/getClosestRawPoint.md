---
title: getClosestRawPoint
description: Get the closest raw point to a timestamp
sidebar:
  order: 5
---

Get the closest raw point to one or more timestamps.

## Signature

`getClosestRawPoint(tags, timestamps, before_or_after="AFTER_OR_AT", output="json")`

- `tags` (str | list[str])
- `timestamps` (str | int | float | datetime | list[...])
- `before_or_after` (str, default: `AFTER_OR_AT`)
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to query.
- `timestamps`: One or more timestamps to find closest raw points for.
- `before_or_after`: Selection rule for closest point.
- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
closest = hm.getClosestRawPoint(
  "DEMO_02TI301.PV",
  ["2024-01-01 00:00:00"],
  before_or_after="BEFORE_OR_AT",
)
```

Output:

```json
[{ "timestamp": "2023-12-31T23:59:40Z", "value": 37.8, "status": "OK" }]
```

### JSON output (multiple timestamps)

```python
closest = hm.getClosestRawPoint(
    "DEMO_02TI301.PV",
    ["2024-01-01 00:00:00", "2024-01-01 01:00:00"],
    before_or_after="AFTER_OR_AT",
)
```

Output:

```json
[
  { "timestamp": "2024-01-01T00:00:05Z", "value": 38.0, "status": "OK" },
  { "timestamp": "2024-01-01T01:00:10Z", "value": 37.6, "status": "OK" }
]
```

Valid `before_or_after` values: `BEFORE`, `BEFORE_OR_AT`, `AFTER`, `AFTER_OR_AT`.
