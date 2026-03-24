---
title: Writing Timeseries Data
description: Write operations for Historian Multi
sidebar:
  order: -7
---

This overview covers shared details for write methods in Historian Multi.

## Timestamp Formats Accepted

Write methods accept timestamps as:

- Python `datetime` objects
- Epoch seconds (`int` or `float`) or epoch milliseconds (`int`)
- Strings parsed by dateparser (e.g. `"2024-01-01 00:00:00"`)
- Relative strings like `"now"` or `"1 hour ago"`

The library converts timestamps to epoch milliseconds before sending requests.

## Methods

- [createPoint](/developing-with-eigen/python-library/historian-multi/writing-data/createpoint)
- [writePoints](/developing-with-eigen/python-library/historian-multi/writing-data/writepoints)
- [writePointsBatch](/developing-with-eigen/python-library/historian-multi/writing-data/writepointsbatch)
- [createAndPopulateTag](/developing-with-eigen/python-library/historian-multi/writing-data/createandpopulatetag)

## Response Structure Notes

- Success responses return `{"success": true, "message": "All points written!"}`.
- If the server rejects points, `success` will be false and `message` contains the server response.
