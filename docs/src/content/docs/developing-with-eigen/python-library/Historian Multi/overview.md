---
title: The Historian Multi Module
description: Overview of the Historian Multi module
sidebar:
  order: -100
---

Historian Multi provides a single client that can query multiple historians in one request. It is the recommended historian interface.

## What This Module Does

- Queries current values across one or more historians
- Retrieves interpolated points or ranges
- Retrieves raw datapoints and closest raw points
- Writes data points to one or more tags

## Key Entry Point

Use `get_historian_multi()` to create a client:

```python
from eigeningenuity import get_historian_multi, EigenServer

ei = EigenServer("https://demo.eigen.co/")
hm = get_historian_multi(default_historian="Demo-influxdb", eigenserver=ei)
```

## Common Operations

### Current Values

```python
values = hm.getCurrentDataPoints(["DEMO_02TI301.PV", "DEMO_02TI201.PV"])
```

### Interpolated Range

```python
range_points = hm.getInterpolatedRange(
    "DEMO_02TI301.PV",
    "01/01/2024 00:00:00",
    "01/01/2024 12:00:00",
    100,
)
```

### Raw Points

```python
raw_points = hm.getRawDatapoints(
    "DEMO_02TI301.PV",
    "01/01/2024 00:00:00",
    "01/01/2024 12:00:00",
)
```

## Output Formats

Most calls support:

- `json` (default)
- `df` (pandas DataFrame)
- `raw` (full API response)

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).
