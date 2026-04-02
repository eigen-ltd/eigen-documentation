---
title: Appendix
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 9

---


# Appendix I – Example Data Source Templates

## Typescript definition for a data source

This is the Typescript definition for a data source in Ingenuity 7.

```ts
{
  url: string;
headers?: Record<string, string>;
type: 'POST' | 'GET' | 'POST_FORM';
transform?:
  | 'transformHistorianMultiValueInputs'
  | 'transformHistorianMultiChartInputs';
inputs: {
  name: string;
  isChartStart?: boolean;
  isChartEnd?: boolean;
  label?: string;
  description?: string;
  multi?: boolean;
  default?: string;
  type: 'body' | 'url' | 'get' | 'header' | 'json';
  isRequired?: boolean;
  isAdvanced?: boolean;
  isHidden?: boolean;
  isCode?: 'sql';
  isConfigurable?: boolean;
  parameterName?: string;
  format?: {
    type: string;
    pattern: string;
    timeZone?: string;
  };
  transform?: 'transformSmartdashInput';
  showTagEdit?: boolean;
  showBasket?: boolean;
  showStaleAfter?: boolean;
}[];
output: {
  paths: {
    name: string;
    label?: string;
    description?: string;
    path: string;
    format?: {
      type: string;
      pattern: string;
    };
  }[];
  transform?:
  | 'transformSmartdash'
  | 'transformHistorianServlet'
  | 'transformHistorianServletSingle'
  | 'transformHistorianMultiValue'
  | 'transformHistorianMultiChart';
};
errorPath?: {
  label?: string;
  message: string;
};
format?: {
  type: 'json' | 'csv';
  options: Record<string, unknown>;
};
batchSize?: number;
concurrentSize?: number;
compatibleWith?: AllWidgetKinds[];
useProxy?: boolean;
isUnique?: boolean;
isTrendable?: boolean;
isWriteable?: boolean;
trendWith?: string;
writeWith?: string;
function?:
  | 'staticChart'
  | ((
    args: any,
    ) =Promise<Record<string, unknown>
  | Record<string, unknown>[]>);
  };
};
```

## Open API with no inputs -- value and multivalue

This data source queries the UK carbon intensity API (an open API) and
returns the current carbon intensity value of each type (biomass, coal,
imports, gas, nuclear, other, hydro, solar & wind).

```json
{
  "url": "https://api.carbonintensity.org.uk/generation",
  "type": "GET",
  "inputs": [],
  "output": {
    "paths": [
      {
        "name": "biomass",
        "path": "$.data.generationmix[?(@.fuel === 'biomass')].perc"
      },
      {
        "name": "coal",
        "path": "$.data.generationmix[?(@.fuel === 'coal')].perc"
      },
      {
        "name": "imports",
        "path": "$.data.generationmix[?(@.fuel === 'imports')].perc"
      },
      {
        "name": "gas",
        "path": "$.data.generationmix[?(@.fuel === 'gas')].perc"
      },
      {
        "name": "nuclear",
        "path": "$.data.generationmix[?(@.fuel === 'nuclear')].perc"
      },
      {
        "name": "other",
        "path": "$.data.generationmix[?(@.fuel === 'other')].perc"
      },
      {
        "name": "hydro",
        "path": "$.data.generationmix[?(@.fuel === 'hydro')].perc"
      },
      {
        "name": "solar",
        "path": "$.data.generationmix[?(@.fuel === 'solar')].perc"
      },
      {
        "name": "wind",
        "path": "$.data.generationmix[?(@.fuel === 'wind')].perc"
      }
    ]
  },
  "useProxy": false,
  "compatibleWith": [
    "value",
    "multivalue"
  ]
}
```

The "path" parameter in each output contains a json path query because
the returned data contains a list that could be in any order as shown
below

```json
{
  "data": {
    "from": "2024-12-10T09:00Z",
    "to": "2024-12-10T09:30Z",
    "generationmix": [
      {
        "fuel": "biomass",
        "perc": 6
      },
      {
        "fuel": "coal",
        "perc": 0
      },
      {
        "fuel": "imports",
        "perc": 5
      },
      {
        "fuel": "gas",
        "perc": 55.1
      },
      {
        "fuel": "nuclear",
        "perc": 8.1
      },
      {
        "fuel": "other",
        "perc": 0
      },
      {
        "fuel": "hydro",
        "perc": 1.3
      },
      {
        "fuel": "solar",
        "perc": 0.6
      },
      {
        "fuel": "wind",
        "perc": 23.9
      }
    ]
  }
}
```

## Timeseries historian data source -- Historian Multi

This data source connects to the Eigen Ingenuity Historian servlet and
makes all available historians accessible from the UI. It only needs to
be configured once.

```json
{
  "url": "https://ingenuity.eigen.co/historian-servlet/multi",
  "type": "POST",
  "inputs": [
    {
      "name": "tag",
      "type": "body",
      "label": "Tag",
      "multi": true,
      "encode": true,
      "isRequired": true,
      "showBasket": true,
      "showTagEdit": true,
      "showStaleAfter": true
    }
  ],
  "output": {
    "paths": [
      {
        "name": "value"
      },
      {
        "name": "timestamp"
      }
    ],
    "transform": "transformHistorianMultiValue"
  },
  "useProxy": true,
  "batchSize": 100,
  "transform": "transformHistorianMultiValueInputs",
  "trendWith": "historian-multi-chart",
  "isTrendable": true,
  "isWriteable": true,
  "compatibleWith": [
    "value",
    "multivalue"
  ]
}
```

