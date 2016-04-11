function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myButtonFunction() {
    document.getElementById("myDropdownButton").classList.toggle("show-mobile");
}

function myInnerButtonFunction() {
    document.getElementById("myInnerDropdown").classList.toggle("show-mobile");
}

function loadMenu(){
    var url = "http://localhost:3000/menu";
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", url, false);
    xhReq.send(null);
    var response = JSON.parse(xhReq.responseText);
    drawMenu(response);
    drawMenuMobile(response);
}

function drawMenu( ajaxResponse ){
    var newList = "<ul class='nav'>";
    var innerMenuCount = 0;
    for(var i = 0; i < ajaxResponse.items.length; i++){
        if (ajaxResponse.items[i].items.length > 0){
            newList = newList + "<li class='nav-list dropdown'><a href='" + ajaxResponse.items[i].url + "' class='nav-url'>" + ajaxResponse.items[i].label + "</a>"
            newList = newList + "<ul class='dropdown-menu' id='myDropdown" + innerMenuCount + "'>";
            for(var j = 0; j < ajaxResponse.items[i].items.length; j++){
                newList = newList + "<li class='nav-sub-list '><a href='" + ajaxResponse.items[i].items[j].url + "' class='nav-sub-url'>" + ajaxResponse.items[i].items[j].label + "</a>"
            }
            newList = newList + "</ul></li>";
            innerMenuCount ++;
        } else {
            newList = newList + "<li class='nav-list'><a href='" + ajaxResponse.items[i].url + "' class='nav-url'>" + ajaxResponse.items[i].label + "</a></li>";
        }

    }
    newList = newList + "</ul>";
    var element = document.getElementById('desktop-menu');
    console.log('list', newList);
    element.innerHTML += newList;
}

function drawMenuMobile( ajaxResponse ){
    var newList = "<ul class='nav'>";
    var innerMenuCount = 0;
    for(var i = 0; i < ajaxResponse.items.length; i++){
        if (ajaxResponse.items[i].items.length > 0){
            newList = newList + "<li class='nav-list dropdown'><a href='" + ajaxResponse.items[i].url + "' class='nav-url inner-dropbtn-mobile'>" + ajaxResponse.items[i].label ;
            newList = newList + "<span class='fa fa-chevron-down fa-lg'></span></a>";
            newList = newList + "<ul class=inner-dropdown-menu' id='myInnerDropdown" + innerMenuCount + "'>";
            for(var j = 0; j < ajaxResponse.items[i].items.length; j++){
                newList = newList + "<li class='nav-sub-list '><a href='" + ajaxResponse.items[i].items[j].url + "' class='nav-sub-url'>" + ajaxResponse.items[i].items[j].label + "</a>"
            }
            newList = newList + "</ul></li>";
            innerMenuCount ++;
        } else {
            newList = newList + "<li class='nav-list'><a href='" + ajaxResponse.items[i].url + "' class='nav-url'>" + ajaxResponse.items[i].label + "</a></li>";
        }

    }
    newList = newList + "</ul>";
    var element = document.getElementById('myDropdownButton');
    console.log('list', newList);
    element.innerHTML += newList;
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.dropbtn-mobile')) {
        var dropdowns = document.getElementsByClassName("navigation-menu-mobile");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-mobile')) {
                openDropdown.classList.remove('show-mobile');
            }
        }

        var navButton = document.getElementsByClassName("dropbtn-mobile");
        console.log('b', navButton);
        var i;
        for (i = 0; i < navButton.length; i++) {
            var hideButtons = dropdowns[i];
            if (hideButtons.classList.contains('hide-button')) {
                hideButtons.classList.remove('hide-button');
            }
        }

    }

    if (!event.target.matches('.inner-dropbtn-mobile')) {
        var dropdowns = document.getElementsByClassName("inner-dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-mobile')) {
                openDropdown.classList.remove('show-mobile');
            }
        }
    }
}

