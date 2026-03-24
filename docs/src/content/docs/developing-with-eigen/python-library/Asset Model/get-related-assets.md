---
title: getRelatedAssets
description: Retrieve assets related to given nodes
sidebar:
  order: 7
---

Return assets related to one or more nodes.

:::note
In the code sections of this file `model` refers to the AM client you created with get_assetmodel(). (See [Asset Model Overview](../overview))

:::

## Signature

`getRelatedAssets(nodes, prop="code", exact=False, relation=None, output="json")`

- `nodes` (str | list[str])
- `prop` (str, default: "code")
- `exact` (bool, default: False)
- `relation` (str | None)
- `output` (str): `json` (default), `df`, `raw`

### Inputs

- `nodes`: Node code(s) or property values to match.
- `prop`: Node property name to match on.
- `exact`: Use exact string matches instead of partial matches.
- `relation`: Filter by relationship type.
- `output`: Output format selector.

## Examples

### Related assets for a single node

```python
related = model.getRelatedAssets("System_01")
```

Response (json):

```json
[
  {
    "sourceNode": "System_01",
    "relatedAsset": { "code": "Pump_01", "name": "Pump 01" },
    "relationshipType": "feeds"
  }
]
```

### Filter by relationship type

```python
related = model.getRelatedAssets("System_01", relation="feeds")
```

### DataFrame output

```python
related_df = model.getRelatedAssets(["System_01", "System_02"], output="df")
```

<div align="center">

| sourceNode | relatedAsset | relationshipType |
| ---------- | ------------ | ---------------- |
| System_01  | Pump_01      | feeds            |
| System_02  | Pump_02      | feeds            |

</div>
