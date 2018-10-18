// nav-bar functionality
const nav = document.getElementById('nav'); 
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            nav.style.background = "#4D4e4f";
            nav.style.boxShadow = "0px 4px 2px #33333"
        } else  {
            nav.style.background = "transparent";
            nav.style.boxShadow = "0px 4px 2px #33333"
        } 
    }

// snap functionality
// declaring the scroll function
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

function initMap() {
    var options = {
        zoom: 13,
        center: { lat: 35.2271, lng: -80.8431 }
    }
    var map = new
        google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListener(map, 'click',

        function (event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            console.log(lat, lng);
            addMarker(lat, lng);
        }
    );






    function addMarker(lat, lng) {
        // this will add a marker to the map given the lat/lng of the on click position
        var marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
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
        // hopefully will log out content added to info window
        // infowindow.addListener('click', function () {
        //     console.log("fired1");
        //     windowInputCapture();
        // });

        google.maps.event.addListener(infowindow, "closeclick", function () {
            console.log('trigger close');
            console.log($("infoWindowInput").val());
            windowInputCapture();
        });


    };


    function windowInputCapture() {
        console.log("fired2");
        var capture = $("#infoWindowInput").val();
        
    };


};




