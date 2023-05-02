ej.base.enableRipple(true);
// Initialize the control with file validation
var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    selected: onFileSelect,
});
uploadObj.appendTo('#validation');
function onFileSelect(args) {
    var existingFiles = this.getFilesData();
    for (var i = 0; i < args.filesData.length; i++) {
        for (var j = 0; j < existingFiles.length; j++) {
            if (!ej.base.isNullOrUndefined(args.filesData[i])) {
                if (existingFiles[j].name == args.filesData[i].name) {
                    args.filesData.splice(i, 1);
                }
            }
        }
    }
    existingFiles = existingFiles.concat(args.filesData);
    args.modifiedFilesData = existingFiles;
    args.isModified = true;
}



