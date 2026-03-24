---
title: Create Assetmodel Client
description: Create an Asset Model client
sidebar:
  order: 1
---

Create a client for the Assetmodel/Neo4j API.

## Signature

`get_assetmodel(eigenserver=None, instance="default")`

- `eigenserver` (EigenServer | str | None)
- `instance` (str, default: "default")

### Inputs

- `eigenserver`: Optional Eigen server or base URL. Defaults to `EIGENSERVER` if omitted.
- `instance`: Asset model instance name when multiple instances are available.

## Examples

### Default server from `EIGENSERVER` ENV variable

```python
from eigeningenuity import get_assetmodel

menu = get_assetmodel()
```

### Explicit server

```python
from eigeningenuity import get_assetmodel, EigenServer

ei = EigenServer("https://demo.eigen.co/")
model = get_assetmodel(ei)
```
