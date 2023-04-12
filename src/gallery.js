var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close-gall")[0];

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndexGall = 1;
showSlidesGall(slideIndexGall);

function plusSlides(n) {
  showSlidesGall((slideIndexGall += n));
}

function currentSlide(n) {
  showSlidesGall((slideIndexGall = n));
}

function showSlidesGall(n) {
  let i;
  let slidesGall = document.getElementsByClassName("mySlidesGall");
  if (n > slidesGall.length) {
    slideIndexGall = 1;
  }
  if (n < 1) {
    slideIndexGall = slidesGall.length;
  }

  for (i = 0; i < slidesGall.length; i++) {
    slidesGall[i].style.display = "none";
  }

  slidesGall[slideIndexGall - 1].style.display = "block";
}
