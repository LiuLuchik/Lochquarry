// ------Banner----

indexValue = 0;
function SlideShow() {
  setTimeout(SlideShow, 3500);
  var x;
  const img = document.querySelectorAll(".carousel");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }

  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue - 1].style.display = "block";
}
SlideShow();
