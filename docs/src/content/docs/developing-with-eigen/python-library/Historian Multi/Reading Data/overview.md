---
title: Retrieving Timeseries Data
description: Read operations for Historian Multi
sidebar:
  order: -10
---

Historian Multi provides a single client for querying multiple historians. This overview captures shared details for read and aggregation methods.

## Timestamp Formats Accepted

Most read methods accept timestamps as:

- Python `datetime` objects
- Epoch seconds (`int` or `float`) or epoch milliseconds (`int`)
- Strings parsed by dateparser (e.g. `"2024-01-01 00:00:00"`)
- Relative strings like `"now"` or `"1 hour ago"`

The library converts timestamps to epoch milliseconds before sending requests.

## Methods

- [getCurrentDataPoints](/developing-with-eigen/python-library/historian-multi/reading-data/getcurrentdatatag/createtag)
- [getInterpolatedPoints](/developing-with-eigen/python-library/historian-multi/reading-data/getInterpolatedPoints/createtag)
- [getInterpolatedRange](/developing-with-eigen/python-library/historian-multi/reading-data/getInterpolatedRange/createtag)
- [getRawDatapoints](/developing-with-eigen/python-library/historian-multi/reading-data/getRawDatapoints/createtag)
- [getClosestRawPoint](/developing-with-eigen/python-library/historian-multi/reading-data/getClosestRawPoint/createtag)
- [getAggregates](/developing-with-eigen/python-library/historian-multi/reading-data/getAggregates/createtag)
- [getAggregateIntervals](/developing-with-eigen/python-library/historian-multi/reading-data/getAggregateIntervals/createtag)

## Output Format Examples

### JSON (default)

Single tag responses are simplified to a list of points (or a single point). Multi-tag responses return a dictionary keyed by tag.

### RAW

```json
{
  "results": {
    "DEMO_02TI301.PV": {
      "dataPoints": [{ "timestamp": 1704067200000, "value": 38.0, "status": "OK" }]
    }
  }
}
```

### DataFrame (`df`)

```text
                     DEMO_02TI301.PV  DEMO_02TI201.PV
2024-01-01 00:00:00             38.0             42.0
2024-01-01 01:00:00             37.5             41.7
```

### String (`string`)

Returns a JSON string of the results.
