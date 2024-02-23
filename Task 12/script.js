document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "https://avatars.mds.yandex.net/get-verba/1540742/2a00000178874741ebe297e8ba6c4145a1c7/cattouchret",
    "https://cdn.kodixauto.ru/media/image/601405ecd655fc0001f247dc",
  ];

  const sliderImg = document.getElementById("sliderImg");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  updateImage();
  prevBtn.addEventListener("click", showPreviousImage);
  nextBtn.addEventListener("click", showNextImage);
  function updateImage() {
    sliderImg.src = images[currentIndex];
  }
  function showPreviousImage() {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateImage();
  }
  function showNextImage() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateImage();
  }
});
