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
    $http.get(url).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('data', data);
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
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

