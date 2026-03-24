---
title: getEvents
description: Retrieve events for an asset
sidebar:
  order: 5
---

Return events related to an asset.

## Signature

`getEvents(node, start="24 hours ago", end="now", limit=1000, output="json", filepath=None)`

- `node` (str)
- `start` (str | int | float | datetime, default: "24 hours ago")
- `end` (str | int | float | datetime, default: "now")
- `limit` (int, default: 1000)
- `output` (str): `json` (default), `df`, `raw`, `file`
- `filepath` (str | None)

### Inputs

- `node`: Asset code to fetch events for.
- `start`: Start of time window.
- `end`: End of time window.
- `limit`: Max number of events returned.
- `output`: Output format selector.
- `filepath`: Output file path used when `output="file"`.

## Examples

### JSON output

```python
events = menu.getEvents("System_01", start="24 hours ago", end="now")
```

### DataFrame output

```python
events_df = menu.getEvents(
    "System_01",
    start="2024-01-01 00:00:00",
    end="2024-01-02 00:00:00",
    output="df",
)
```
