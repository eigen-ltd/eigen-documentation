---
title: Execute Raw Query
description: The free form query api
sidebar:
  order: 2
---

Execute a raw Cypher query against the asset model.

:::note

> In the code sections of this file `model` refers to the AM client you created. (See [Asset Model Overview](../overview))

:::

## Signature

`executeRawQuery(query, output="json")`

- `query` (str)
- `output` (str): `json` (default), `df`, `raw`

### Inputs

- `query`: Cypher query string to run.
- `output`: Output format selector.

## Examples

### JSON output (default)

For a simple model, where we assume the only properties on a node are `code` and `name`

```python
results = model.executeRawQuery("MATCH (n) RETURN n LIMIT 2")
```

Response (json):

```json
[
  { "n": { "code": "System_01", "name": "System 01" } },
  { "n": { "code": "System_02", "name": "System 02" } }
]
```

### DataFrame output

```python
results_df = model.executeRawQuery("MATCH (n) RETURN n LIMIT 5", output="df")
```

```text
        n.code         n.name
0     System_01      System 01
1     System_02      System 02
```

### Raw output

```python
raw = model.executeRawQuery("MATCH (n) RETURN n LIMIT 5", output="raw")
```

```json
{
  "success": true,
  "response": {
    "data": [{ "n": { "code": "System_01", "name": "System 01" } }]
  }
}
```
