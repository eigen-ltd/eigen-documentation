---
title: The Legacy Historian Module
description: Overview of the legacy Historian module
sidebar:
  order: 91
---

The Historian module provides a legacy, single-historian JSON Bridge client. This module is deprecated in favor of Historian Multi, and will be removed in a future release.

:::caution

> These docs are provided for maintenance of legacy solutions. If creating a new script or implementation, please use the Historian Multi module instead. See [Historian Multi](/developing-with-eigen/python-library/historian-multi/overview).

:::

## Key Entry Point

Use `get_historian()` to create a client:

```python
from eigeningenuity import get_historian, EigenServer

ei = EigenServer("https://demo.eigen.co/")
h = get_historian("Demo-influxdb", ei)
```

## Common Operations

### Current Values

```python
values = h.getCurrentDataPoints("DEMO_02TI301.PV")
```

### Interpolated Range

```python
range_points = h.getInterpolatedRange(
    "DEMO_02TI301.PV",
    "01/01/2024 00:00:00",
    "01/01/2024 12:00:00",
    100,
)
```

## Output Formats

Most calls support:

- `json` (default)
- `df` (pandas DataFrame)
- `raw` (full API response)

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).
