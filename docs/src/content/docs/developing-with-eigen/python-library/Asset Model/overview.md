---
title: The Asset Model Module
description: Overview of the Asset Model module
sidebar:
  order: 0
---

The Asset Model module provides access to the Ingenuity Neo4j-backed asset model API. See the Assetmodel Tab in Ingenuity to browse the Assetmodel by UI instead.

This API queries ONLY the internal Ingenuity model database, and will not return data configured in a third party model (e.g. Cognite)

See also the [Common Menu](/developing-with-eigen/python-library/common-menu/overview), which is a more structured API for browsing similar data, including configured third party models.

## What This Module Does

- Executes raw Cypher queries against the asset model
- Retrieves measurements associated with assets
- Retrieves documents attached to assets

## The Ingenuity Asset Model

In the asset model, `code` is the primary property that contains an objects ID.

Fsor relations between Assets and timeseries, relations to a tag will always be of type `hashistoriantag`, with property `measurementName` denoting measurement and measurement Objects will be of type `MeasurementSource`

e.g. for a Wellbore `A-01`, the relation to its `DHT` guage tag `DEMO_02TI301.PV` would be

<div align="center">
<strong>(Wellbore: {code: "A-01"}) -[hashistoriantag: { measurementName: "DHP" }]-> (MeasurementSource: {code: "Demo-influxdb/DEMO_02TI301.PV"})</strong>
</div>

## Key Entry Point

You **MUST** generate the model client before you can query the Asset Model.

Use `get_assetmodel()` to create a client:

```python
from eigeningenuity import get_assetmodel, EigenServer

ei = EigenServer("https://demo.eigen.co/")
model = get_assetmodel(ei)
```

## Common Operations

### Execute a Cypher Query

```python
results = model.executeRawQuery("MATCH (n) RETURN n LIMIT 10")
```

### Get Measurements for Assets

```python
measurements = model.getMeasurements(["System_01", "System_02"])
```

### Get Documents for Assets

```python
documents = model.getDocuments("System_01")
```

## Cypher Query Language

For more Information on Cypher itself and how to write querires, please see the [Official Cypher Manual](https://neo4j.com/docs/cypher-manual/current/introduction/cypher-overview/)

## Output Formats

Most calls support:

- `json` (default - Remove Api Headers)
- `df` (pandas DataFrame)
- `raw` (full API response)

## Authentication

For secured environments, configure Azure auth before creating the client. See [Authentication](../../authentication).

## Functions

- [get_assetmodel](../get_assetmodel)
- [executeRawQuery](../execute-raw-query)
- [getMeasurements](../get-measurements)
- [getDocuments](../get-documents)
- [getLabels](../get-labels)
- [getMatchingNodes](../get-matching-nodes)
- [getRelatedAssets](../get-related-assets)
