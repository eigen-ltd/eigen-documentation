---
title: Taskpane Function Builder
description: A guide to the taskpane inputs
sidebar:
  order: 2
---

The **Read Functions** tab in the taskpane lets you configure and run any of the EIGEN query functions without typing a formula manually. This page documents each input field, how it works, and which query types it applies to.

---

## Query Type

The first dropdown on the pane. Select the type of data you want to retrieve before any other inputs appear.

| Option                             | Function              | Description                                                       |
| ---------------------------------- | --------------------- | ----------------------------------------------------------------- |
| Get Latest Point                   | `EIGEN.GETCURRENT`    | Returns the most recent value for each tag                        |
| Get Value at Timestamp             | `EIGEN.GETMULTI`      | Returns the interpolated value at one or more specific timestamps |
| Get N Points Evenly Interpolated   | `EIGEN.GETRANGE`      | Returns a fixed number of evenly-spaced points over a time window |
| Get Points with Fixed Interval     | `EIGEN.GETSTEP`       | Returns points at a regular interval (e.g. every 30 minutes)      |
| Get Raw Points in a Window         | `EIGEN.GETRAW`        | Returns raw recorded points within a time window                  |
| Get Closest Raw Point to Timestamp | `EIGEN.GETCLOSESTRAW` | Finds the nearest recorded point to each provided timestamp       |
| Get Aggregates in a Window         | `EIGEN.GETAGG`        | Returns aggregated statistics (min, max, avg, etc.) over a window |
| Get Aggregates on Intervals        | `EIGEN.GETINTERVALS`  | Returns aggregated statistics per interval within a window        |
| Get Tag Metadata                   | `EIGEN.GETMETA`       | Returns metadata (description, units, stepped flag) for a tag     |
| List all Matching Tags             | `EIGEN.LIST`          | Lists all tags matching a wildcard keyword                        |

---

## Tag Input

The tag input appears once a query type is selected. There are two variants depending on the query.

### Wildcard Search (GETMETA)

A plain text input with live autocomplete. As you type, the field searches the connected historian for matching tag names.

- Autocomplete suggestions appear after **5 characters** have been typed.
- Select a suggestion from the dropdown to populate the field.
- You can also type a full tag name directly without using the dropdown.
- Incomplete tag names can be entered, and any tags that wildcard match the input will be included in the response

### Multi-Tag Chip Picker (all other query types)

A chip-based input that allows building a list of tags to query together.

**Adding tags:**

- Type a tag name and press **Enter** or click the **+** button to add it to the list.
- Autocomplete suggestions appear after 5 characters, just as in the single-tag field.
- Click a suggestion to add it directly.

**Cell range selection:**

- Click the **Excel icon** button (next to the text input) to capture the currently selected cell or range from your spreadsheet.
- The selected range address (e.g. `Sheet1!B2:B5`) is added as a tag reference. When the function runs, the add-in reads the tag names from those cells dynamically.
- A cell range selection replaces any existing text tags — ranges and typed tags cannot be mixed.
- Currently selcted ranges MUST be **one-dimensional** e.g. single column, or single row

**Managing added tags:**

- The chip list can be hidden. Click the **eye icon** to toggle visibility.
- To remove a tag, click the **×** on its chip.

:::tip

> For multi-tag queries, if more than one tag is resolved at runtime, the **Tag** column is automatically included in static/tabular output regardless of the Show Tags setting.

:::

## Timestamp Input (GETMULTI, GETCLOSESTRAW)

Used to specify one or more target timestamps. Each timestamp is stored as a chip and formatted as `YYYY-MM-DD HH:mm:ss`.

### Adding timestamps

**Calendar picker:**

- A date/time picker is shown. Open it by clicking the calendar icon or the input field.
- Select a date and time, then click **Add** or close the picker to confirm.
- You can also type a date directly into the input and press **Enter** to add it.

**Paste mode:**

- Click the **paste icon** to open a text area.
- Paste a newline-separated list of timestamps (any format that can be parsed as a date).
- Valid timestamps are extracted and added as chips automatically.

### Managing timestamps

- Use the eye icon to toggle visibility of the chips list.
- Click a chip to **edit** it (re-opens the calendar picker pre-populated with that timestamp).
- Click the **×** on a chip to remove it.

**Multiple timestamps:** When more than one timestamp is provided, the function returns results for all of them. The output rows correspond to each timestamp.

---

## Date Range (GETRANGE, GETSTEP, GETRAW, GETAGG, GETINTERVALS)

A start time and end time picker define the query window.

- Click the **calendar icon** to open a date/time picker with 15-minute time intervals.
- Alternatively, type a date directly into the text field. The field accepts any string parseable as a date (e.g. `2024-01-01 08:00:00`), confirmed on **blur** (click away) or **Enter** press.
- The start time **must** be earlier than the end time — a validation error will prevent the query from running otherwise.

---

## Time Window (GETSTEP, GETINTERVALS)

Defines the interval between data points. Accepts shorthand duration strings.

