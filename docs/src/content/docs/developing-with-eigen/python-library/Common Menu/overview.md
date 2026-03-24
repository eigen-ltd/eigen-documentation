---
title: The Common Menu Module
description: Overview of the Common Menu module
sidebar:
  order: -1
---

The Common Menu module provides access to asset-related metadata and linked timeseries through the Common Menu API.

This API queries the internal Ingenuity model database, and optionally data configured in a third party model (e.g. Cognite), if set in the driver

See also the [Asset Model](/developing-with-eigen/python-library/asset-model/overview), which is a free-form API for browsing similar data.

## What This Module Does

- Lists assets related to a given asset
- Retrieves measurements and timeseries metadata
- Retrieves events for an asset

## Key Entry Point

Use `get_common_menu()` to create a client:

```python
from eigeningenuity import get_common_menu, EigenServer

ei = EigenServer("https://demo.eigen.co/")
menu = get_common_menu(ei)
```

## Common Operations

### Related Assets

```python
related = menu.getRelatedAssets("System_01")
```

### Measurements

```python
measurements = menu.getMeasurements("System_01", source="all")
```

### Events

```python
events = menu.getEvents("System_01", start="24 hours ago", end="now")
```

## Output Formats

Most calls support:

- `json` (default)
- `df` (pandas DataFrame)
- `raw` (full API response)
- `file` (write JSON to disk)

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).

## Functions

- [get_common_menu](../get-common-menu)
- [getRelatedAssets](../get-related-assets)
- [getMeasurements](../get-measurements)
- [getDrivers](../get-drivers)
- [getEvents](../get-events)
- [getProperties](../get-properties)
- [getDocuments](../get-documents)
