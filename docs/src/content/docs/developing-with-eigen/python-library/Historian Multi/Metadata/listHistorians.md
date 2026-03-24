---
title: listHistorians
description: List available historians
sidebar:
  order: 3
---

List available historians (from the search endpoint).

## Signature

`listHistorians(historian=None, limit=100, match="")`

- `historian` (str | None)
- `limit` (int, default: 100)
- `match` (str, default: "")

### Inputs

- `historian`: Historian name to search.
- `limit`: Max number of results returned.
- `match`: Wildcard pattern to filter results.

## Examples

### Filtered results (match)

```python
historians = hm.listHistorians(limit=100, match="Demo*")
```

Output:

```json
[
  {
    "tagName": "DEMO_12TI122.PV",
    "qualifiedTagName": "Demo-influxdb/DEMO_12TI122.PV",
    "historianName": "Demo-influxdb",
    "description": "",
    "units": "",
    "stepped": false,
    "metadata": {
      "series": {
        "measurementName": "DEMO_12TI122.PV",
        "field": null,
        "fieldType": "float",
        "tags": {},
        "seriesNameWithoutField": "DEMO_12TI122.PV",
        "seriesName": "DEMO_12TI122.PV.null"
      },
      "description": "",
      "units": "",
      "stepped": false,
      "unitMultiplier": 1,
      "measurementName": "DEMO_12TI122.PV",
      "fieldOrDefault": "value",
      "tags": {}
    }
  },
  {
    "tagName": "DEMO_01FI023.PV",
    "qualifiedTagName": "Demo-influxdb/DEMO_01FI023.PV",
    "historianName": "Demo-influxdb",
    "description": null,
    "units": null,
    "stepped": false,
    "metadata": {
      "series": {
        "measurementName": "DEMO_01FI023.PV",
        "field": "",
        "fieldType": "float",
        "tags": {},
        "seriesNameWithoutField": "DEMO_01FI023.PV",
        "seriesName": "DEMO_01FI023.PV."
      },
      "description": null,
      "units": null,
      "stepped": false,
      "unitMultiplier": 1,
      "measurementName": "DEMO_01FI023.PV",
      "fieldOrDefault": "value",
      "tags": {}
    }
  }
]
```

### No filter

```python
historians = hm.listHistorians()
```

Output:

```json
[
  {
    "tagName": "DEMO_12TI122.PV",
    "qualifiedTagName": "Demo-influxdb/DEMO_12TI122.PV",
    "historianName": "Demo-influxdb"
  }
]
```
