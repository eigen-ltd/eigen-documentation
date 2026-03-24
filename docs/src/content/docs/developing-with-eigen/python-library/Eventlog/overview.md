---
title: The Eventlog Module
description: Overview of the Eventlog module
sidebar:
  order: -1
---

The Eventlog module provides access to the Ingenuity event log API for querying and writing events.

## What This Module Does

- Runs structured event queries
- Filters events by source, type, or ID
- Deletes events by ID
- Pushes events into the event log

## Key Entry Point

Use `get_eventlog()` to create a client:

```python
from eigeningenuity import get_eventlog, EigenServer

ei = EigenServer("https://demo.eigen.co/")
log = get_eventlog(ei)
```

## Common Operations

### Query Events

```python
query = {
    "start": "yesterday",
    "end": "now",
    "severities": ["INFO", "WARNING"],
}
results = log.getEvents(query)
```

### Filter by Source or Type

```python
by_source = log.getEventsBySource("ingenuity-service")
by_type = log.getEventsByType("DataTagThresholdCheck")
```

### Push Events

```python
log.pushToEventlog({"timestamp": "2024-01-01T00:00:00Z", "message": "Hello"})
```

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).

## Functions

- [get_eventlog](../get-eventlog)
- [getEvents](../get-events)
- [getEventsBySource](../get-events-by-source)
- [getEventsByType](../get-events-by-type)
- [getEventsById](../get-events-by-id)
- [deleteEventsById](../delete-events-by-id)
- [pushToEventlog](../push-to-eventlog)
