---
title: getCurrentDataPoints
description: Get the latest values for one or more tags
sidebar:
  order: 1
---

Get the latest value for one or more tags.

## Signature

`getCurrentDataPoints(tags, output="json")`

- `tags` (str | list[str])
- `output` (str): `json` (default), `df`, `raw`, `string`

### Inputs

- `tags`: Tag name or list of tags to read the latest values from.
- `output`: Output format selector.

## Examples

### JSON output (single tag)

```python
value = hm.getCurrentDataPoints("DEMO_02TI301.PV")
```

Output:

```json
{
  "timestamp": "2024-01-01T12:00:00Z",
  "value": 38.1,
  "status": "OK"
}
```

### JSON output (multiple tags)

```python
values = hm.getCurrentDataPoints(["DEMO_02TI301.PV", "DEMO_02TI201.PV"])
```

Output:

```json
{
  "DEMO_02TI301.PV": {
    "timestamp": "2024-01-01T12:00:00Z",
    "value": 38.1,
    "status": "OK"
  },
  "DEMO_02TI201.PV": {
    "timestamp": "2024-01-01T12:00:00Z",
    "value": 42.0,
    "status": "OK"
  }
}
```

### DataFrame output (single tag)

```python
latest = hm.getCurrentDataPoints("DEMO_02TI301.PV", output="df")
```

Output (`df`):

```text
                     DEMO_02TI301.PV
2024-01-01 12:00:00             38.1
```

### DataFrame output (multiple tags)

```python
latest_df = hm.getCurrentDataPoints(
  ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
  output="df",
)
```

Output (`df`):

```text
                    DEMO_02TI301.PV  DEMO_02TI201.PV
2024-01-01 12:00:00             38.1             42.0
```

### Raw output (single tag)

```python
raw = hm.getCurrentDataPoints("DEMO_02TI301.PV", output="raw")
```

Output:

```json
{
  "results": {
    "DEMO_02TI301.PV": {
      "dataPoint": { "timestamp": 1704110400000, "value": 38.1, "status": "OK" }
    }
  }
}
```

### Raw output (multiple tags)

```python
raw = hm.getCurrentDataPoints(
    ["DEMO_02TI301.PV", "DEMO_02TI201.PV"],
    output="raw",
)
```

Output:

```json
{
  "results": {
    "DEMO_02TI301.PV": {
      "dataPoint": { "timestamp": 1704110400000, "value": 38.1, "status": "OK" }
    },
    "DEMO_02TI201.PV": {
      "dataPoint": { "timestamp": 1704110400000, "value": 42.0, "status": "OK" }
    }
  }
}
```
