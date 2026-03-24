---
title: getProperties
description: Retrieve properties for an asset
sidebar:
  order: 6
---

Return properties for an asset.

## Signature

`getProperties(node, source="all", output="json", filepath=None)`

- `node` (str)
- `source` (str, default: "all")
- `output` (str): `json` (default), `df`, `raw`, `file`
- `filepath` (str | None)

### Inputs

- `node`: Asset code to fetch properties for.
- `source`: `all` or a specific source name.
- `output`: Output format selector.
- `filepath`: Output file path used when `output="file"`.

## Examples

### All sources

```python
properties = menu.getProperties("System_01", source="all")
```

### Specific source

```python
properties = menu.getProperties("System_01", source="graphapi")
```

### DataFrame output

```python
properties_df = menu.getProperties("System_01", source="all", output="df")
```
