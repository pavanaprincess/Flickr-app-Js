/** 
Author:    Build Rise Shine with Nyros (BRS) 
Created:   11.05.2022 
Library / Component: Script file
Description: Logic behind the app(fetching the data from the API)
(c) Copyright by BRS with Nyros. 
**/
function forcedownload(link) {
    var url = link.getAttribute("data-href");
    var fileName = link.getAttribute("download");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
        window.URL.revokeObjectURL(imageUrl)
    }
    xhr.send();
}