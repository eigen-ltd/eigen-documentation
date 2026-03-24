---
title: Create Historian Multi Client
description: Create a Historian Multi client
sidebar:
  order: -20
---

Create a client for the Historian API.

## Signature

`get_historian_multi(eigenserver: string | EigenServer, default_historian: string | None, timestamp_format: string)`

## Examples

### Default server from `EIGENSERVER` env variable

```python
from eigeningenuity import get_historian_multi

menu = get_historian_multi()
```

### Explicit server

```python
from eigeningenuity import get_historian_multi, EigenServer

ei = EigenServer("https://demo.eigen.co/")
menu = get_historian_multi(ei)
```

### Set Default Historian

```python
from eigeningenuity import get_historian_multi, EigenServer

ei = EigenServer("https://demo.eigen.co/")
menu = get_historian_multi(ei, default_historian="Demo-influxdb")
```
