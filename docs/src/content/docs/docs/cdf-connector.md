---
title: 'CDF Connector'
description: 'A guide to the Eigen Ingenuity CDF data connector, its features, and configuration.'
---

# 1 Eigen Ingenuity data connector to Cognite Data Fusion

The Eigen Ingenuity CDF data connector (\"the connector\") integrates
five specialized sub-connectors that interface with CDF APIs to deliver
properly formatted data to Ingenuity\'s UI components. This connector
extends CDF\'s native capabilities by implementing advanced
interpolation methods and overcoming request size limitations.
Authentication to CDF is using Azure. It is at the system level (i.e.
not per user) and must be configured during setup.

![A diagram of a computer AI-generated content may be
incorrect.](~/assets/cdf-connector/image4.png)

## 1.1 Timeseries data -- Charts and KPIs

The Eigen Historian Endpoint provides single values and time-ordered
lists of values required by KPI's and Charts. The list of tag names
comes from the Assets API, which also provides the unique identified
(UID) that must be used to retrieve the associated timeseries data from
the Timeseries API. The connector also supports write back to CDF
Timeseries.

The connector provides the following enhancements over the native CDF
API to be compatible with the Ingenuity UI components:

- Optimized data retrieval via intelligent request batching. (CDF has
  limit of 100 tags per batch, 10.000 aggregated points or 100.000 raw
  points)

- Improved interpolated data by filling empty ranges, adding raw
  boundary points and using current value

- Improved raw point retrieval by option to automatically add
  interpolated points on boundaries

- Improved aggregates retrieval to allow any arbitrary window (not
  aligned to specific time granularity)

## 1.2 Common Menu -- Common Menu and Search

The CommonMenu endpoint provides contextual data to UI components such
as the Common Menu, Search and the Asset Model Browser. The object names
and hierarchy iare retrieved from the Assets API, along with the UIDs
for retrieval of associated documents from the Files API, and events
from the Events API.

The connector provides the following enhancements over the native CDF
API to be compatible with the Ingenuity UI components:

- Document downloads are proxied and unified with other data sources
  (e.g. Neo4j and other storage types)

- The Asset hierarchy nomenclature is adapted to mimic Ingenuity's
  Knowledge Graph API, for example, parent-child tree becomes graph with
  has_parent and has_child

## 1.3 Events -- Tables and Event Track

The Eigen EventLog endpoint provides tabular, time ordered, lists for
use in Tables and Event Track UI components. The connector also supports
write back to CDF Events as follows:

- Create/update/delete events

- Add Annotations to an event

- Add metatdata to an event (e.g. Severity)

- Update related assets

## 1.4 Templates

Templates in CDF are exposed through the Eigen CFDTemplates endpoint and
can be used to provide data to form controls (e.g. for templated
dashboards) or in Scripts (see Product Manual -- Scripts).

## 1.5 Authentication

The connector authenticates to CDF using Microsoft Azure authentication
and requires the following configuration:

```
type=cognite\
baseUrl=[https://api.cognitedata.com](https://api.cognitedata.com/)\
project=XX-XXXX
grantType=client_credentials\
scope=<https://api.cognitedata.com/.default>
tenantId=XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\
clientId=XXXXXXXX-XXXX-XXX-XXXX_XXXXXXXXXXXX\
clientSecret=XXXXXXXXXXXXXXXXXXXXXXXXXXX
```

The {project} is a CDF parameter. The {tenantID}, {ClientID} and
{clientSecret} are supplied by the Azure admin.

The authentication is at the system level and does not pass through user
information. The data set available to the connector is managed from
within CDF. Where user-specific data separation is required, two or more
instances of the Ingenuity Connector should be set up. This allows
access to the data sources to be controlled using permissions withing
Ingenuity.

#

End of Document

_For more information, please contact us at <info@eigen.coor book a
demo on our website at [www.eigen.co](http://www.eigen.co)_
