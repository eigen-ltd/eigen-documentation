---
title: Variables
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 7
---

# 6 Variables

Variables are page (dashboard) wide parameters that allow you to pass
information between components and create dynamic dashboards that update
based on user input and selections.

## 6.1 Setting up variables

Variables are set up at the page level by clicking on the
"(x) Variables" button in the right hand pane, which is visible when the
grid is selected (by clicking on any empty area in the grid).

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image111.png)

This will bring up the Grid Variables form:

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image112.png)

Clicking "Add variable" adds an empty variable configuration. The Name
and Type fields are always present and the fields thereafter depend on
the selection made in the Type field:

**Name**: Text input for the name of the variable. Must start with a
dollar sign (\$) and contain only letters and numbers. No spaces or
special characters.

**Type**: dropdown to select where the value of the variable comes from.
It has the following options:

> **Select**: type a comma separated list of possible values directly in
> the variable configuration.
>
> **String**: a text string entered into the variable configuration.
>
> **Select from Datasource output**: The list of possible values comes
> from an Ingenuity data source.
>
> **Value from Datasource output**: A boolean indicating if multiple
> values can be selected for this input.
>
> **Date**: A boolean indicating if multiple values can be selected for
> this input.

**Update URL**: Enable this to update the URL with the selected value of
the variable to create a link to the state of the page that can be
shared.

### 6.1.1 Select Type variables

The Select type variable lets a user select from a pre-defined list of
options. These are typed as a comma-separated list in the "Possible
values" field. For example,

Aa, Bb, Cc

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image113.png)

To show a more user friendly name to the user, labels can be defined in
square brackets before each variable:

```
\[Label 1\]Aa,\[Label 2\]Bb
```

For example, a list of possible airports with their codes would be
defined as:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image114.png)

The user will see:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image115.png)

Use "Default value" field to define the value that will be selected the
first time the page loads (and if there is no value passed in the URL).

### 6.1.2 String Type

The String type variable takes text input from a "Control" component and
stores in in a page variable.

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image116.png)

This is useful where the user is required to input text that is passed
to an external data source, that cannot be pre-defined.

The example below uses a Control component to enter the data into the
\$myString variable and display it in a Text component

![A blue rectangle with white background AI-generated content may be
incorrect.](~/assets/dashboards/image117.png)

### 6.1.3 Select from Datasource Output Type

This variable type takes the list of possible values from any of the
installed data sources in Ingenuity. Much like the configuration of a
component on a dashboard, the data source is selected from a dropdown
list and the fields underneath will update to reflect the inputs and
outputs from that data source.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image118.png)

Where the data source requires an input, this can come from other page
variables (by clicking the (X) icon) or the Knowledge Graph (cube icon).

#### _Variable name must be prefixed with "\$"_

The "Select from Datasource Output" type variable is an advanced
variable that can contain a data object rather than a single value or
string. Because of this, the variable name must be prefixed with a
dollar sign (\$). For example, "\$foo". If the variable name does not
start with "\$", the Control component connected to it will show

![A close-up of a sign AI-generated content may be
incorrect.](~/assets/dashboards/image119.png)

### 6.1.4 Value from Datasource output Type

The "Value from Datasource" type returns a single value for use in a
component such as a Number, Level, Dial, Gauge etc. It is not used with
a Control component.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image120.png)

The use case for this variable is to pass values to other variables.

### 6.1.5 Date Type

Date type variables store a timestamp.

![A screenshot of a login box AI-generated content may be
incorrect.](~/assets/dashboards/image121.png)

When connected to a Control component, users can select the data and
time from a date picker:

![A screenshot of a calendar AI-generated content may be
incorrect.](~/assets/dashboards/image122.png)

#### _Default value_

The default value has two options: "Static" and "Now"

![A blue stripe on a white background AI-generated content may be
incorrect.](~/assets/dashboards/image123.png)

If "Static" is selected and the value field left blank, the date picker
will start at 1^st^ Jan 1970, which is most probably annoying for users.
Clicking in the field to the right of the dropdown will show a date
picker and it is a good idea to set a date (and time).

![A screenshot of a calendar AI-generated content may be
incorrect.](~/assets/dashboards/image124.png)

Selecting "Now" will show additional configuration options:

![](~/assets/dashboards/image125.png)

> **Offset**: -1d for yesterday,
>
> **Default minute**: \[0 -- 60\] Set to 0 for the start of the nearest
> hour
>
> **Default hour**: \[0 -- 24\] Set to zero for midnight, 8 for 08:00
> etc.
>
> **Default day**: \[1^st^- 31^st^, Last\] Select the day of the month

For example, to default to midnight on the 1^st^ of the month:

