function sendMail() {
  var params = {
    name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

    const serviceID = "service_lnmo3vp";
    const templateID = "template_nea4qdu";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("fullname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            window.alert("Your message sent sucessfully!");
        })
    .catch((err) => console.log(err));
}

// navbar function

document.addEventListener('click', function(event) {
    var isClickInsideNavbar = event.target.closest('.navbar');

    if (!isClickInsideNavbar) {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.remove('show');
    }
  });

  function hideMobileMenu() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.classList.contains('collapsed')) {
      return; // Navbar is already collapsed, no need to do anything
    }
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  }

  $(document).ready(function() {
    $('.navbar-nav .nav-link').on('click', function() {
      $('.navbar-nav').find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.querySelector(".navbar").style.top = "0";
} else {
  document.querySelector(".navbar").style.top = "-75px";
}
prevScrollpos = currentScrollPos;
}

// scroll reveal
ScrollReveal({
reset: true,
distant: '80px',
duration: 1500,
delay: 400
});

// about-img
ScrollReveal().reveal('.hero-img',{ origin: 'right' });

// card interval animation
ScrollReveal().reveal('.cards', {interval: 500});