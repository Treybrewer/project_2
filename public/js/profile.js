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

// Get the modal
var modal = document.getElementById("#uploadModal");

// Get the button that opens the modal
var btn = document.getElementById("#addPhoto");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}