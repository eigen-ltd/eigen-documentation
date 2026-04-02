---
title: Calculations Summary
description: A short overview of the different calculations within the Ingenuity calculations module
sidebar:
    order: 2

---

# 2 Calculation Details

## 2.1 Calculations summary

The table below is a quick reference for all the calculations. **All
calculations must be preceded by "calc/", for example calc/ADD(a,b)**.
This prefix will be added automatically by the UI but should be
remembered if typing a calculation manually. The placeholders a, b etc.
can be a constant value or another timeseries source, or another
calculation.

**Basic Maths:**

| Category | Name | Syntax | Notes |
|----------|------|--------|-------|
| Basic Maths | Add | `ADD(a, b,..., n)` | |
| Basic Maths | Subtract | `SUB(a, b,..., n)` | Evaluated right to left (n - ... b - a) |
| Basic Maths | Multiply | `MUL(a, b,..., n)` | |
| Basic Maths | Divide | `DIV(a, b,..., n)` | Evaluated right to left (n / ... b / a) |
| Basic Maths | Percent Deviation | `PERCENTDEV(a, b)` | Evaluated as 100*(a-b)/b |
| Totalisers | Totalise | `TOTALISE(a, window, starttime, rate)` | See section 2.7 |
| Totalisers | Totalise Raw | `TOTALISERAW(a, window, starttime, rate)` | See section 2.7.3 |
| Function | Exponential | `EXP(input)` | See section 2.8.1 |
| Function | Natural Log | `LN(input)` | See section 2.8.2 |
| Function | Square Root | `SQRT(input)` | See section 2.8.3 |
| Function | Log | `LOG(input, b)` | See section 2.8.4 |
| Function | Power | `POWER(input, b)` | See section 2.8.5 |
| Sliding Aggregates | Average | `SLIDINGAGG(input, AVG, window)` | See section 2.9.1 |
| Sliding Aggregates | Count | `SLIDINGAGG(input, COUNT, window)` | See section 2.9.2 |
| Sliding Aggregates | Number of Bad Points | `SLIDINGAGG(input, NUMBAD, window)` | See section 2.9.3 |
| Sliding Aggregates | Number of Good Points | `SLIDINGAGG(input, NUMGOOD, window)` | See section 2.9.4 |
| Sliding Aggregates | Standard Deviation | `SLIDINGAGG(input, STDDEV, window)` | See section 2.9.5 |
| Sliding Aggregates | Variance | `SLIDINGAGG(input, VAR, window)` | See section 2.9.6 |
| Sliding Aggregates | Minimum | `SLIDINGAGG(input, MIN, window)` | See section 2.9.7 |
| Sliding Aggregates | Maximum | `SLIDINGAGG(input, MAX, window)` | See section 2.9.8 |
| Sliding Aggregates | Sum | `SLIDINGAGG(input, SUM, window)` | See section 2.9.9 |
| Sliding Aggregates | DIFF | `SLIDINGAGG(input, DIFF, window)` | See section 2.9.10 |
| Windowed Aggregates | Same functions as SLIDINGAGG | `WINDOWAGG(input, function, window)` | See section 2.10 |
| Statistics | Maximum | `MAX(a, b,.., n)` | See section 2.11.1 |
| Statistics | Minimum | `MIN(a, b,.., n)` | See section 2.11.2 |
| Statistics | Mean | `MEAN(a, b,.., n)` | See section 2.11.3 |
| Statistics | Median | `MEDIAN(a, b,.., n)` | See section 2.11.4 |
| Statistics | Standard Deviation | `STDDEV(a, b,.., n)` | See section 2.11.5 |
| Statistics | Variance | `VAR(a, b,.., n)` | See section 2.11.6 |
| Logical | If Tag Exists | `IFTAGEXISTS(a, ifFalse)` | See section 2.12.1 |
| Logical | If Equals | `IFEQUALS(a, b, ifTrue, ifFalse, <precision>)` | See section 2.12.2 |
| Logical | Threshold | `THRESHOLD(a, b, ifaboveorequal, ifbelow)` | See section 2.12.3 |
| Series Conditioning | Stepped | `STEPPED(tag)` | See section 2.13.1 |
| Series Conditioning | Stepped Raw | `STEPPEDRAW(tag)` | See section 2.13.2 |
| Series Conditioning | No BAD | `NOBAD(tag)` | See section 2.13.3 |
| Series Conditioning | Timeshift | `TIMESHIFT(a, offset)` | See section 2.13.4 |
| Series Conditioning | Highpass | `HIGHPASS(a, time-constant)` | See section 2.13.5 |
| Series Conditioning | Lowpass | `LOWPASS(a, time-constant)` | See section 2.13.6 |
| Date | Epoch Milliseconds | `EPOCH_MS(tag)` | See section 2.15.1 |
| Other | Point in Time | `POINTINTIME(a, timereference)` | See section 2.16.1 |
| Other | Current Epoch Milliseconds | `dates/CURRENT_EPOCH_MS` | Return wall clock time in epoch ms |
| Dates | Day | `dates/DAY` | Return number of day in month. Points returned at midnight of configured timezone |
| Dates | Day UTC | `dates/DAY_UTC` | Return number of day in month. Points returned at midnight UTC |
| Dates | Day of Week | `dates/DAY_OF_WEEK` | Return number of day in week. Monday is 1, Sunday is 7. Points returned at midnight of configured timezone |
| Dates | Day of Week UTC | `dates/DAY_OF_WEEK_UTC` | Return number of day in week. Monday is 1, Sunday is 7. Points returned at midnight UTC |
| Dates | Day of Month | `dates/DAY_OF_MONTH` | Return number of day in month. Points returned at midnight of configured timezone |
| Dates | Day of Month UTC | `dates/DAY_OF_MONTH_UTC` | Return number of day in month. Points returned at midnight UTC |
| Dates | Days in Month | `dates/DAYS_IN_MONTH` | Return number of days in month |
| Dates | Day of Year | `dates/DAY_OF_YEAR` | Return number of day in year. Points returned at midnight of configured timezone |
| Dates | Day of Year UTC | `dates/DAY_OF_YEAR_UTC` | Return number of day in year. Points returned at midnight UTC |
| Dates | Is Today | `dates/IS_TODAY` | Return 1 if given timestamp is today |
| Dates | Is Before Today | `dates/IS_BEFORE_TODAY` | Return 1 if given timestamp is before midnight of today |
| Dates | Month | `dates/MONTH` | Returns number of month in local timezone. January is 1 |
| Dates | Month UTC | `dates/MONTH_UTC` | Return number of month. Points returned at midnight UTC. January is 1 |
| Dates | Year | `dates/YEAR` | Return number of year. Points returned at midnight of configured timezone |
| Dates | Year UTC | `dates/YEAR_UTC` | Return number of year. Points returned at midnight UTC |

