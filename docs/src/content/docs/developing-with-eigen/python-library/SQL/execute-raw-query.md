---
title: executeRawQuery
description: Execute a raw SQL query
sidebar:
  order: 2
---

Execute a raw SQL query against an Ingenuity SQL database.

:::caution

> This API is READ-ONLY. Any attempts to create, write, delete or update tables or databases will be blocked. This tool is for data retrieval only

:::

## Signature

`executeRawQuery(cmd, db, query, output="json", filepath=None)`

- `cmd` (str)
- `db` (str)
- `query` (str)
- `output` (str): `json` (default), `df`, `raw`, `string`, `file`
- `filepath` (str | None)

### Inputs

- `cmd`: Command string, usually `EXECUTE`.
- `db`: Database name.
- `query`: SQL query string.
- `output`: Output format selector.
- `filepath`: Output file path used when `output="file"`.

## Examples

### JSON output (default)

```python
query = "SELECT * FROM VT_TAGBARRIER WHERE ROWNUM <= 10"
results = sql.executeRawQuery("EXECUTE", "aveva-db", query)
```

### DataFrame output

```python
results_df = sql.executeRawQuery(
    "EXECUTE",
    "aveva-db",
    query,
    output="df",
)
```

### File output

```python
sql.executeRawQuery(
    "EXECUTE",
    "aveva-db",
    query,
    output="file",
    filepath="/tmp/aveva-sample",
)
```
