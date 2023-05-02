

<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 NumericTextBox component</title>
    <!-- Essential JS 2 Input's's dependent material theme -->
  <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

  <!-- Essential JS 2 all script -->
  <!-- <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

  <!-- Essential JS 2 Input's's dependent scripts -->
  <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
  <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
</head>

<body>
    <div id='container'>
        <div style="width: 240px; margin: 0 auto;padding-top:100px;">
          <input id="strict" type="text" />
        </div>
        <div style="width: 240px; margin: 0 auto;padding-top:20px;">
          <input id="allow" type="text" />
        </div>
        </div>
<script>
// initializes NumericTextBox component
var numeric = new ej.inputs.NumericTextBox({
        // restricts number of decimals to be entered in the NumericTextBox
        validateDecimalOnType: true,
        // sets number of decimal places to be allowed by the NumericTextBox
        decimals: 3,
        // sets number with 3 numbers of decimal places format
        format: 'n3',
        value: 10,
        placeholder: 'ValidateDecimalOnType enabled',
        floatLabelType: 'Auto'
});

// renders initialized NumericTextBox
numeric.appendTo('#strict');
var numeric1 = new ej.inputs.NumericTextBox({
        // sets number of decimal places to be allowed by the NumericTextBox
        decimals: 3,
        // sets number with 3 numbers of decimal places format
        format: 'n3',
        value: 10,
        placeholder: 'ValidateDecimalOnType disabled',
        floatLabelType: 'Auto'
});

// renders initialized NumericTextBox
numeric1.appendTo('#allow');
</script>
</body>

</html>



