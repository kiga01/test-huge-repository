function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myButtonFunction() {
    document.getElementById("myDropdownButton").classList.toggle("show-mobile");
}

function myInnerButtonFunction() {
    document.getElementById("myInnerDropdown").classList.toggle("show-mobile");
}

function windowHeight() {
    var windowHeight = document.body.clientHeight + 'px';
    var menu = document.getElementById("myDropdownButton");
    menu.height = windowHeight;
    //menu.style.height = windowHeight;
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

