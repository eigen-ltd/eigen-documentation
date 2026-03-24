---
title: getMatchingNodes
description: Find nodes that match criteria
sidebar:
  order: 6
---

Return nodes that match a set of criteria.
:::note

> In the code sections of this file `model` refers to the AM client you created with get_assetmodel(). (See [Asset Model Overview](../overview))

:::

## Signature

`getMatchingNodes(criteria, match_all=True, exact=False, output="json")`

- `criteria` (dict)
- `match_all` (bool, default: True)
- `exact` (bool, default: False)
- `output` (str): `json` (default), `df`, `raw`

### Inputs

- `criteria`: Key/value matches; use `@labels` or `@ids` for special matching.
- `match_all`: Use AND matching when true, OR when false.
- `exact`: Use exact string matches instead of partial matches.
- `output`: Output format selector.

## Examples

### Match by code (partial match)

```python
nodes = model.getMatchingNodes({"code": "System_"})
```

Response (json):

```json
[
  { "code": "System_01", "name": "System 01" },
  { "code": "System_02", "name": "System 02" }
]
```

### Match by labels

```python
nodes = model.getMatchingNodes({"@labels": ["AssetObject", "Equipment"]})
```

### Match by multiple fields and exact values

```python
nodes = model.getMatchingNodes(
    {"code": "System_01", "status": "Active"},
    match_all=True,
    exact=True,
    output="df",
)
```
