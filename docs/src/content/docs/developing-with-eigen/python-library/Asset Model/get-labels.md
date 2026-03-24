---
title: getLabels
description: List labels in the asset model
sidebar:
  order: 5
---

List labels used in the asset model, or labels for specific nodes.
:::note

> In the code sections of this file `model` refers to the AM client you created. (See [Asset Model Overview](../overview))

:::

## Signature

`getLabels(codes=None, output="json")`

- `codes` (str | list[str] | None)
- `output` (str): `json` (default), `df`, `raw`

### Inputs

- `codes`: Node code(s) to return labels for. Omit to list all labels.
- `output`: Output format selector.

## Examples

### All labels

```python
labels = model.getLabels()
```

Response (json):

```json
["AssetObject", "Equipment", "Location"]
```

### Labels for a single asset

```python
labels = model.getLabels("Pump_01")
```

Response (json):

```json
["AssetObject", "Equipment"]
```

### Multiple assets with DataFrame output

```python
labels_df = model.getLabels(["System_01", "Pump_01"], output="df")
```

<div align="center">

| code      | labels                      |
| --------- | --------------------------- |
| System_01 | ["AssetObject","Location"]  |
| Pump_01   | ["AssetObject","Equipment"] |

</div>
