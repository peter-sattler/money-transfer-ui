//===================================================================================
// Cookie functions, to store and retrieve HTTP cookies
// Author: Sam Sultan
//===================================================================================
function getCookie(name) {
    var value = '';
    var httpCookies = document.cookie;              //get all the cookies
    var allCookies  = httpCookies + "; "            //append '; ' at the end
    var found = allCookies.indexOf(name);            //find the cookie name 
    if (found >=0) {                                 //if cookie name is found
        var beg = allCookies.indexOf("=",found) +1   //get the beginning of value
        var end = allCookies.indexOf(";",found)      //get the end of value            
        value = allCookies.substring(beg,end);       //extract of the value
    }
    return(value);                                   //return the cookie value
} 