---
title: pushToEventlog
description: Push events to the eventlog
sidebar:
  order: 7
---

Push one or more events to the eventlog.

## Signature

`pushToEventlog(events)`

- `events` (dict | list[dict] | str)

### Inputs

- `events`: Single event dict, list of event dicts, or a file path with events.

## Examples

### Single event

```python
log.pushToEventlog({"timestamp": "2024-01-01T00:00:00Z", "message": "Hello"})
```

### Multiple events

```python
log.pushToEventlog([
    {"timestamp": "2024-01-01T00:00:00Z", "message": "Hello"},
    {"timestamp": "2024-01-01T01:00:00Z", "message": "World"},
])
```
