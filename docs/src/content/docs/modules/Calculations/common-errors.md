---
title: Common Errors
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 6

---

# 5 Common errors and how to avoid them.

The following chapter contains recommendations for improving the
performance of calculations and avoiding errors.

## 5.1 Point limit error.

Trending a calculation over a large time period can result in a point
limit error such as:

:::danger[Error]
This SLIDINGAGG request needs to retrieve 52,560 points, but limit is
30000. Try reducing requested range or increasing sliding window size.
Reason is that to keep results precise, SLIDINGAGG retrieves at least 3
points for each window that fit in requested range.
:::

This is a consequence of how SLIDINGAGG works when retrieving
interpolated points. To calculate number of points requested, the whole
range is divided by window size and then multiplied by 3, to have at
least 3 points in each window to calculate window aggregate. In the case
of a trend over 2 years with a window size of 1 hour (i.e. hourly
averages) the request is 365\*2\*24\*3 = 52,560.

#

*For more information, please contact us at <info@eigen.co> or book a
demo on our website at [www.eigen.co](http://www.eigen.co)*