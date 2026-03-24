---
title: getMetaData
description: Fetch tag metadata for a historian
sidebar:
  order: 1
---

Fetch tag metadata for a historian, optionally filtered with a wildcard.

## Signature

`getMetaData(historian=None, limit=100, match="")`

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
metadata = hm.getMetaData(historian="Demo-influxdb", limit=100, match="DEMO_02TI*")
```

Output:

```json
[
  {
    "tagName": "DEMO_02TI301.PV",
    "qualifiedTagName": "Demo-influxdb/DEMO_02TI301.PV",
    "historianName": "Demo-influxdb",
    "description": "Demo Temperature Tag 3",
    "units": "degC",
    "stepped": false,
    "metadata": {
      "series": {
        "measurementName": "DEMO_02TI301.PV",
        "fieldType": "float",
        "tags": {}
      },
      "unitMultiplier": 1,
      "fieldOrDefault": "value"
    }
  }
]
```

### Default historian (smaller limit)

```python
metadata = hm.getMetaData(limit=1)
```

Output:

```json
[
  {
    "tagName": "DEMO_02TI301.PV",
    "qualifiedTagName": "Demo-influxdb/DEMO_02TI301.PV",
    "historianName": "Demo-influxdb",
    "description": "Demo Temperature Tag 3",
    "units": "degC",
    "stepped": False,
    "metadata": {
      "series": {
        "measurementName": "DEMO_02TI301.PV",
        "field": None,
        "fieldType": "float",
        "tags": {},
        "seriesNameWithoutField": "DEMO_02TI301.PV",
        "seriesName": "DEMO_02TI301.PV.None"
      },
      "description": "Demo Temperature Tag 3",
      "units": "degC",
      "stepped": False,
      "unitMultiplier": 1,
      "measurementName": "DEMO_02TI301.PV",
      "fieldOrDefault": "value",
      "tags": {}
    }
  }
]
```
