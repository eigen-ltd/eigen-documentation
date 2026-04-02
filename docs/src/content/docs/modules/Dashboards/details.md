---
title: Creating Dashboards
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 2
---

# 2 Creating and editing dashboard

## 2.1 How to create a dashboard

To create a dashboard, open the workspace you wish your dashboard to be
under, click the Add button on the top right of the page and select the
type of dashboard you wish to add.

![A screenshot of a computer Description automatically
generated](~/assets/dashboards/image4.png)

## 2.2 Editing a dashboard

When you first create a dashboard, it will open in Edit mode. To put a
dashboard in Edit mode at any other time, just click the "Edit" toggle
in the top right corner. A configuration panel will appear on the right
hand side.

![A white and grey switch with a black text AI-generated content may be
incorrect.](~/assets/dashboards/image12.png)![A screenshot of a computer AI-generated
content may be
incorrect.](~/assets/dashboards/image13.png)

## 2.3 Grid Configuration

Each type of dashboard has different grid settings applied to it. To
change the grid settings of any dashboard or page, click on "Grid
Settings" in the right-side menu when in Edit mode. If you cannot see
this option but see the configuration menu for a widget instead, click
on an empty space in the dashboard or page to access it. This will open
a window with four main sections, which we will cover next.

![A blue rectangle with white text Description automatically
generated](~/assets/dashboards/image14.png)

### 2.3.1 Settings tab

In the Settings section, we can adjust the number of columns and the
height of the rows, enable or disable the vertical and horizontal
guides, the lines below the graphics, prevent collision, the scaling of
the dashboard and the aspect ratio.

![A screenshot of a computer Description automatically
generated](~/assets/dashboards/image15.png)

The vertical and horizontal guides are what makes the grid visible while
on Edit mode. These are ideal to use as reference when you want to place
widgets perfectly aligned. To change the size of the grid, change the
number of columns and the Row height.

Disabling "Prevent collision" will allow you to overlay widgets, which
is ideal for having images or graphics with data on top of it.

The "Show lines below graphics" will make the lines added from the
Lines' menu sit behind the graphics overlaid on them. This difference
can be seen in the following image.

![A black cylinder with red lines Description automatically
generated](~/assets/dashboards/image16.png)![A black cylinder with a red laser
Description automatically
generated](~/assets/dashboards/image17.png)

:::tip

_Enabling the scale toggle will make the dashboard scale horizontally and
vertically with the screen size, as a scaled dashboard would do. A
scaled dashboard will have as default settings no vertical nor
horizontal guides, the prevent collision toggle off and the scale toggle
on. Enabling the scale toggle is ideal when creating a dashboard that
will be seen in different screen sizes, since it will keep the ratio and
overall alignment of the elements regardless of the screen size used._

:::

### 2.3.2 Background tab

In the background section you can upload a background image or set a
background colour. Remember you can adjust the opacity, 0 being
completely transparent and 1 being not transparent at all.

![A white background with blue lines Description automatically
generated](~/assets/dashboards/image18.png)

### 2.3.3 Live mode tab

The Live mode lets you activate live mode for the dashboard, allowing
widgets to be set to the current time. You can also choose whether the
widgets should inherit these settings or maintain their own
configuration as well as changing how often the data will update.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image19.png)

Showing the live settings toolbar will show a Live toggle on the top of
the dashboard, which can be activated or deactivated and will change all
the widgets in the dashboard to this time frame. When the toggle is off,
you can select a specific date to set all the widgets to.

![A close up of a number AI-generated content may be
incorrect.](~/assets/dashboards/image20.png)

If you select a specific date in the Date section, the Live mode will be
turned off and the data will not be updated, rather displayed for a
fixed time frame according to your selection.

### 2.3.4 Editing JSON code

The last section in the Grid configuration menu allows us to see the
JSON code for the whole dashboard and it is signaled by the following
button.

![A close-up of a symbol Description automatically
generated](~/assets/dashboards/image21.png)

To copy the current dashboard to another page or dashboard, we can
select the "text" option and copy all the code of the desired page into
the code of the page where we want the copy to be in and click save.
This will replicate the whole dashboard with all its widgets configured
with the data sources from the original dashboard if available, yet
images will have to be uploaded again in the destination page.

![A screenshot of a computer program Description automatically
generated](~/assets/dashboards/image22.png)

Each widget on the dashboard will have their individual JSON code,
therefore if you wish to copy a single widget from a different dashboard
into your own, you can access their JSON code by clicking on them while on Edit mode and selecting the JSON button on the bottom of the right-side menu.

## 2.4 Selecting, Moving and Grouping objects

### 2.4.1 Selecting individual and multiple objects

To select an object, move the mouse pointer over it and click once. To
select multiple objects, either hold down the shift key while you click
on each one, or click and drag the mouse pointer to draw a box over
them:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image23.png)

### 2.4.2 Moving objects

Objects can be moved when the mouse pointer is within the boundaries of
the component and the pointer has changed to a "move: icon - a 4-pointed
arrow. Click on the object and hold to move it around as you would with
any other drawing package.

![A close-up of a number AI-generated content may be
incorrect.](~/assets/dashboards/image24.png)

To resize an object, move the mouse pointer over one of the 3 "\>"
markers on the right, bottom or bottom right and the cursor will change
to a "resize" icon -- a two headed arrow in the directions the component
can be resized:

![A close-up of a white square AI-generated content may be
incorrect.](~/assets/dashboards/image25.png)

When multiple objects have been selected, the right hand panel
automatically changes to the alignment tools:

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image26.png)

These are especially useful in a scaled dashboard where there is no grid
to aid alignment.

Right-clicking on a selected object brings up a shortcut menu with
available options:

![A screenshot of a calendar AI-generated content may be
incorrect.](~/assets/dashboards/image27.png)

The Group and Align options only appear when more than one object is
selected at the same time.

### 2.4.3 Grouping objects

Clicking the "Group" option automatically adds a Group component with
the selected components in it.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image28.png)

:::note
The Group component is always behind the individual widgets. This
means that the widgets can still be selected, edited and moved about
within the group, or even moved out of the group. However, if there is
no area of empty space in the group, it is not possible to click on the
group and move it.
:::