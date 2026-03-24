---
title: Create Eventlog Client
description: Create an Eventlog client
sidebar:
  order: 1
---

Create a client for the Eventlog API.

## Signature

`get_eventlog(eigenserver=None, default_eventlog=None)`

- `eigenserver` (EigenServer | str | None)
- `default_eventlog` (str | None)

### Inputs

- `eigenserver`: Optional Eigen server or base URL. Defaults to `EIGENSERVER` if omitted.
- `default_eventlog`: Override the default eventlog name (defaults to `eventlog`).

## Examples

### Default server from `EIGENSERVER` ENV variable

```python
from eigeningenuity import get_eventlog

log = get_eventlog()
```

### Explicit server

```python
from eigeningenuity import get_eventlog, EigenServer

ei = EigenServer("https://demo.eigen.co/")
log = get_eventlog(ei)
```
