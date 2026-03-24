---
title: listTables
description: List tables in a SQL database
sidebar:
  order: 4
---

List tables within a SQL database.

## Signature

`listTables(db)`

- `db` (str)

### Inputs

- `db`: Database name.

## Examples

```python
tables = sql.listTables("aveva-db")
```

```json
["VT_TAGBARRIER", "VT_TAGLOCATION"]
```
