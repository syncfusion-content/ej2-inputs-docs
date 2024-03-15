import { TextArea } from "@syncfusion/ej2-inputs";

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea({
    placeholder: 'Enter your comments'
});
// Render initialized TextArea.
textareaObj.appendTo("#default");

document.getElementById('btn').onclick = function () {
    // use getPersistData method in TextArea
    let data = textareaObj.getPersistData();
}
