---
title: getEventsById
description: Retrieve events by ID
sidebar:
  order: 5
---

Retrieve events by ID.

## Signature

`getEventsById(event_ids, id_type="eventId", eventlog="default")`

- `event_ids` (str | list[str])
- `id_type` (str, default: "eventId")
- `eventlog` (str, default: "default")

### Inputs

- `event_ids`: Event ID(s) to retrieve.
- `id_type`: `eventId`, `externalId`, or `episodeId`.
- `eventlog`: Eventlog name to query.

## Examples

### Event IDs

```python
results = log.getEventsById(["evt-001", "evt-002"], id_type="eventId")
```

### External IDs

```python
results = log.getEventsById(["ext-123"], id_type="externalId")
```

### Episode IDs

```python
results = log.getEventsById(["ep-456"], id_type="episodeId")
```
