---
title: getDocuments
description: Retrieve documents for an asset
sidebar:
  order: 7
---

Return documents related to an asset.

## Signature

`getDocuments(node, document_type="all", output="json", filepath=None)`

- `node` (str)
- `document_type` (str, default: "all")
- `output` (str): `json` (default), `df`, `raw`, `file`
- `filepath` (str | None)

### Inputs

- `node`: Asset code to fetch documents for.
- `document_type`: `all`, `merged`, or a specific type name.
- `output`: Output format selector.
- `filepath`: Output file path used when `output="file"`.

## Examples

### All documents

```python
documents = menu.getDocuments("System_01", document_type="all")
```

### Merged documents

```python
documents = menu.getDocuments("System_01", document_type="merged")
```

### Specific document type

```python
documents = menu.getDocuments("System_01", document_type="P&ID")
```

### DataFrame output

```python
documents_df = menu.getDocuments("System_01", document_type="merged", output="df")
```
