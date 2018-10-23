$(document).ready(function() {
    /* global moment */

    $(document).on("click", "#uploadPhoto", handleUpload);
    // $(document).on("click", "button.cancelbtn", handleSignUpCancel);
    
    //function for adding userdata FIRST
    //name, email, username
    function addUser(userData){
        $.post("/api/users", userData)
    }

    function findUser(username)
    //function for adding photo data
    //photog notes, url, time of day, date

    //function for adding marker data
    //lat, lng

    function handleSignUp(){
        event.preventDefault();
        //data to go into users table
        var name = $("#photogname").val();
        var username = $("#username").val();
        var email = $("#email").val();

        //data to go into photo table
        var photoDate = ("#date").val();
        var photogNotes = ("#photogNotes").val();
        var photoURL;
        
        //data to go into markers table
        var lat;
        var lng;
        var address;
        var city;
        //validate password matches pswrepeat
        console.log(username)

    
        var newUser = {
            name: name
              .val()
              .trim(),
            username: username
              .val()
              .trim(),
            email: email.val().trim()
        };
             
        addUser(newUser);

        var newLocation = {
            name: name
            .val()
            .trim(),
            address: address
            .val()
            .trim(),
            type: "Photo-Op",
            lat: lat
            .val()
            .trim(),
            lng: lng
            .val()
            .trim()
        };

        // var test = {
        //     id: 1,
        //     name: "Charlotte",
        //     address: "800 S Mint St",
        //     type: "Photo-Op",
        //     lat: 8.897979,
        //     lng: 8.897979
        // };

        addMarker(test);

        function addMarker(post) {
            $.ajax({
              method: "POST",
              url: "/api/markers",
              data: post
            }).then()
        };
    };

    
});
  

