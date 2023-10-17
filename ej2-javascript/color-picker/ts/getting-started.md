---
layout: post
title: Getting started with ##Platform_Name## Color picker control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Color picker control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Color picker control

This section explains how to create a simple ComboBox component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the ColorPicker component in your application.

```javascript
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Add ColorPicker to the project

Add the HTML input tag with ID attribute as the `element` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 ColorPicker</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 ColorPicker" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <div style="margin: 50px;">
        <!--Element which is going to render-->
        <input id="element" type="color" />
    </div>

</body>

</html>

```

Then, import the ColorPicker component in your `app.ts` file, and initialize it with the `#element`.

`[src/app/app.ts]`

```ts

import { ColorPicker } from '@syncfusion/ej2-inputs';

// Initializes the ColorPicker component
let colorPicker: ColorPicker = new ColorPicker({}, '#element');
```

## Run the application

Run the application in the browser using the following command.

```
npm start
```

The following example shows a default ColorPicker component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/getting-started/default-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/getting-started/default-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/colorpicker/getting-started/default-cs2" %}

## Inline type

By default, the ColorPicker will be rendered using SplitButton and open the pop-up to access the ColorPicker. To render the ColorPicker container alone and to access it directly, render it as inline. It can be achieved by setting the [`inline`](../api/color-picker/#inline) property to `true`.

The following sample shows the inline type rendering of ColorPicker.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/getting-started/inline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/getting-started/inline-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/getting-started/inline-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/colorpicker/getting-started/inline-cs1" %}

>> The `showButtons` property is disabled in this sample because the control buttons are not needed for inline type. To know about the control buttons functionality, refer to the [`showButtons`](../how-to/hide-control-buttons) sample.

## See Also

* [Set color value](./mode-and-value#color-value)
* [ColorPicker customization](./how-to/customize-colorpicker)