$(window).on("load", function(){
  $(".loader-wrapper").fadeOut(1400, function() {
    console.log("Loader finished – initializing Reflexion swiper");
    var reflexionSwiper = new Swiper('.reflexion-swiper', {
      loop: true,
      slidesPerView: 1,
      effect: 'slide',
      autoHeight: true,
      spaceBetween: 0,
      pagination: {
        el: '.reflexion-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.reflexion-swiper .swiper-button-next',
        prevEl: '.reflexion-swiper .swiper-button-prev'
      }
    });
    // Lower the z-index of the swiper container
    $('.reflexion-swiper').css('z-index', '1');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navbarLinks = document.querySelector('.navbar-links');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      navbarLinks.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      navbarLinks.classList.remove('open');
      menuOpen = false;
    }
  });

  window.myFunction = function(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }

  window.myFunction1 = function() {
    var dots = document.getElementById("dots1")
    var moreText = document.getElementById("more1")
    var btnText = document.getElementById("myBtn1")
  
    if (dots.style.display === "none") {
      dots.style.display = "inline"
      btnText.innerHTML = "Read More"
      moreText.style.display = "none"
    } else {
      dots.style.display = "none"
      btnText.innerHTML = "Read Less"
      moreText.style.display = "inline"
    }
  }

  window.myFunction2 = function() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }

  window.myFunction3 = function() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }
});
