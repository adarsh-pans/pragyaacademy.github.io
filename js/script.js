// ------------------------------------- Image Slider Javascript Section ---------------------------- 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}
//-------x---------x------------x--------- Image Slider Javascript Section ---------x-------x----------x-----







// ------------------------------------- Show more in Percentage Skill ---------------------------- 

function SeeMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("more_btn_in_per");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}

// ---------x--------------x----------x- Show more in Percentage Skill-----x----------x-----------x-------

