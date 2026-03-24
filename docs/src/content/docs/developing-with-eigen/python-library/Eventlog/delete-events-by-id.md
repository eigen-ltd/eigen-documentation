---
title: deleteEventsById
description: Delete events by ID
sidebar:
  order: 6
---

Delete events by ID.

:::danger

> Events deleted by this method cannot be restored. Make absolutely certain you have the right IDs before executing this function. To debug first run [Get Events By Ids](../get-events-by-id) with your ids and verify that only the events you wish to delete are returned.

:::

## Signature

`deleteEventsById(event_ids, eventlog="default")`

- `event_ids` (str | list[str])
- `eventlog` (str, default: "default")

### Inputs

- `event_ids`: Event ID(s) to delete.
- `eventlog`: Eventlog name to query.

## Examples

```python
result = log.deleteEventsById(["evt-001", "evt-002"])
```

Response:

```json
{ "success": true, "errors": {} }
```
