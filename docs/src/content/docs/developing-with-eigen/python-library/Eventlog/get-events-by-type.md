---
title: getEventsByType
description: Filter events by type
sidebar:
  order: 4
---

Retrieve events filtered by type.

## Signature

`getEventsByType(event_type, eventlog="default", start="yesterday", end="now", filter=None, size=1000, page=0)`

- `event_type` (str | list[str])
- `eventlog` (str, default: "default")
- `start` (str | datetime, default: "yesterday")
- `end` (str | datetime, default: "now")
- `filter` (str | None)
- `size` (int, default: 1000)
- `page` (int, default: 0)

### Inputs

- `event_type`: Event type(s) to filter on.
- `eventlog`: Eventlog name to query.
- `start`: Start of time window.
- `end`: End of time window.
- `filter`: Elasticsearch query string filter.
- `size`: Max number of results returned.
- `page`: Page number for pagination.

## Examples

```python
results = log.getEventsByType(
    ["DataTagThresholdCheck"],
    start="yesterday",
    end="now",
)
```
