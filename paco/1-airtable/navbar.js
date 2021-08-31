const navbar = document.querySelector('#nav')
const btnToggle = document.querySelector('.btn-toggle')
const closeBtn = document.querySelector('.btn-close')
const sidebar = document.querySelector('.sidebar')
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})
btnToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-nav')
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-nav')
})

// slider

const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})
let counter = 0
nextBtn.addEventListener('click', function () {
  counter++
  carousel()
})

prevBtn.addEventListener('click', function () {
  counter--
  carousel()
})

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none'
  }
  if (counter > 0) {
    prevBtn.style.display = 'block'
  } else {
    prevBtn.style.display = 'none'
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

prevBtn.style.display = 'none'


// autowriter


const text = document.getElementById("text-1");

const progress = `As-salamu alaykum!!bienvenue chez dieuf dieul couture.✂️✂️✂️✂️✂️`

let index = 1;
setInterval(writeText,300)

function writeText(){
  text.innerHTML = progress.slice(0, index);

  index ++;
  if(index > progress.length){
    index = 1;
  }
}



