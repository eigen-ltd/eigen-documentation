---
title: getDocuments
description: Retrieve documents linked to assets
sidebar:
  order: 4
---

Return documents related to one or more assets.
:::note

> In the code sections of this file `model` refers to the AM client you created. (See [Asset Model Overview](../overview))

:::

## Signature

`getDocuments(nodes, match=None, output="json")`

- `nodes` (str | list[str])
- `match` (str | None)
- `output` (str): `json` (default), `df`, `raw`

### Inputs

- `nodes`: Node code(s) to fetch documents for.
- `match`: Filter by filename, description, or code.
- `output`: Output format selector.

## Examples

### Single asset

```python
documents = model.getDocuments("System_01")
```

Response (json):

```json
{
  "System_01": [{ "fileName": "manual.pdf", "description": "System manual" }]
}
```

### Filter by filename or description

```python
filtered = model.getDocuments("System_01", match="manual")
```

### DataFrame output

```python
documents_df = model.getDocuments(["System_01", "System_02"], output="df")
```

<div align="center">

| code      | fileName   | description   |
| --------- | ---------- | ------------- |
| System_01 | manual.pdf | System manual |
| System_02 | spec.pdf   | Specs         |

</div>
