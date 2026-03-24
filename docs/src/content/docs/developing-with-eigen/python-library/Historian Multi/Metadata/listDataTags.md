---
title: listDataTags
description: List tag names for a historian
sidebar:
  order: 2
---

List tag names for a historian, optionally filtered with a wildcard.

## Signature

`listDataTags(historian=None, limit=100, match="")`

- `historian` (str | None)
- `limit` (int, default: 100)
- `match` (str, default: "")

### Inputs

- `historian`: Historian name to search.
- `limit`: Max number of tags returned.
- `match`: Wildcard pattern for tag names.

## Examples

### Filtered tags (historian + match)

```python
tags = hm.listDataTags(historian="Demo-influxdb", limit=100, match="DEMO_02TI*")
```

Output:

```json
["DEMO_02TI301.PV", "DEMO_02TI201.PV"]
```

### Default historian (first 50 tags)

```python
tags = hm.listDataTags(limit=50)
```

Output:

```json
["TEST_TAG_FA_1", "DEMO_12TI122.PV", "DEMO_01FI023.PV", ..., "DEMO_01XXV011.DEMAND.value"]
```