## Importing a CSV data source from an API

This data source accesses an API that returns a comma separated values
(csv) dataset.

```json
{
  "url": "http://192.168.1.1/AjaxServer/GetDataResult.aspx",
  "type": "GET",
  "format": {
    "type": "csv",
    "options": {
      "delimiter": ";"
    }
  },
  "inputs": [
    {
      "name": "format",
      "type": "get",
      "default": "csv"
    },
    {
      "name": "sigids",
      "type": "get",
      "default":
        "AMX-PC-DAY-AMX-OIWD,AMX-PI-DAY-AMX-OIWAPR,AMX-PI-DAY-AMX-OIWEPC,AMX-PB-DAY-AMX-BSW,AMX-PI-DAY-AMX-OIDRAIN,AMX-WC-DAY-AMX-WATEP-M3,AMX-WC-DAY-AMX-WATPR-M3,AMX-WC-DAY-AMX-WATD-M3"
    },
    {
      "name": "headers",
      "type": "get",
      "default": "STOP_TIME"
    },
    {
      "name": "infolevel",
      "type": "get",
      "default": "DAY"
    },
    {
      "name": "timelevel",
      "type": "get",
      "default": "WEEK"
    },
    {
      "name": "stoptime",
      "type": "get",
      "default": "now"
    },
    {
      "name": "nounits",
      "type": "get",
      "default": "1"
    }
  ],
  "output": {
    "paths": [
      {
        "name": "x",
        "path": "*.STOP_TIME",
        "format": {
          "type": "date",
          "pattern": "dd'.'MM'.'yyyy"
        }
      },
      {
        "name": "AMX-PC-DAY-AMX-OIWD",
        "path": "*.AMX-PC-DAY-AMX-OIWD"
      },
      {
        "name": "AMX-PI-DAY-AMX-OIWAPR",
        "path": "*.AMX-PI-DAY-AMX-OIWAPR"
      },
      {
        "name": "AMX-PI-DAY-AMX-OIWEPC",
        "path": "*.AMX-PI-DAY-AMX-OIWEPC"
      },
      {
        "name": "AMX-PB-DAY-AMX-BSW",
        "path": "*.AMX-PB-DAY-AMX-BSW"
      },
      {
        "name": "AMX-PI-DAY-AMX-OIDRAIN",
        "path": "*.AMX-PI-DAY-AMX-OIDRAIN"
      },
      {
        "name": "AMX-WC-DAY-AMX-WATPR-M3",
        "path": "*.AMX-WC-DAY-AMX-WATPR-M3"
      },
      {
        "name": "AMX-WC-DAY-AMX-WATEP-M3",
        "path": "*.AMX-WC-DAY-AMX-WATEP-M3"
      },
      {
        "name": "AMX-WC-DAY-AMX-WATD-M3",
        "path": "*.AMX-WC-DAY-AMX-WATD-M3"
      }
    ]
  },
  "useProxy": true,
  "compatibleWith": [
    "chart"
  ]
}
```

## Example Timeseries historian data source -- Blockchain.info API

This data source retrieves data from the Blockchain.info API based on
the specified chart type and timespan. It returns timestamps and
corresponding values for visualization in chart and table formats..

```json
{
  "url": "https://api.blockchain.info/charts/{{type}}",
  "type": "GET",
  "inputs": [
    {
      "name": "cors",
      "default": "true",
      "isHidden": true,
      "description": "Handles Cross-Origin Resource Sharing (CORS)
      requests. This field is hidden and set to true."
    },
    {
      "name": "format",
      "default": "json",
      "isHidden": true,
      "description": "Specifies the format for the response data. This
      field is hidden and set to 'json'."
    },
    {
      "name": "type",
      "type": "url",
      "label": "Chart type",
      "default": "market-price",
      "isRequired": true,
      "description": "Specifies the type of chart to be retrieved, such
      as 'market-price'."
    },
    {
      "name": "timespan",
      "type": "get",
      "label": "Timespan",
      "default": "4weeks",
      "isRequired": true,
      "description": "Defines the timespan for the data to be retrieved,
      such as '4weeks'."
    },
    {
      "name": "start",
      "type": "get",
      "format": {
        "type": "date",
        "pattern": "yyyy-MM-dd'T'hh:mm:ss"
      },
      "isAdvanced": true,
      "description": "Specifies the start date and time for the data
      retrieval period.",
      "isChartStart": true
    }
  ],
  "output": {
    "paths": [
      {
        "name": "x",
        "path": "$.values.*.x",
        "format": {
          "type": "date",
          "pattern": "t"
        },
        "description": "Provides the timestamp for each data point in the
        retrieved chart."
      },
      {
        "name": "price",
        "path": "$.values.*.y",
        "description": "Represents the value of the data point, such as the
        price for each timestamp in the chart."
      }
    ]
  },
  "useProxy": false,
  "compatibleWith": [
    "chart",
    "table"
  ]
}
```

#

End of Document

_For more information, please contact us at <info@eigen.coor book a
demo on our website at [www.eigen.co](http://www.eigen.co)_

[^1]:
    See documentation here:
    <https://docs.oracle.com/cd/E60058_01/PDF/8.0.8.x/8.0.8.0.0/PMF_HTML/JsonPath_Expressions.htm>

    And example implementation here
    <https://jsonpath-plus.github.io/JSONPath/demo/>

