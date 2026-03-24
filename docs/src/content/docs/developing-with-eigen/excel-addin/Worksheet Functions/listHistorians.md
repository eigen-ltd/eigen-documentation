---
title: List Historians
description: A guide to using the LISTHISTORIANS Function in the Excel Addin
sidebar:
  order: 11
---

Return available historian sources (optionally only writable ones).

## Signature

- `EIGEN.LISTHISTORIANS(writableOnly = false)`

### Parameters

- `writableOnly` (boolean): If `true` only writers are returned. Default: `false`.

### Returns

- `string[][]` — List of historian names.
  - **Format: Single column of historian names, one per row.**
  - **With `writableOnly=false` (default): All readable historians.**
  - **With `writableOnly=true`: Only writable historians.**

## Notes

- Uses `fetchHistorians` to query available sources.

## Example

- `=EIGEN.LISTHISTORIANS()` — returns all known historian sources.
- `=EIGEN.LISTHISTORIANS(TRUE)` — returns all known writable historian sources.

Sample output:

<div align="center">

| Historian Name  |
| --------------- |
| Demo-influxdb   |
| Archive         |
| Historical_Data |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
