var originalPlaceholder = "";

function changePlaceholder(input) {
  originalPlaceholder = input.placeholder; 
  input.placeholder = ""; 
}

function restorePlaceholder(input) {
  if (input.value === "") {
    input.placeholder = originalPlaceholder; 
  }
}

  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
  
    function handleScroll() {
      if (window.scrollY > 80) {
        navbar.style.backgroundColor = "rgb(1, 1, 46)"; 
        navbar.style.opacity = "90%";
        navbar.style.padding = "15px 0"; 
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.padding = "15px 0";
      }
    }
  
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
  });
 

  function smoothScroll(target) {
    var targetElement = document.getElementById(target);
  
    if (targetElement) {
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.scrollY;
      var distance = targetPosition - startPosition;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, 1500);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed <1500) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  }

/*loading animation*/  
 document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.content').style.display = 'block';
  document.querySelector('.loading-overlay').style.display = 'none';
});

/*Active navbar elementi*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let dropdownNavLinks = document.querySelectorAll('.dropdown_menu li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });

            dropdownNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        };
    });
};

/*Mobile navbar bars-close*/
const toggleBtn =document.querySelector('.toggle_btn'); 
const toggleBtnIcon =document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa fa-times'
    : 'fa fa-bars'
};
 






 