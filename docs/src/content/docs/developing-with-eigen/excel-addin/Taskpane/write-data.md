---
title: Writing Data
description: Writing Values to a historian
sidebar:
  order: 4
---

The **Write Data** tab in the taskpane lets you push data from an Excel table back into a historian source in Eigen Ingenuity. This is useful for manually entering or correcting tag values, or for importing data from another source into the historian.

---

## Overview

The write operation reads rows from a named Excel table on the active worksheet and posts each row as a timestamped data point to the specified tag in the historian. Tags are created automatically if they do not already exist.

---

## Requirements

### Table format

Your data must be structured as an **Excel table** (not a plain range) on the active worksheet. The table must contain the following three column headers (case-insensitive):

<div align="center">

| Column      | Description                                       |
| ----------- | ------------------------------------------------- |
| `Tag`       | The tag name to write to (e.g. `DEMO_02TI301.PV`) |
| `Value`     | The numeric or string value to write              |
| `Timestamp` | The date/time of the data point                   |

</div>
The table must be formatted as a proper Excel table (Insert → Table), not a plain range of cells, so that the add-in can look it up by name.

**Column order does not matter** — the add-in identifies columns by their header names.

### Timestamp format

The `Timestamp` column accepts:

- **Date strings** — any format parseable by the browser (e.g. `2024-01-15 08:30:00`, `2024-01-15T08:30:00Z`)
- **Excel date serial numbers** — the numeric value Excel uses internally to represent dates. These are automatically converted to ISO 8601 format before writing.

Mixed usage of strings and serial numbers in the same table is supported.

---

## Step-by-step

### 1. Select a Table

The **Available Tables** dropdown lists all Excel tables on the active worksheet.

- Click the dropdown to refresh the list and select your table.
- When a table is selected, it is **highlighted with a blue border** in the worksheet so you can visually confirm the correct table is chosen.
- To deselect, choose another table or navigate away from the Write Data tab.

If no tables appear, ensure you have created an Excel table (not just a range) on the active sheet.

### 2. Select the Target Historian

The **Historian Source** field specifies which historian the data will be written to.

- The field is pre-populated with your default historian source from Settings.
- Type to **search available historians** — the field autocompletes against writable historians on the connected server.
- Autocomplete only queries historians that are flagged as writable.
- You can type a historian name directly if you already know it, but if it is not flagged as writable, the operation will fail.

### 3. Write the data

Once a table and a historian are selected, the **Write Values to Historian** button becomes active.

Click it to:

1. Read all rows from the selected table.
2. Validate that the required column headers are present.
3. Convert timestamps to ISO 8601 format.
4. Group rows by tag and send each tag's data points in a single request.
5. Request that missing tags are created automatically (`createTags: true`).

A spinner icon replaces the button logo while the write is in progress.

## Feedback messages

After the operation completes, a message bar is displayed:

<div align="center">

| Type        | Meaning                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Success** | All data points were written without errors                                                                                             |
| **Warning** | The operation completed but some rows had issues (e.g. a tag could not be created). Individual errors are shown below the main message. |
| **Error**   | The write failed. The error message describes the cause (e.g. missing headers, server error, authentication failure).                   |

</div>

Individual row-level errors — if any — appear as separate error bars beneath the main message. Each one identifies the specific failure so you can correct the data and retry.

Dismiss a message using the **×** on the message bar, or it will clear automatically when you change the table selection.

## Validation

The add-in validates your table before making any requests:

- **Missing headers** — if `Tag`, `Value`, or `Timestamp` columns are not found, the write is blocked with an error listing the missing headers. Check that the column names are spelled correctly (they are matched case-insensitively).
- **Empty table selection** — the Write button is disabled if no table has been selected.

---

## Notes

- **Tags are created if they don't exist.** If a tag name in the `Tag` column does not already exist in the historian, it will be created automatically with the written values.
- **All rows are processed.** Every data row in the table is included — there is no row-level filtering or skip logic.
- **One request per tag.** Rows are grouped by tag name before being sent, so all points for the same tag are submitted in a single API call.
- **Only the active worksheet is scanned** for available tables. Tables on other sheets will not appear in the dropdown.
- Partial historian names and wildcard matching are not supported in the Historian Source field — the value must match a known historian name exactly.

---

## Example table

<div align="center">

| Tag             | Value | Timestamp           |
| --------------- | ----- | ------------------- |
| DEMO_02TI301.PV | 73.4  | 2024-06-01 08:00:00 |
| DEMO_02TI301.PV | 74.1  | 2024-06-01 09:00:00 |
| DEMO_02TI201.PV | 65.2  | 2024-06-01 08:00:00 |
| DEMO_02TI201.PV | 66.0  | 2024-06-01 09:00:00 |

</div>
The historian used must be accessible and writable with your current credentials.

---

Need help? Contact support at [support.eigen.co](https://support.eigen.co).
