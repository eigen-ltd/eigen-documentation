---
title: createTag
description: Create a tag with metadata
sidebar:
  order: 4
---

Create a tag with metadata.

See also [Update Tag](/developing-with-eigen/python-library/historian-multi/metadata/updatetag)

## Signature

`createTag(tag, description=None, units=None, stepped=False, update_existing=False)`

- `tag` (str)
- `description` (str | None)
- `units` (str | None)
- `stepped` (bool, default: False)
- `update_existing` (bool, default: False)

### Inputs

- `tag`: Tag name to create.
- `description`: Optional description.
- `units`: Optional engineering units.
- `stepped`: Set true for discrete values.
- `update_existing`: Overwrite metadata if tag exists.

## Examples

### JSON output (new tag)

```python
result = hm.createTag(
  "DEMO_02TI999.PV",
  description="Demo tag",
  units="C",
  stepped=False,
  update_existing=False,
)
```

Output:

```json
{ "success": true, "errors": {} }
```

### JSON output (historian prefix)

```python
result = hm.createTag(
  "Demo-influxdb/DEMO_02TI998.PV",
  description="Demo tag with historian prefix",
  units="C",
)
```

Output:

```json
{ "success": true, "errors": {} }
```