## 2.2 Valid timeseries inputs

All calculation functions accept a constant value or any valid
timeseries source as an input.

A valid timeseries source in Eigen Ingenuity is anything of the form

```
historian/id
```

#### *For example:*

||||
|---|---|---|
| enterprise historian: | `ip21/21PI1234.val`
| an open source historian: | `influx/kitchen_temp`
| a calculation: | `calc/ADD(15,24,35)`
| signal generator outputs: | `siggen/rand10\~5@3600000`
| constant values: | `value/10`

Constant values are a special case in that there is no need to prefix
them with "value/" as the system will do that automatically.

## 2.3 Valid Time Units

Many of the calculation functions accept units of time input. The
following are valid in all cases:

> s: seconds
>
> m: minutes
>
> h: hours
>
> d: days
>
> w: week
>
> mo: months
>
> y: year

#### *For example:*

|  |  |
|-----------:|:------------|
| 1 second: | `1s` |
| 1 minute: | `1m or 60s` |
| 7 days: | `7d or 1w` |
| 1 calendar month: | `1mo` |
| 6 hours: | `6h` |

## 2.4 Relative Time Expressions

Where a calculation is stated as accepting Relative Time Expressions, both offsets and timestamps can be specified. For example:

| Supported Expressions |
|-----------------------|
| `in 2 days` |
| `5 days ago` |
| `2 days and 5 seconds` |
| `in 2 days at the same time` |
| `2 days and 5 minutes ago` |
| `last moment of yesterday` |
| `in 3 days at midnight` |
| `now` |

:::note
Forward looking expressions are only relevant if there is data in the future!
:::

The following are **not** supported:

| Unsupported | Example |
|-------------|---------|
| Day names | "last moment of last Sunday" |
| Vague time expressions | "yesterday at lunchtime" |
| Partial day references | "morning" |
| Holiday names | "Christmas day" |

## 2.5 RAW vs INTERPOLATED points

In the following descriptions, reference is often made to Raw and
Interpolated points.

**Raw** points are real data points that have been stored in the
underlying data historian.

**Interpolated** points are virtual data points calculated from the raw
points.

By default Interpolated points are used in charts and KPIs but the user
can change this to Raw points. The reason for this is that the User
Interface has no awareness of the number of raw points in a tag before
it queries it. If the tag has very high frequency data (for example one
point per second) then the returned dataset will be very large and could
take a long time to load, or worse, crash the users browser. Conversely,
if the underlying tag is very sparse, for example a safety valve
position which only moves occasionally, there may be no data within the
window requested.

To overcome this issue, Ingenuity 7 will default to 1000<sup>1</sup>
interpolated points on a trend (this can be changed in the trend
configuration) to ensure that a trend will always load and then the user
can decide to switch to raw points.

