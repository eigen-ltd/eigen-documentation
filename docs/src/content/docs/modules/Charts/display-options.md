---
title: Configuring Display Options
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 4
---

## 2.7 Configuring the display options for a chart

The simplest way to access the Chart Configuration options is to click
the Settings Cog icon next to the padlock in the title bar, and then
select Configure in the drop-down list.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image43.png)

### 2.7.1 Chart Settings -- Hide Legend

Full legend can take significant amount of dashboard's real-estate.

![A
screenshot of a computer Description automatically
generated](~/assets/charts/image44.png)

Hide and unhide the legend under the main chart area by ticking 'Hide
legend'. This saves space if multiple charts are used within a single
dashboard.

![A hand pointing to a button Description automatically
generated](~/assets/charts/image45.png)

### 2.7.2 Chart Settings -- Use mini legend

Mini legend occupied very little real-estate on a dashboard, therefore
it provides the middle point between full legend and no legend (Hide
Legend). Mini legend only displays trend (pen) color and name.

![](~/assets/charts/image46.png)

To switch to mini legend tick 'Use mini legend'.

![A close-up of words Description automatically
generated](~/assets/charts/image47.png)

### 2.7.3 Chart Settings -- Edit axes

Edit chart axes by clicking 'Edit axes'.

![](~/assets/charts/image48.png)

All axes used in a chart are listed and can be edited.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image49.png)

#### _Label_

Type the axis label.

#### _Show label_

Toggle the selection off or on to hide or show the label on an axis.

#### _Markers_

Toggle the selection off or on to hide or show the markers on an axis.

#### _Colour_

![A screenshot of a computer Description automatically
generated](~/assets/charts/image50.png)

Select the axis label colour. Note: this is not the colour of the axis
itself, which is always black.

#### _Size_

![A screen shot of a computer Description automatically
generated](~/assets/charts/image51.png)

Select the size of the axis label. Note: this is not the size of the
axis itself.

#### _Min_

Axis Min value can be set manually by typing the values or using up/down
arrows. If set to 'auto' the chart will auto scale according to the data
lower range.

#### _Max_

Axis Max value can be set manually by typing the value or using up/down
arrows. If set to 'auto' the chart will auto scale according to the tag
data upper range.

#### _Auto_

Set both Min and Max axis value to scale according to the tags data
range.

### 2.7.4 Chart Settings -- Edit title

Edit chart title by clicking 'Edit title'.

![](~/assets/charts/image52.png)

Type chart title and subtitle

![A screenshot of a computer Description automatically
generated](~/assets/charts/image53.png)

### 2.7.5 Chart Settings - Download Chart Data

To download/export the chart time-series data in CSV format click
'Download Chart Data'.

![](~/assets/charts/image54.png)

The format and the amount of data can be adjusted prior to the export.
The 'Download chart data' popup also shows the preview of the data.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image55.png)

#### _Start / End_

Start and End date/time selection enables user to define the export time
window. Default is the chart time window.

#### _Time Format_

Time format can be selected from the dropdown from the list of
predefined formats or entirely specified by a user.

#### _File Format_

File format is CSV and cannot be changed by a user.

#### _Number of points_

Specifies the maximum number of data points (time series records) to be
exported.

#### _Data type_

The user can select whether 'Raw' or 'Interpolated' (sampled) data to be
exported by selecting one of the radio buttons.

#### _File Name_

The file name can be specified by a user. The destination is always to
the \\Download folder.

#### _Download data preview (first ten points)_

If one or more parameters are changed click to reload the preview.

### 2.7.6 Chart Settings - Download as an image

To download the chart image, click 'Download Chart Data'.

![](~/assets/charts/image56.png)

The image is downloaded to the \\Downloads folder in png format.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image57.png)

The image can be open with any photo viewer supporting png format.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image58.png)

### 2.7.7 Chart Settings - Configure

![](~/assets/charts/image59.png)

This then presents the main Chart Configuration window. 'Values' tab
appears as default:

![A screenshot of a computer Description automatically
generated](~/assets/charts/image60.png)

There are five sets of data that can be configured: Values (i.e. data
sources), Axes Format, Data Values, Components, and Live mode.

##### 2.7.7.1.1 Chart Configuration - Values (Format Data Sources)

