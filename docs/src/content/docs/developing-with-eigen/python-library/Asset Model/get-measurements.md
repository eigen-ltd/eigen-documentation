---
title: getMeasurements
description: Retrieve measurements for assets
sidebar:
  order: 3
---

Return measurement tags related to one or more assets.

:::note

> In the code sections of this file `model` refers to the AM client you created with get_assetmodel(). (See [Asset Model Overview](../overview))

:::

## Signature

`getMeasurements(nodes, prop="code", measurement="", output="json")`

- `nodes` (str | list[str])
- `prop` (str, default: "code")
- `measurement` (str, default: "")
- `output` (str): `json` (default), `df`, `raw`

### Inputs

- `nodes`: Node code(s) or property values to match.
- `prop`: Node property name to match on.
- `measurement`: Optional measurement name filter.
- `output`: Output format selector.

## Examples

### Single asset

```python
measurements = model.getMeasurements("System_01")
```

Response (json):

```json
[{ "code": "System_01", "measurementName": "Temperature", "tag": "DEMO_02TI301.PV" }]
```

### Multiple assets with DataFrame output

```python
measurements_df = model.getMeasurements(
    ["System_01", "System_02"],
    output="df",
)
```

<div align="center">

| code      | measurementName | tag             |
| --------- | --------------- | --------------- |
| System_01 | Temperature     | DEMO_02TI301.PV |
| System_02 | Temperature     | DEMO_02TI201.PV |

</div>

### Filter by measurement type

```python
measurements = model.getMeasurements("System_01", measurement="Temperature")
```
