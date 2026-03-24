---
title: Create SQL Client
description: Create a SQL client
sidebar:
  order: 1
---

Create a client for the SQL API.

## Signature

`get_sql(eigenserver=None)`

- `eigenserver` (EigenServer | str | None)

### Inputs

- `eigenserver`: Optional Eigen server or base URL. Defaults to `EIGENSERVER` if omitted.

## Examples

### Default server from `EIGENSERVER` ENV variable

```python
from eigeningenuity import get_sql

sql = get_sql()
```

### Explicit server

```python
from eigeningenuity import get_sql, EigenServer

ei = EigenServer("https://demo.eigen.co/")
sql = get_sql(ei)
```
