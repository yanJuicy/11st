var slides = document.querySelectorAll('.banner-inside img');
var current = 0;

function showSlidesAuto() {
    var slides = document.querySelectorAll('.banner-inside img');
    var bannerContainer = document.querySelector('.banner-container');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    current++;
    if (current > slides.length) {
      current = 1;
    }
    slides[current - 1].style.display = 'block';
    setContainerColor(current, bannerContainer);
    setTimeout(() => {
      showSlidesAuto();
    }, 5000);
}

function setContainerColor(current, banner) {
    if (current == 1) {
        banner.style.backgroundColor = "#becaf7";
    } else if (current == 2) {
        banner.style.backgroundColor = "#ffecf0";
    } else if (current == 3) {
        banner.style.backgroundColor = "#dbe99f";
    }
}

showSlidesAuto();