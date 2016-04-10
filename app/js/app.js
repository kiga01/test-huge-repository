function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myButtonFunction() {
    document.getElementById("myDropdownButton").classList.toggle("show-mobile");
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
        console.log('test');
        var dropdowns = document.getElementsByClassName("navigation-menu-mobile");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-mobile')) {
                openDropdown.classList.remove('show-mobile');
            }
        }
    }
}

