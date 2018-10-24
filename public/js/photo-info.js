function initMap() {

    var options = {
        zoom: 13,
        center: { lat: 35.2271, lng: -80.8431 }
    }
    var map2 = new
        google.maps.Map(document.getElementById('map2'), options);

    google.maps.event.addListener(map2, 'click',

        function (event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            console.log(lat, lng);
            addMarker(lat, lng);
            postData(lat, lng);
        }
    );






    function addMarker(lat, lng) {
        // this will add a marker to the map given the lat/lng of the on click position
        var marker = new google.maps.Marker({
            position: { lat, lng },
            map: map2,
        });
        // this will create an editable info window 
        var infowindow = new google.maps.InfoWindow({
            maxWidth: 200,
            content: '<div id="infoWindowInput" contentEditable="true">changeme...</div>',
        });
        // will open info window with a click on the marker
        marker.addListener('click', function () {

            infowindow.open(map, marker);
        });

        google.maps.event.addListener(infowindow, "closeclick", function () {
            console.log('trigger close');
            console.log($("infoWindowInput").val());
            windowInputCapture();
        });


    };

    function postData(lat, lng) {
        event.preventDefault();

        var address = $("#address").val().trim();
        var name = $("#photogInfo").val().trim();
        var data = {
            address: address,
            name: name,
            lat: lat,
            lng: lng,
        };
        $(".submit").on("click", ajaxCall(data));

        function ajaxCall(data) {
            $.ajax({
                method: "POST",
                url: "/api/users",
                data: data
            }).then(function (res) {
                console.log(res);
            })
        };
    };
};







// $(document).ready(function () {
//     /* global moment */




//     $(document).on("click", ".submit", handleUpload);

//     //global variables
//     var newMarkerId;
//     var newUserId;

//     function handleUpload() {
//         event.preventDefault();

//         //function for adding userdata FIRST w/ callback for Marker
//         //name, email, username
//         function addUser(post, callback) {
//             console.log("adding user data");
//             
//         };

//         //capture variables
//         var newUser = {
//             name: $("#photogName").val().trim(),
//             username: $("#username").val().trim(),
//             email: $("#email").val().trim()
//         };

//         var locationName = "UNCC Uptown Campus";
//         var lat = 35.2284396;
//         var lng = 80.837108;
//         var address = "320 E 9th St, Charlotte, NC, 28202";
//         var city;

//         var newLocation = {
//             name: locationName
//                 .trim(),
//             address: address
//                 .trim(),
//             type: "Photo-Op",
//             lat: lat,
//             lng: lng
//         };

//         //add user and set up call back
//         addUser(newUser, addMarker);
//     };


// empty form fields on submit click
function emptyForm () {
    $("#photogName").val("");
    $("#username").val("");
    $("#email").val("");
    $("#address").val("");
    $("#date").val("");
    $("#photogNotes").val("");
}
// nav-bar functionality
const nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.style.background = "#4D4e4f";
        nav.style.boxShadow = "0px 4px 2px #33333";
        nav.style.opacity = ".9";
    } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "0px 4px 2px #33333";
    }
}
