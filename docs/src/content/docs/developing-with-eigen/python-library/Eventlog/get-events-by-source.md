---
title: getEventsBySource
description: Filter events by source
sidebar:
  order: 3
---

Retrieve events filtered by source.

## Signature

`getEventsBySource(source, eventlog="default", exact_match=False, start="yesterday", end="now", filter=None, size=1000, page=0)`

- `source` (str | list[str])
- `eventlog` (str, default: "default")
- `exact_match` (bool, default: False)
- `start` (str | datetime, default: "yesterday")
- `end` (str | datetime, default: "now")
- `filter` (str | None)
- `size` (int, default: 1000)
- `page` (int, default: 0)

### Inputs

- `source`: Source identifier(s) to filter events by.
- `eventlog`: Eventlog name to query.
- `exact_match`: Use exact matching on `source` when true.
- `start`: Start of time window.
- `end`: End of time window.
- `filter`: Elasticsearch query string filter.
- `size`: Max number of results returned.
- `page`: Page number for pagination.

## Examples

### Partial match (default)

```python
results = log.getEventsBySource("ingenuity")
```

### Exact match

```python
results = log.getEventsBySource(
    ["ingenuity-service"],
    exact_match=True,
)
```
