---
title: Intro to the Excel Addin
sidebar:
  order: -1
---

The Excel Addin refers to **Eigen Ingenuity For Excel**, an Excel add-in that brings industrial historian data directly into your spreadsheets.

## Purpose

Eigen Ingenuity enables engineers, analysts, and plant operators to query, retrieve, and analyze time-series data from industrial historians without leaving Excel. Streamline data access, accelerate analysis workflows, and make data-driven decisions faster.

## Where to Find it

The **Eigen Ingenuity For Excel** Addin can be found on the [Microsoft Marketplace](https://marketplace.microsoft.com/en-gb/search/products?search=Eigen&page=1) (as below).

![Marketplace Search](~/assets/developing-with-eigen/excel-addin/marketplace.png)

If your Organisation restricts access to the Marketplace and you would like access to the addin, you can request your Azure Administrator to allow this particular addin, or reach out to our support team at https://eigen.freshdesk.com to discuss.

## Key Capabilities

### Real-Time Data Access

- **Current Values** — Fetch the latest tag values instantly
- **Historical Data** — Query raw or interpolated data across any time range
- **Multiple Timestamps** — Retrieve values at specific points in time

### Advanced Analysis

- **Raw Data Points** — Access all recorded measurements as stored
- **Interpolated Values** — Get calculated values at any interval
- **Aggregations** — Compute statistics (min, max, avg, stdDev, median, etc.)
- **Time-Windowed Analysis** — Calculate aggregates over sliding intervals

### Data Exploration

- **Tag Search** — Find tags using wildcard patterns
- **Metadata Lookup** — View descriptions, units, and properties
- **Historian Management** — List and manage data sources

### Flexible Output Formatting

- **Tabular Views** — Compare multiple tags side-by-side
- **Custom Columns** — Choose between tag names, timestamps, values
- **Optimized Layout** — Format data for easy pasting and analysis

### Dynamic or Static Data

- **Dynamic Data** - Worksheet functions allow setting up pages that will self update and always pull the latest Data
- **Static Data Writes** - Option to pull data into a static table, so snapshots are preserved, and wont be lost on page refrsh, or loss of connectivity

## Available Functions

All functions are accessed via the `EIGEN.` namespace:

| Function                 | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| `EIGEN.GETCURRENT()`     | Latest value for tag(s)                      |
| `EIGEN.GETMULTI()`       | Interpolated values at specific timestamps   |
| `EIGEN.GETCLOSESTRAW()`  | Nearest raw point using selection method     |
| `EIGEN.GETRANGE()`       | Interpolated data across a time range        |
| `EIGEN.GETSTEP()`        | Evenly-spaced data points using time windows |
| `EIGEN.GETRAW()`         | All recorded points in a time range          |
| `EIGEN.GETAGG()`         | Aggregated statistics (min, max, avg, etc.)  |
| `EIGEN.GETINTERVALS()`   | Aggregates per time interval                 |
| `EIGEN.LIST()`           | Find tags by wildcard pattern                |
| `EIGEN.LISTHISTORIANS()` | Available data sources                       |
| `EIGEN.GETMETA()`        | Tag metadata (description, units)            |
| `EIGEN.GETDATASOURCE()`  | Current default historian                    |

The above is all functions at time of writing, but the full list can be viewed in Excel with the Addin installed by typing (in a cell) `=EIGEN.` and viewing the autocompletion options.

## Getting Started

### Basic Query

```
=EIGEN.GETCURRENT("Demo-influxdb", "DEMO_02TI301.PV")
```

Returns the latest value for a tag.

### Search for Tags

```
=EIGEN.LIST("Demo-influxdb", "DEMO_02TI*")
```

Find all tags matching a pattern.

### Historical Analysis

```
=EIGEN.GETRANGE("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 12:00:00", 100)
```

Retrieve 100 interpolated points over a 12-hour window.

### Aggregated Statistics

```
=EIGEN.GETAGG("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 23:59:59", 1, {"avg","max","min"})
```

Get average, maximum, and minimum values over a day.

## Advanced Options

Customize output using optional parameters:

- **`headers`** — Include column headers in results
- **`showTag`** — Display tag names in output
- **`tabular`** — Render in side-by-side comparison format
- **`valueOnly`** — Return only values (no timestamps or tags)

See [Advanced Options](/developing-with-eigen/excel-addin/advanced-options) for detailed examples and output samples.

## Documentation

- **Function Reference** — Detailed docs for each function with examples

  - [getCurrent](/developing-with-eigen/excel-addin/worksheet-functions/getcurrent)
  - [getMulti](/developing-with-eigen/excel-addin/worksheet-functions/getmulti)
  - [getClosestRaw](/developing-with-eigen/excel-addin/worksheet-functions/getclosestraw)
  - [getRange](/developing-with-eigen/excel-addin/worksheet-functions/getrange)
  - [getStep](/developing-with-eigen/excel-addin/worksheet-functions/getstep)
  - [getRaw](/developing-with-eigen/excel-addin/worksheet-functions/getraw)
  - [getAgg](/developing-with-eigen/excel-addin/worksheet-functions/getagg)
  - [getIntervals](/developing-with-eigen/excel-addin/worksheet-functions/getintervals)
  - [list](/developing-with-eigen/excel-addin/worksheet-functions/list)
  - [listHistorians](/developing-with-eigen/excel-addin/worksheet-functions/listhistorians)
  - [getMeta](/developing-with-eigen/excel-addin/worksheet-functions/getmeta)
  - [getDataSource](/developing-with-eigen/excel-addin/worksheet-functions/getdatasource)

- **[Advanced Options](/developing-with-eigen/excel-addin/advanced-options)** — Flag combinations and output formatting

## Common Use Cases

### Track Equipment Performance Over Time

```
=EIGEN.GETSTEP("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 23:59:59", "1h")
```

Get hourly temperature readings to monitor trends.

### Compare Multiple Measurements at One Point in Time

```
=EIGEN.GETMULTI("Demo-influxdb", {"DEMO_02TI301.PV","DEMO_02TI201.PV"}, {"01/01/2024 10:00:00"}, true, true, true)
```

View multiple tag values side-by-side at a specific moment.

### Find Anomalies with Aggregates

```
=EIGEN.GETINTERVALS("Demo-influxdb", "DEMO_02TI301.PV", "01/01/2024 00:00:00", "01/01/2024 23:59:59", "1h", {"min","max","avg"})
```

Compute hourly min/max/avg to identify unusual spikes or drops.

### Build Dynamic Tag Discovery Workflows

```
=EIGEN.LIST("Demo-influxdb", "*Pump*")
```

Automatically list all pump-related tags for batch operations.

## Support

Questions, issues, or feature requests? Reach out to our support team:

📧 **Support Portal:** https://eigen.freshdesk.com

We're here to help you get the most from Eigen Ingenuity!
