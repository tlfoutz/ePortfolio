//Remember to add an ID of "mainmenu" to the nav ul
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
    var menu = document.querySelectorAll('ul#mainmenu li a');
    var i;

    //loop through all the menu items in the navigation
    for (i = 0; i < menu.length; i++) {
        var currentURL = (menu[i].getAttribute("href"));

        //turn of highlighting by default
        menu[i].parentNode.className = "";
        if (currentURL === pageHREF || currentURL === null) {

            //turn on highlighting if its a match
            menu[i].parentNode.className = "active";

        } // end if
    } // end of the search for a match
} // end of if !==