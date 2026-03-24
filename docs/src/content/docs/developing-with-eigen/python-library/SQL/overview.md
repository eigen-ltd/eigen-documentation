---
title: The SQL Module
description: Overview of the SQL module
sidebar:
  order: -1
---

The SQL module provides access to SQL databases connected to Ingenuity.

:::caution

> This API is READ-ONLY. Any attempts to create, write, delete or update tables or databases will be blocked. This tool is for data retrieval only

:::

## What This Module Does

- Executes raw SQL queries
- Lists available databases
- Lists tables within a database

## Key Entry Point

Use `get_sql()` to create a client:

```python
from eigeningenuity import get_sql, EigenServer

ei = EigenServer("https://demo.eigen.co/")
sql = get_sql(ei)
```

## Common Operations

### Execute a Query

```python
query = "SELECT * FROM VT_TAGBARRIER WHERE ROWNUM <= 10"
results = sql.executeRawQuery("EXECUTE", "aveva-db", query)
```

### List Databases and Tables

```python
dbs = sql.listDatabases()
tables = sql.listTables("aveva-db")
```

## Output Formats

Most calls support:

- `json` (default)
- `df` (pandas DataFrame)
- `raw` (full API response)
- `file` (write JSON to disk)

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).

## Functions

- [get_sql](../get-sql)
- [executeRawQuery](../execute-raw-query)
- [listDatabases](../list-databases)
- [listTables](../list-tables)
