function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    function checkInView() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + windowTop;
            const elementBottom = elementTop + element.clientHeight;

            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    checkInView(); // Check on load in case element is already in view
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll1');

    function checkInView() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + windowTop;
            const elementBottom = elementTop + element.clientHeight;

            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    checkInView(); // Check on load in case element is already in view
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll2');

    function checkInView() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + windowTop;
            const elementBottom = elementTop + element.clientHeight;

            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    checkInView(); // Check on load in case element is already in view
});

