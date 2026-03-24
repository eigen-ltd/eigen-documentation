---
title: createAndPopulateTag
description: Create a tag with metadata and write points
sidebar:
  order: 4
---

Create a tag with metadata and immediately write points.

## Signature

`createAndPopulateTag(tag, points, description=None, units=None, stepped=False, update_existing=True)`

- `tag` (str)
- `points` (dict | list[dict])
- `description` (str | None)
- `units` (str | None)
- `stepped` (bool, default: False)
- `update_existing` (bool, default: True)

### Inputs

- `tag`: Tag name to create or update.
- `points`: List of points to write after creation.
- `description`: Optional description.
- `units`: Optional engineering units.
- `stepped`: Set true for discrete values.
- `update_existing`: Overwrite metadata if tag exists.

## Examples

### JSON output (single point)

```python
result = hm.createAndPopulateTag(
  "DEMO_02TI999.PV",
  [{"value": 10.5, "timestamp": "2024-01-01 00:00:00"}],
  description="Demo tag",
  units="C",
  stepped=False,
)
```

Output:

```json
{
  "success": true,
  "createTag": { "success": true, "errors": {} },
  "writePoints": { "success": true, "message": "All points written!" }
}
```

### JSON output (multiple points, update existing)

```python
result = hm.createAndPopulateTag(
    "DEMO_02TI999.PV",
    [
        {"value": 10.7, "timestamp": "2024-01-01 02:00:00"},
        {"value": 10.8, "timestamp": "2024-01-01 03:00:00"},
    ],
    description="Demo tag (updated)",
    units="C",
    stepped=True,
    update_existing=True,
)
```

Output:

```json
{
  "success": true,
  "createTag": { "success": true, "errors": {} },
  "writePoints": { "success": true, "message": "All points written!" }
}
```
