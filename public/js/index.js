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

// snap functionality
// declaring the scroll function
window.smoothScroll = function (target) {
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

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 10);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

function initMap() {

    var test = {
        id: 2,
        name: "Panthers Stadium",
        address: "800 S Mint St",
        type: "Photo-Op",
        lat: 35.2258,
        lng: 80.8528
    };

    testMarker(test);

    function testMarker(test) {
        $.ajax({
          method: "POST",
          url: "/api/markers",
          data: test
        })
    };


    var options = {
        zoom: 13,
        center: { lat: 35.2271, lng: -80.8431 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    dataRead();

    function dataRead() {
        $.get("/api/markers", function (data) {

            for (var i = 0; i < data.length; i++) {

                console.log(
                    `
                     address: ${data[i].address}\n
                     lat: ${data[i].lat}\n
                     lng: ${data[i].lng}\n
                     name: ${data[i].name}\n
                     test: 20
                `);
                var newLat = data[i].lat;
                var newLng = data[i].lng

                console.log(`
                            lat: ${newLat}\n
                            lng: ${newLng}`)

                var marker = new google.maps.Marker({
                    position: { lat: newLat, lng: -newLng },
                    map: map,
                });

                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                    smoothScroll(document.getElementById('userPhotos'));
                });
    
                var infowindow = new google.maps.InfoWindow({
                    maxWidth: 200,
                    content: data[i].name,
                });
            };

        });


    };

};





