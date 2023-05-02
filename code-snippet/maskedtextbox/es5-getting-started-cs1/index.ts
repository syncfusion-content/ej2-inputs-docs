

<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 MaskedTextBox</title>
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
    <div id='container' style="width: 240px; margin: 0 auto;">
            <input id="mask" type="text" />
        </div>

<script>
// initializes the MaskedTextBox component and sets mask format
var mask = new ej.inputs.MaskedTextBox({mask: '000-000-0000', placeholder: 'MaskedTextBox', floatLabelType: 'Always'});

mask.appendTo('#mask');
</script>
</body>

</html>



