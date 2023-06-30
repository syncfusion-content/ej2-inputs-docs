---
layout: post
title: Reversible Range Slider in ##Platform_Name## Range Slider control | Syncfusion
description: Learn here all about Reversible Range Slider in Syncfusion ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Reversible Range Slider 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Reversible Slider in ##Platform_Name## Range Slider control

You can create a Range Slider rendered with values in reverse order by setting the `min` property to the maximum value and the `max` property to the minimum value. An example of how to achieve a Reversible Range Slider is shown below

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/reversible-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/reversible-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/reversible-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/reversible-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/reversible-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/reversible-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/reversible-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/reversible-cs1" %}
{% endif %}

> Reversible order can be achieved with `Horizontal` orientation Range Slider by setting `enableRtl` as true.