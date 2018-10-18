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

