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
}




