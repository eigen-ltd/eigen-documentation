---
title: getRelatedAssets
description: Retrieve assets related to a given asset
sidebar:
  order: 2
---

Return related assets from the Common Menu API.

## Signature

`getRelatedAssets(node, output="json", filepath=None)`

- `node` (str)
- `output` (str): `json` (default), `df`, `raw`, `file`
- `filepath` (str | None)

### Inputs

- `node`: Asset code to fetch related assets for.
- `output`: Output format selector.
- `filepath`: Output file path used when `output="file"`.

## Examples

### JSON output

```python
related = menu.getRelatedAssets("System_01")
```

```json
[{ "code": "Pump_01", "relationName": "feeds", "direction": "OUT" }]
```

### DataFrame output

```python
related_df = menu.getRelatedAssets("System_01", output="df")
```