It is possible to configure each tag series in chart in this menu. The
configuration parameters depend on the type of source selected and its
input/output configuration. The common parameter is Source. The
Historian Multi Chart (default) data source has 3 parameters:

![A screenshot of a computer Description automatically
generated](~/assets/charts/image61.png)

#### _Source_

Select the source for the data from the drop-down list.

#### _Tag_

Select the tag by searching or by selecting from the basket.

#### _Use Output_

Select the output parameter from the dropdown list.

Line configuration:

#### _Colour_

Set by clicking the red square. Any of the standard colours can be
selected or additional colours can be added

![A screenshot of a computer Description automatically
generated](~/assets/charts/image62.png)

#### _Line Type, Line Weight, Point Radius_

Set by clicking the lines type icon. Select one of the following line
types: solid, dashed, dotted, dash dot. Set Line Weight and Point Radius
by clicking up/down arrows or manually enter value.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image63.png)

##### 2.7.7.1.2 Chart Configuration - Format Axes

Each of the axes can be formatted in this tab.

Min and Max values can be set manually by typing the values or using
up/down arrows. If set to 'auto' the chart will auto scale according to
the tag range.![A screenshot of a computer Description automatically
generated](~/assets/charts/image64.png)By default, only the _min_ and _max_
values are shown at first, but other settings can be updated by clicking
the Settings cog on the right of each axis label.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image65.png)

#### _Scale Format_

Set the number of decimal places, thousands separator (comma or
nothing), scientific shorthand notation and font size

#### _Axis Label_

Set a custom label for the axis. Note: this will replace the units on
the axis which are shown by default. It is also possible to configure
the font colour and size.

The label can be hidden by toggling the _Show axis label_ switch.

#### _Label horizontal position_

Choose from Left, Centre (default) and Right.

#### _Data markers_

Show or hide the data markers on the axis by toggling this switch. The
data markers are the coloured dots indicating which data series are
linked to the axis.

#### _Axis width_

Set the width of the axis, in pixels. Using 0 or blank results in
automatic width for the axis and is recommended.

##### 2.7.7.1.3 Chart Configuration - Format Value

Choose the number of decimal places used to display the data values, and
whether larger values use comma-separated thousands.

This applies to the values shown in the pop-up when hovering over a
chart.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image66.png)

#### _Decimal Places_

Manually enter the number (integer) or use up/down arrows to set.

#### _Comma Separate 000s_

Toggle the selection off or on.

#### _Scientific Shorthand_

Toggle the selection off or on.

##### 2.7.7.1.4 Chart Configuration - Format component

Here are toggles to control the display.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image67.png)

#### Enable Popup Chart Save\*

Toggle the selection off or on.

#### _Show Y axes_

Toggle the selection off or on.

#### _Show Y axes labels (these are hidden automatically if the axes are hidden)_

Toggle the selection off or on.

#### _Show tooltip outside bounds_

Toggle the selection off or on.

#### _Show horizontal cursor line_

Toggle the selection off or on.

#### _Legend Height (% of chart height)_

Manually enter the number (integer) or use up/down arrows to set.

##### 2.7.7.1.5 Chart Configuration - Live mode

Live can be configured in this tab.

![A screenshot of a computer Description automatically
generated](~/assets/charts/image68.png)

#### _Inherit Time From Grid Settings_

Toggle between Live mode and not.

#### _Live mode enabled_

Toggle between Live mode and not.

#### _Update frequency(ms)_

Control how often data is refreshed. Enter the number is milliseconds.
For example, enter 1000 to refresh every second, or 60000 for once a
minute.

#### _Start and End_

Enter the start and end datetime for the data range. Note that this is
not used in Live mode.

#### _Trend Timespan_

Enter the timespan in (w, h, d, etc.) format: eg. 1w, 6h, 2d etc.

### 2.7.8 Changing Axis scales

To change the scale and range of the axis, first make sure the chart is
unlocked (see 2.6.2)

![](~/assets/charts/image69.png)

Then simply hover over an axis and use the middle mouse button on
increase/decrease the size of the range.

![A screenshot of a graph Description automatically
generated](~/assets/charts/image70.png)

Click and drag to move the axis without changing the scale.

Click the 'undo' to go back to how the axis were.

#

_For more information, please contact us at <info@eigen.co> or book a
demo on our website at [www.eigen.co](http://www.eigen.co)_
