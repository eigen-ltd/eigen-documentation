---
title: Overview
description: Overview of the deprecated Elasticsearch module
sidebar:
  order: 90
---

The Elasticsearch module provides direct access to the Ingenuity Elasticsearch endpoint. This module is deprecated and will be removed in a future release.

:::caution

> These docs are provided for maintenance of legacy solutions. If creating a new script or implementation, please use the Eventlog module instead. See [Eventlog](/developing-with-eigen/python-library/eventlog/overview).

:::

## Key Entry Point

Use `get_elastic()` to create a client:

```python
from eigeningenuity import get_elastic, EigenServer

ei = EigenServer("https://demo.eigen.co/")
elastic = get_elastic(ei)
```

## Common Operations

### List Indices

```python
indices = elastic.listIndices("elasticsearch-int")
```

### Execute a Raw Query

```python
query = {"query": {"match_all": {}}}
results = elastic.executeRawQuery("my-index", query)
```

## Output Formats

Most calls support:

- `json` (default)
- `df` (pandas DataFrame)
- `raw` (full API response)
- `file` (write JSON to disk)

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).
