---
layout: post
title: Resize with ##Platform_Name## Textarea control | Syncfusion
description: Checkout and learn about Resize with ##Platform_Name## Textarea control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Resize
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resize in ##Platform_Name## TextArea control

TextArea can be resized to adjust their size according to specific requirements. This resizing behavior can be enabled and configured using the ['resizeMode'](../api/textarea/#resizeMode) API, which offers several options for resizing the TextArea:

| Type  | Description |
| -- | -- |
| Vertical  | Allows users to adjust the height of the TextArea vertically. It is suitable when you want to resize the TextArea only along the vertical axis, accommodating varying amounts of text input. |
| Horizontal | Allows users to adjust the width of the TextArea horizontally. This option is beneficial when developers need to accommodate longer lines of text within the TextArea while maintaining a fixed height. |
| Both | Enables users to resize both the height and width of the TextArea, providing maximum flexibility in adjusting its size. This option is suitable for scenarios where users require complete control over the dimensions of the TextArea. |
| None | Disables the resize in TextArea. This option is ideal for situations where you want to maintain a fixed size for the TextArea, preventing any unintended changes by users. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/resize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/resize-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/resize-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/resize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/resize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/resize-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/resize-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/resize-cs1" %}
{% endif %}


## Width of ##Platform_Name## TextArea control

You can easily customize the width of the TextArea using the ['width'](../api/textarea/#width) property. This property allows precise adjustment of the TextArea's width according to the specific layout requirements of the application.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/resize-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/resize-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/resize-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/resize-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/resize-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/resize-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/resize-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/resize-cs2" %}
{% endif %}

{% endif %}
