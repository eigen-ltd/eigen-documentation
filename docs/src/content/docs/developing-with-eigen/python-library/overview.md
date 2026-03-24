---
title: Intro to the Python SDK
description: An overview of the Ingenuity Python Library Functionality
sidebar:
  order: -2
---

The Python Library refers to **Python Eigen Ingenuity**, a published Python package that can be used to automate both reading and writing of data from many sources (historian, asset model, SQL and more) via our Ingenuity APIs.

It is built for compatibility with **Python 3.12** onwards.

## Purpose

Python Eigen Ingenuity enables users to query, retrieve, and analyze time-series data from industrial historians within Python for quick integration with analysis and ML projects, streamlining data access, accelerating analysis workflows, and making data-driven decisions faster.

## How to install it

The library can be downloaded direct from [PYPI](https://pypi.org/project/python-eigen-ingenuity/), but we recommend installing with `pip install python-eigen-ingenuity`.

## Key Capabilities

### Historian Data

- **Current Values** — Fetch the latest tag values instantly
- **Historical Data** — Query raw or interpolated data across any time range
- **Multiple Timestamps** — Retrieve values at specific points in time
- **Aggregations** — Compute statistics (min, max, avg, stdDev, median, etc.)

### Browse the Asset Model

- **Get all timeseries for an Asset** - Quickly retrieve every timeseries configured for an asset
- **Browse Asset Properties** - Get metadata field from an asset
- **Query Related Assets** - Get all instruments related to an asset

### Fetch an write Events

- **Query Events** — View existing events, with powerful filtering options
- **Create Events** - Create and push events to the Ingenuity, can be visualised in any dashboard
- **Delete Events** — Remove unwanted/incorrect events in bulk

## Available Modules

All modules are available from the `eigeningenuity` package. Each module communicates with a different ingenuity API

They can be imported from core e.g. `from eigeningenuity import get_historian_multi`

<div align="center">

| API                        | Function              | Purpose                                                                                             |
| -------------------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| `Historian Multi`          | get_historian_multi() | Work with timeseries data from multiple historians in one call                                      |
| `Assetmodel`               | get_assetmodel()      | Connect Directly to the Neo4J model service                                                         |
| `SQL`                      | get_sql()             | Query SQL-backed data sources                                                                       |
| `Eventlog`                 | get_eventlog()        | Access the event log service                                                                        |
| `Common Menu`              | get_common_menu()     | Query relations, measurments and properties of Assets                                               |
| `Elastic` `[DEPRECATED]`   | get_elastic()         | Query Elastic-backed data source, included as legacy. Use Eventlog Instead                          |
| `Historian` `[DEPRECATED]` | get_historian()       | Create a historian client for a single data source, included as legacy. Use Historian Multi Instead |

</div>

## Getting Started

### Install

```bash
pip install python-eigen-ingenuity
```

We support Azure Authentication with user credentials, or by CLIENT_SECRET. This is detailed in the [Authenication Section](../authentication)

## Embedded Libraries

These are the runtime dependencies imported by the library:

- numpy
- pandas
- pyserial
- setuptools
- urllib3
- msal
- cryptography
- keyring
- pyarrow
- neo4j (>=5.17.0)
- requests (>=2.31.0)
- dateparser
- importlib-metadata (Python < 3.8 only)

## Support

Questions, issues, or feature requests? Reach out to our support team:

Support Portal: https://eigen.freshdesk.com