![](~/assets/dashboards/image126.png)

## 6.2 Using variables

Variable values are set by Control components or the value of other
variables on the page.

### 6.2.1 The Control Component

The Control component will automatically adapt it's display type to the
variable type connected to it. For example, if a "Select" type is
connected, the control will display a dropdown box. If a "String" type
is connected, it will display a text input box.

![A close-up of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image127.png)

## 6.3 Worked Example -- Flight information

The example below is from our demo site:

<https://ingenuity.eigen.co/pages/view/flights>

Users can select an airport and see the live list of Arrivals and
Departures

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image128.png)

An "airport" variable is used to pass the selected airport to the
FlightRadar24 data source.

### 6.3.1 Configuring the data source

Make sure the FlightRadar24 data source is installed and click the
"Details" button:

![](~/assets/dashboards/image129.png)

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image130.png)

Scroll to the Preview section at the bottom.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image131.png)

Enter an airport code (e.g. LHR for London Heathrow) and click Test.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image132.png)

Check through the Outputs to verify that the data source is working.

### 6.3.2 Configure the "airport" variable

In Edit mode in your blank dashboard, click anywhere on the grid and
then click the "Variables" button from the right-hand panel:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image133.png)

Click "Add variable"

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image112.png)

Leave the Type as "Select" (this is the default)

Configure the variable as follows:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image114.png)

The complete list of airport codes can be found here:
<https://www.world-airport-codes.com/>

### 6.3.3 Add the select box to the page

Add a "Control" component to the page:

#### ![A screenshot of a phone AI-generated content may be incorrect.](~/assets/dashboards/image134.png)

Configure the control to use the "airport" variable under the "Format
Value" section.

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image135.png)

### 6.3.4 Configure a table to use the variables

Add two "Data table" components to the page; one for the Arrivals and
one for the Departures.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image136.png)

In the Source section of each table, select the FlightRadar24 data
source. The input for the "code" will appear. Click the "**(x)**" icon
on the right to connect this input to a page variable and select the
airport" variable.

The table Source section should now look like this:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image137.png)

Add the following columns in the tables for the associated outputs from
the FlightRadar24 data source \[Type in square brackets\]:

#### _Arrivals Table_

> Time \[Date\]: Arrival Scheduled Arrival Time
>
> Flight \[Text\]: Arrival Flight Number
>
> Airline \[Text\]: Arrival Airline
>
> From \[Text\]: Arrival From City
>
> Terminal \[Text\]: Arrival Terminal
>
> ETA \[Text\]: Arrival ETA
>
> Status \[Text\]: Arrival Status Word

#### _Departures Table_

> Time \[Date\]: Departure Scheduled Arrival Time
>
> Flight \[Text\]: Departure Flight Number
>
> Airline \[Text\]: Departure Airline
>
> To \[Text\]: Departure Destination Name
>
> Terminal \[Text\]: Departure Terminal

#### _Configuring the Time column_

To display the time correctly, the Time column in both tables should be
set to be a \[Date\] type. Then under the "Value" section the Source
should be set to "Table" and "Use output" = the same as the column field
(e.g. Arrival Scheduled Arrival Time)

Under the "Format" section the "Output" format should be "HH:mm".

See the sections below: Type, Source, Use output and Output format

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image139.png)

## 6.4 Worked Example -- Theme Park Queue times

The example below is from our demo site:

<https://ingenuity.eigen.co/pages/view/theme-park-queue-times>

This page has two dropdown boxes where users can select the company and
the park and see a list of the current queue times for all the rides.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image140.png)

Two variables are set up which reflect the name of the data returned
from the source:

1.  \$company -- the id of the company

2.  \$park -- the id of the park

To follow this example, create a new Dashboard page in your own space.

### 6.4.1 Configuring the data source

This page uses the Theme Parks and Theme Park Queue Times data sources,
which are configured against a publicly available APIs to return the
list of theme park companies, the theme parks for that company and
finally the queue times for the rides in that theme park.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image141.png)

Make sure these data sources are installed and then click the "Details"
button against the Theme Parks data source:

![A screenshot of a web page AI-generated content may be
incorrect.](~/assets/dashboards/image142.png)

Under the "Outputs" section we can see that the data source returns
three outputs "Company", "Parks" and "Details".

Click the "Test" button to see the data that is returned:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image143.png)

Only the \$company output is populated. If we expand it we can see there
is a list of companies under the path \$company.n (where n is a number
from 0 to n) and each company has two properties; name and id

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image144.png)

Take the id of the first company; 11 and enter it in the "Company ID"
field

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image145.png)

and re-test the output:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image146.png)

