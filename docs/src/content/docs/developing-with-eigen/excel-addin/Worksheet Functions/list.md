---
title: List DataTags
description: A guide to using the LIST Function in the Excel Addin
sidebar:
  order: 10
---

List tags that match a wildcard/search pattern.

## Signature

- `EIGEN.LIST(datasource, wildcard, horizontal = false)`

### Parameters

- `datasource` (string): Historian name. If omitted reads default from settings.
- `wildcard` (string): Search pattern. Use `*` to combine multiple sequences `(a)*(b)*(c)`.
- `horizontal` (boolean): If `true` results are returned horizontally (single row); otherwise vertically (single column).

### Returns

- `string[][]` — List of tag names matching the wildcard search pattern.
  - **Vertical (default): Single column `["TagName"]` with one tag per row.**
  - **Horizontal (`horizontal=true`): Single row with tag names spread across columns.**

## Notes

- Results are grouped with `groupLists` before being returned.

## Example

- `=EIGEN.LIST("Demo-influxdb", "DEMO_02TI")` — list tags containing exactly `DEMO_02TI` in `Demo-influxdb`.
- `=EIGEN.LIST("Demo-influxdb", "DEMO_02TI*PV")` — list tags containing `DEMO_02TI` and followed at some point by `PV` in `Demo-influxdb`.

Sample output (vertical):

<div align="center">

| Tag Names       |
| --------------- |
| DEMO_02TI301.PV |
| DEMO_02TI201.PV |
| DEMO_02TP101.PV |

</div>

## Support

Have questions or issues? Reach out on our support system: https://eigen.freshdesk.com
