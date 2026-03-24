---
title: getMeasurements
description: Retrieve timeseries metadata for an asset
sidebar:
  order: 3
---

Return measurement tags related to an asset.

## Signature

`getMeasurements(node, source="all", output="json", filepath=None)`

- `node` (str)
- `source` (str, default: "all")
- `output` (str): `json` (default), `df`, `raw`, `file`
- `filepath` (str | None)

### Inputs

- `node`: Asset code to fetch measurements for.
- `source`: `all`, `merged`, or a specific source name.
- `output`: Output format selector.
- `filepath`: Output file path used when `output="file"`.

## Examples

### All sources

```python
measurements = menu.getMeasurements("System_01", source="all")
```

### Merged list

```python
measurements = menu.getMeasurements("System_01", source="merged")
```

### DataFrame output

```python
measurements_df = menu.getMeasurements("System_01", source="all", output="df")
```
