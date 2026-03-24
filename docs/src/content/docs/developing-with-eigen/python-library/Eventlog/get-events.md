---
title: getEvents
description: Run a raw eventlog query
sidebar:
  order: 2
---

Execute a raw query against the eventlog.

## Signature

`getEvents(query, eventlog="default", size=1000, page=0)`

- `query` (dict)
- `eventlog` (str, default: "default")
- `size` (int, default: 1000)
- `page` (int, default: 0)

### Inputs

- `query`: Eventlog query dictionary (includes `start`, `end`, and optional filters).
- `eventlog`: Eventlog name to query.
- `size`: Max number of results returned.
- `page`: Page number for pagination.

## Examples

### Basic query

```python
query = {
    "start": "yesterday",
    "end": "now",
    "severities": ["INFO", "WARNING"],
}
results = log.getEvents(query)
```

### With pagination

```python
results = log.getEvents(query, size=500, page=1)
```
