/*****************************/
/* Include all HTML snippets */
/*****************************/
function includeHTML(callback) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var includeFile = element.getAttribute("w3-include-html");
        if (includeFile) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200)
                        element.innerHTML = this.responseText;
                    if (this.status == 404) 
                        element.innerHTML = "Page not found.";
                    element.removeAttribute("w3-include-html");
                    includeHTML(callback);
                }
            }
            xhr.open("GET", includeFile);
            xhr.send();
            return;
        }
    }
    if (callback)
        callback();
}
