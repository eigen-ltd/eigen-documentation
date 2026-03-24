---
title: updateTag
description: Update or create metadata for a tag
sidebar:
  order: 5
---

Update or create metadata for a tag.

See also [Create Tag](/developing-with-eigen/python-library/historian-multi/metadata/createtag)

## Signature

`updateTag(tag, description=None, units=None, stepped=False, create_missing=False)`

- `tag` (str)
- `description` (str | None)
- `units` (str | None)
- `stepped` (bool, default: False)
- `create_missing` (bool, default: False)

### Inputs

- `tag`: Tag name to update.
- `description`: Optional description.
- `units`: Optional engineering units.
- `stepped`: Set true for discrete values.
- `create_missing`: Create tag if it does not exist.

## Examples

### JSON output (update + create missing)

```python
result = hm.updateTag(
  "DEMO_02TI999.PV",
  description="Updated description",
  units="C",
  stepped=False,
  create_missing=True,
)
```

Output:

```json
{ "success": true, "errors": {} }
```

### JSON output (partial update)

```python
result = hm.updateTag(
  "DEMO_02TI999.PV",
  units="degC",
)
```

Output:

```json
{ "success": true, "errors": {} }
```
