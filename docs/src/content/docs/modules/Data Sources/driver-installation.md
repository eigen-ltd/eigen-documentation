---
title: Driver Installation
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 6
---

## 5 Installing an Eigen Ingenuity Driver

Eigen Ingenuity drivers connect to 3<sup>rd</sup> party data sources and provide
a secure web API that can then be configured as a data source. They
manage all technical aspects including authorization and interface
protocols and address any restrictions such as query size limitations,
response size limits (e.g. maximum number of rows) or missing
functionality (for example, aggregates) so that the user experience is
consistent across all data sources.

Setting up an Eigen Ingenuity driver requires two steps:

1.  Driver installation and configuration

2.  Driver registration with the back-end

### 5.1 Driver Installation

Eigen Ingenuity drivers are individually licenced components. The
software will be provided by your Eigen contact, along with installation
instructions, as part of the installation and set-up process.

### 5.2 Driver registration

**Warning**

_The Ingenuity Diagnostics module can make critical system changes that
might render the system inoperable, potentially requiring
reinstallation. For this reason, write permissions for the Ingenuity
Diagnostics module are restricted to organizations with Gold-level or
higher support subscriptions and at least one Eigen-certified system
administrator._

Once the driver is installed it must be registered as an Ingredient in
the Ingenuity Diagnostics module by completing the relevant template.
This will manage the configuration of the driver and register it as a
data source.

The example below is the template for registering a new IP.21 driver
instance.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/datasources/image21.png)