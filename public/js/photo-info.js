$(document).ready(function() {
    /* global moment */
 
    $(document).on("click", "#uploadPhoto", handleUpload);
    
    //global variables
    var newMarkerId;
    var newUserId;

    function handleUpload(){
        event.preventDefault();

        //function for adding userdata FIRST w/ callback for Marker
        //name, email, username
        function addUser(post, callback){
            console.log("adding user data");
            $.ajax({
                method: "POST",
                url: "/api/users",
                data: post
            }).then( function(resp){
                console.log(resp);
                newUserId = resp.id;

                callback(newLocation, addPhoto);
            })
        };

        //capture variables
        var newUser = {
            name: $("#photogName").val().trim(),
            username: $("#username").val().trim(),
            email: $("#email").val().trim()
        }; 
        
        var locationName = "UNCC Uptown Campus";
        var lat = 35.2284396;
        var lng = 80.837108;
        var address = "320 E 9th St, Charlotte, NC, 28202" ;
        var city;
        
        var newLocation = {
            name: locationName
            .trim(),
            address: address
            .trim(),
            type: "Photo-Op",
            lat: lat,
            lng: lng
        };

        //add user and set up call back
        addUser(newUser, addMarker);
    };

    function addMarker(post, callback) {
        //data to go into markers table  
        console.log('adding marker')
            $.ajax({
                method: "POST",
                url: "/api/markers",
                data: post
            }).then( function(resp){
                // response.json(resp.get('id'))
                console.log(resp.id);
                newMarkerId = resp.id;
                
                var newPhoto = {
                    UserId: newUserId,
                    MarkerId: newMarkerId,
                    photo_url: "../uploads/mathesonbridge.jpg",//photoURL,
                    photog_notes: $("#photogNotes").val(),
                    date: $("#date").val(),
                };

                callback(newPhoto);
            })
        };

    function addPhoto(post) {
        console.log('adding photo')
        $.ajax({
            method: "POST",
            url: "/api/photos",
            data: post
        }).then(function(resp){
            console.log(resp);
        })
    };
    
});