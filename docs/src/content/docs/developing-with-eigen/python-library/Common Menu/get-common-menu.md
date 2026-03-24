---
title: Create Common Menu Client
description: Create a Common Menu client
sidebar:
  order: 1
---

Create a client for the Common Menu API.

## Signature

`get_common_menu(eigenserver=None)`

- `eigenserver` (EigenServer | str | None)

### Inputs

- `eigenserver`: Optional Eigen server or base URL. Defaults to `EIGENSERVER` if omitted.

## Examples

### Default server from `EIGENSERVER` ENV variable

```python
from eigeningenuity import get_common_menu

menu = get_common_menu()
```

### Explicit server

```python
from eigeningenuity import get_common_menu, EigenServer

ei = EigenServer("https://demo.eigen.co/")
menu = get_common_menu(ei)
```
