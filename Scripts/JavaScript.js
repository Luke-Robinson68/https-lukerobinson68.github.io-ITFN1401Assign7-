
// function for last modified date 
function LastModDate(){
    var lastmod = document.lastModified;
    var lastmod = lastmod.substring(0,10);
    
    document.getElementById("DisplayLastModDate").innerHTML = "<p>Updated " + lastmod + "</P>";
}