<div align="center">

| Example | Meaning    |
| ------- | ---------- |
| `30m`   | 30 minutes |
| `1h`    | 1 hour     |
| `6h`    | 6 hours    |
| `3d`    | 3 days     |
| `2w`    | 2 weeks    |
| `1y`    | 1 year     |

</div>
The interval is applied across the full date range, generating one result per interval period.

---

## Max Points / Count (GETRANGE, GETRAW, GETMETA)

A numeric input that limits the number of results returned per tag.

- Minimum: **1**
- Maximum: **10,000**
- For **GETRANGE**: sets the number of evenly-spaced interpolated points returned.
- For **GETRAW**: caps the number of raw recorded points returned per tag.
- For **GETMETA**: caps the number of tags returned.

Values are clamped to the allowed range on blur.

---

## Raw Method (GETCLOSESTRAW)

A dropdown that controls how the closest raw point is selected relative to each provided timestamp.

| Option             | Behaviour                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------- |
| Point Before or At | Latest raw point at or before the timestamp                                                                 |
| Point After or At  | Earliestraw point at or after the timestamp                                                                 |
| Point Before       | Latest raw point strictly before the timestamp                                                              |
| Point After        | Earliest raw point strictly after the timestamp                                                             |
| Adjacent Points    | The interpolated point at the given timestamp, as well as both the raw point before and the raw point after |

:::tip

> As the **Adjacent Points** method returns three rows per timestamp. It is not compatible with the **Tabular Format** or **Values Only** Advanced Options.

:::

## Aggregate Function (GETAGG, GETINTERVALS)

A dropdown for selecting which aggregate statistics to return.

<div align="center">

| Option             | Returns                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| All aggregates     | min, max, avg, var, numGood, numBad, count, stdDev, median, first, last |
| Minimum            | min only                                                                |
| Maximum            | max only                                                                |
| Average            | avg only                                                                |
| Standard deviation | stdDev only                                                             |
| Variance           | var only                                                                |
| Points count       | count only                                                              |
| Good points count  | numGood only                                                            |
| Bad points count   | numBad only                                                             |
| Median             | median only                                                             |
| First value        | first only                                                              |
| Last value         | last only                                                               |

</div>

## Wildcard Keywords (LIST only)

An optional free-text field for filtering the tag list. Supports wildcard characters.

- Leave blank to list all available tags.
- Type a partial tag name to match tags that contain that string.
- A **Print results horizontally** checkbox is also available for LIST — when checked, results are written across a row instead of down a column.

---

## Advanced Options

The **Advanced Options** section is collapsible and appears for all query types except LIST. It controls the output format written to the worksheet.

| Option                    | Default | Applies to                                              | Description                                                                    |
| ------------------------- | ------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Show Headers              | On      | All                                                     | Writes column header labels above the data                                     |
| Show Tags                 | Off     | All                                                     | Includes the tag name in each row                                              |
| Use Tabular Format        | Off     | GET, GETMULTI, GETCLOSESTRAW, GETRANGE, GETSTEP, GETRAW | Pivots multi-tag output into a table with one column per tag                   |
| Return Values Only        | Off     | GET, GETMULTI, GETCLOSESTRAW                            | Returns only the value cell(s), without timestamps or tag columns              |
| Show Reference Timestamps | Off     | GETCLOSESTRAW                                           | Adds a column showing the originally requested timestamp alongside each result |

**Interactions:**

- **Tabular Format** forces Show Headers and Show Tags on, and disables Values Only.
- **Values Only** disables Show Headers, Show Tags, and Tabular Format.
- **Adjacent Points** method (GETCLOSESTRAW) disables Tabular Format, Values Only, and Show Reference Timestamps.

See [advanced-options](../advanced-options) for full details and output examples.

---

## Output Options

These options appear at the bottom of the pane, below the Advanced Options section.

### Dynamic Data

**When checked (default):** The function formula is written into the cell(s) and recalculates automatically when Excel recalculates (e.g. on `Ctrl+Alt+F9`). The cell will show the live result of the EIGEN function.

Whenever the cell recalculates, the request will be reprocessed, and data may change. If addin is uninstalled, then on refresh data will no longer be available

**When unchecked:**, the add-in makes the API call immediately and writes the raw data values into the sheet as static values with no formula.

This means the data will remain available in the workbook regardless of internet connection and addin installation, but will not refresh with newer values automatically

### Start data insert at selected cell

When checked (default), results are written starting at whichever cell is currently selected in Excel. If unchecked, results are written starting at cell A1 of the active worksheet.

---

## Running the Query

Once all inputs are valid, the **Write result to worksheet** button becomes active. Click it to execute. A spinner replaces the button icon while the operation is in progress.

If any required input is missing or invalid, a red error message is shown above the button describing what needs to be fixed.

For "Use Dynamic Data" Certain Errors such as invalid tags or historians will lead to a descriptive error message being printed in the cell with the function

---

Need help? Contact support at [support.eigen.co](https://support.eigen.co).