Now all three outputs have valid data. If we expand the \$parks output,
we can see that it has a list of parks under the sub path \$parks.0.n
(where n is a number from 0 to n). Each park has six properties. The
ones we will be interested in are the name and id.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image147.png)

### 6.4.2 Configuring the \$company variable

In Edit mode in your blank dashboard, click anywhere on the grid and
then click the "Variables" button from the right-hand panel:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image133.png)

Click "Add variable"

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image112.png)

Under the "Type" dropdown select "Select from Datasource output"

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image148.png)

Name the variable "\$company". (Remember "Select from Data source"
variable names must be prefixed with "\$").

:::note
In this case we are naming the variable to match the output from
the datasource we are using to make it easy to follow, but this is not
required. The variable can have any name (without spaces or special
characters).
:::

From the "Source" dropdown, select the "Theme Parks" data source. You
will see that the form automatically updates to show the inputs for the
data source. We do not need to set any inputs for this variable as we
would like it to return all the companies.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image149.png)

Under the "Use output" dropdown, select the "\$company" output

![A white rectangular object with blue stripe AI-generated content may
be incorrect.](~/assets/dashboards/image150.png)

We do not need to set anything for the "Sub path" in this case because
the list of companies is directly under the \$company output (recall the
data source test output in section 6.2.1).

The Label and Value fields determine what the user will see (the label)
vs what the dashboard will use as the value.

From the test of the data source output we did, we know there are two
properties for the company (name, id). Use the "name" property for the
"Label path" and the "id" property for the "Value path". This means that
the dropdown will display a user-friendly list of names but will pass
the id as the value when the variable is used.

We do not need to set a default value here.

:::note
You may want to save your work so far by clicking the "Save" button on
the Grid variables form and then saving the page.
:::

### 6.4.3 Configuring the \$parks variable

Click on the "Add variable" button at the bottom of the form to add a
second variable. Name this one \$park and again set the Type as "Select
from Datasource output".

Select the "Theme Parks" data source again and under the "Company ID"
input, click the "**(x)**" icon on the right to connect this input to
one of the page variables; select the \$company variable created in the
previous step:

![A screenshot of a computer screen AI-generated content may be
incorrect.](~/assets/dashboards/image151.png)

Select the "\$parks" output from the "Use output" dropdown.

![A blue line with black text AI-generated content may be
incorrect.](~/assets/dashboards/image152.png)

Remember that the data source test output (in section 6.2.1):

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image154.png)

Because the output has the path $parks.0.n, we need to
set the "Sub path" as "0".

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image155.png)

From the six available properties, we will use the "name" property under
the "Label path" and the "id" under the "Value path".

Save the Grid variables form and the page.

### 6.4.4 Add the select boxes to the page

Add two "Control" components to the page:

#### ![A screenshot of a phone AI-generated content may be incorrect.](~/assets/dashboards/image134.png)

Configure the first control to use the "\$company" variable under the
"Format Value" section:

![A screenshot of a company profile AI-generated content may be
incorrect.](~/assets/dashboards/image156.png)

And enter the text "Company" in the "Format Label" section:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image157.png)

Repeat this for the second Control, but this time using the "\$parks"
variable. The controls should now look something like this:

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image158.png)

### 6.4.5 Configure a table to use the variables

Add a "Data table" component to the page.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image159.png)

In the Source section, select the Theme Park Queue Time data source. The
input for the "PARK_ID" will appear below. Click the "**(x)**" icon on
the right to connect this input to one of the page variables and select
the "\$Park" variable. In the "select" dropdown below the variable,
select the "id" property.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image160.png)

The table Source section should now look like this:

![A screenshot of a chat AI-generated content may be
incorrect.](~/assets/dashboards/image161.png)

Now configure the table in the normal way, making columns for the Ride,
Land, Queue Time and any other fields you would like.

![A screenshot of a screen AI-generated content may be
incorrect.](~/assets/dashboards/image162.png)

Save the dashboard.

### 6.4.6 Sharing the link with a friend

If the Update URL switch is set to "on" for both variables, the current
selection will be "remembered" in the URL to create a shareable link.

![A blue and white switch with a white circle AI-generated content may
be incorrect.](~/assets/dashboards/image163.png)

For example, if a friend is at Disneyland in Florida (Company ID = 2,
Park ID = 16) , you could send them this link:

[https://ingenuity.eigen.co/pages/view/theme-park-queue-times?var%3A1715181299990=2&var%3A1715180655536=16](https://ingenuity.eigen.co/pages/view/theme-park-queue-times?var%3A1715181299990=2&var%3A1715180655536=16)

>In this link, notice there is a '=2' and '=16'

:::note
the URL of the page you have made will be different
:::