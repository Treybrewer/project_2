
//THIS NEEDS TO BE UPDATED TO ACT ON THE CLICKING OF THE MARKER (not the map div)
$(document).on("click", "#map", populatePictures);


function populatePictures(){
    $.get("/api/photos", function (data){
        console.log(data);
        for (i=0; i < data.length; i++){
            console.log(data[i].photo_url);
            var pic = data[i].photo_url;

            //add to DOM
        }
    });
};

