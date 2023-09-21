const slider = document.querySelector('.slider');
const leftarrow = document.querySelector('.left');
const rightarrow = document.querySelector('.right');
const indpat = document.querySelector('.controls ul');

var sectionindex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function() {
    sectionindex = ind;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (sectionindex) * -33.3 + '%)';
  });
});

rightarrow.addEventListener('click', function() {
  sectionindex = (sectionindex < 2) ? sectionindex + 1 : 2;
  document.querySelector('.controls .selected').classList.remove('selected');
  indpat.children[sectionindex].classList.add('selected');   
  slider.style.transform = 'translate(' + (sectionindex) * -33.3 + '%)';
});

leftarrow.addEventListener('click', function() {
  sectionindex = (sectionindex > 0)? sectionindex - 1 : 0;
  document.querySelector('.controls .selected').classList.remove('selected');
  indpat.children[sectionindex].classList.add('selected');
  slider.style.transform = 'translate('+ (sectionindex) * -33.3 + '%)';
});



// moving slide
const mover = document.querySelector (".mover");
let slideIndex = 0;

function slideToLeft() {
  slideIndex = (slideIndex - 1 + mover.children.length) % mover.children.length;
  updateSliderPosition();
}

function slideToRight() {
  slideIndex = (slideIndex + 1) % mover.children.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const slideWidth = mover.offsetWidth;
  mover.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

let slideInterval = setInterval(slideToRight, 2000);

mover.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

mover.addEventListener("mouseleave", () => {
  slideInterval = setInterval(slideToRight, 2000);
});


