---
title: Model Driven Dashboards
description: x
sidebar:
    order: 6
---

# 5 Model Driven Dashboards

Model Driven Dashboards take their configuration from objects (Assets)
in the Knowledge Graph. This allows you to make a single dashboard that
covers multiple objects of the same type, for example Wells, equipment,
rooms in a building etc. An object control is added to the page and this
acts as a data source for other components on the page.

## 5.1 Adding a model driven control

To add a model driven data source to a page, select the "Assets" tab in
the component panel on the left.

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image98.png)

Select an object template from the drop-down menu -- the dropdown lists
all the available object types in the Knowledge Graph. If the list is
very long you can start typing the first few characters of the object
type you are looking for.

When a valid object has been selected, an icon appears below the
dropdown. Drag this icon to the dashboard layout. This will create a
drop-down control with a list of all the objects of that type in the
Knowledge Graph. Resize it if necessary and place in the preferred
location on the dashboard.

![A screenshot of a web page AI-generated content may be
incorrect.](~/assets/dashboards/image99.png)

## 5.2 Using attributes from objects as component values

### 5.2.1 Dragging a component directly

Under "Existing templates:", open the template you added previously.
This will open the related tags to this template in the asset. For
example, the example Well has a tag for annulus pressure, bhp, bht, etc.

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image100.png)

Under each tag you will find different button for the common components
used with tags.

![A white text box with black text AI-generated content may be
incorrect.](~/assets/dashboards/image101.png)

To add them in your dashboard, drag and drop them into the dashboard or
to the chart in the dashboard.

When you have added some of these widgets into the menu, save your
changes and change the selector you initially dragged into the page. The
widgets added from the Assets menu will change to display the respective
tag for the item you have selected.

In this example, when selecting "Well_A", the annulus pressure of this
well will be displayed in the chart along with the numeric value and the
name of the tag. When changing the selector to "Well_B" while on
non-edit mode, all these widgets will change to display the same
information but from Well B.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image102.png)

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image103.png)

### 5.2.2 Using the Asset datasource in the component configuration

Any component can be configured to use the Asset Control data source
using the "Assets" icon ![](~/assets/dashboards/image104.png) above the Tag field. When you click the
Assets cube it will show a list of the available Asset data sources on
the page.

![A blue box with white text AI-generated content may be
incorrect.](~/assets/dashboards/image105.png)

When one is selected, the property or associated timeseries parameter
can be chosen from the dropdown underneath.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image106.png)

### 5.2.3 Using an attribute in a calculation

Related timeseries tags on numbers from an object can be used in a
calculation by completing the "Use in string" option and entering
"\<\<\>\>" in place of the tagname

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image107.png)

For example, in this case, to convert the 6 minute pulse count on the
cold water to liters and totalize the value over the day, you would use
the formula:

calc/DIV(TOTALISERAW(\<\<\>\>, DAY, BEGIN_DAY, 6m),11)

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image108.png)

:::tip

_It is not possible to use the Calculation Builder from the "Use in
string" option so it is best to make the calculation separately first
and copy it, then replace the tag with "\<\<\>\>"._
:::

## 5.3 Advanced options

### 5.3.1 Updating the URL

By storing the state of the Asset Controls in the URL, it is possible to
make links to a certain state of the dashboard. For example, if you want
to make a link from a drawing of "Well B" to the model driven dashboard
with 'Well_B" already selected, or if you would like to create a
bookmark of the page with a certain object selected.

To update the URL with the currently selected state of the Asset
Controls on the page, toggle the "Update URL" switch under the Asset
Options section of the configuration:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image109.png)

:::note
if there is more than one Asset Control on the page, this must be
done for each Asset Control that you would like to update the URL.
:::

### 5.3.2 Using other properties and relationships in the Knowledge Graph

By default, the Asset Control object will look for the standard
properties and relationship parameters in the Eigen Knowledge graph. If
you would like to use different properties, or relationship parameters,
this can be configured under the Advanced section. For example, when the
Knowledge Graph being used is not and Eigen one.

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image110.png)