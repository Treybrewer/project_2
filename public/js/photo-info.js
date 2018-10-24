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
        $(document).on("click", ".submit", ajaxCall(data));

        function ajaxCall() {
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

//     function addMarker(post, callback) {
//         //data to go into markers table  
//         console.log('adding marker')
//         $.ajax({
//             method: "POST",
//             url: "/api/markers",
//             data: post
//         }).then(function (resp) {
//             // response.json(resp.get('id'))
//             console.log(resp.id);
//             newMarkerId = resp.id;

//             var newPhoto = {
//                 UserId: newUserId,
//                 MarkerId: newMarkerId,
//                 photo_url: "../uploads/mathesonbridge.jpg",//photoURL,
//                 photog_notes: $("#photogNotes").val(),
//                 date: $("#date").val(),
//             };

//             callback(newPhoto);
//         })
//     };

//     function addPhoto(post) {
//         console.log('adding photo')
//         $.ajax({
//             method: "POST",
//             url: "/api/photos",
//             data: post
//         }).then(function (resp) {
//             console.log(resp);
//         })
//     };

// });
