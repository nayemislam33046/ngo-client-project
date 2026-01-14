document.getElementById("getfullyear").textContent = new Date().getFullYear();

//motion effects
window.addEventListener("load", () => {
  document.querySelector(".motion-nav").classList.add("show");
});

const motions = document.querySelectorAll(".motion");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

motions.forEach((el) => observer.observe(el));

// custom select dropdown
const customSelect = document.querySelector(".custom-select");
const trigger = customSelect.querySelector(".select-trigger");
const option = customSelect.querySelectorAll(".select-options li");
const realSelects = customSelect.querySelector("select");

trigger.addEventListener("click", () => {
  customSelect.classList.toggle("open");
});

option.forEach((option) => {
  option.addEventListener("click", () => {
    trigger.querySelector("span").textContent = option.textContent;
    realSelects.value = option.dataset.value;
    customSelect.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    customSelect.classList.remove("open");
  }
});

// navigation 

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector(".menu-overlay");
const menuClose = document.querySelector(".menu-close");

function openMenu(){
  nav.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu(){
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

menuBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);
menuClose.addEventListener("click", closeMenu);

/* Dropdown toggle for tablet */
document.querySelectorAll(".nav-item.dropdown").forEach(item=>{
  item.addEventListener("click", ()=>{
    item.classList.toggle("active");
  });
});

// hero slider

const slider = document.querySelector(".hero-slider");
const track = document.querySelector(".hero-track");
let slides = Array.from(track.children);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsBox = document.querySelector(".hero-dots");

let index = 1;
let startX = 0;
let auto;
let isMoving = false;

/* clone */
const first = slides[0].cloneNode(true);
const last = slides[slides.length-1].cloneNode(true);
track.appendChild(first);
track.insertBefore(last, slides[0]);
slides = Array.from(track.children);

track.style.transform = "translateX(-100%)";

/* dots */
for(let i=0;i<slides.length-2;i++){
  const dot = document.createElement("span");
  dot.onclick = ()=>safeGo(i+1);
  dotsBox.appendChild(dot);
}

function updateDots(){
  let real = index-1;
  if(real < 0) real = dotsBox.children.length-1;
  if(real >= dotsBox.children.length) real = 0;
  [...dotsBox.children].forEach(d=>d.classList.remove("active"));
  dotsBox.children[real].classList.add("active");
}

function safeGo(i){
  if(isMoving) return;
  isMoving = true;
  index = i;
  track.style.transition = "0.5s ease";
  track.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

/* infinite */
track.addEventListener("transitionend", ()=>{
  if(index === 0){
    track.style.transition = "none";
    index = slides.length-2;
    track.style.transform = `translateX(-${index*100}%)`;
  }
  if(index === slides.length-1){
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${index*100}%)`;
  }
  isMoving = false;
});

/* buttons */
next.onclick = ()=>{ safeGo(index+1); resetAuto(); }
prev.onclick = ()=>{ safeGo(index-1); resetAuto(); }

/* drag */
slider.addEventListener("mousedown", e=>{
  startX = e.clientX;
  stopAuto();
});
slider.addEventListener("mouseup", e=>{
  let endX = e.clientX;
  if(startX - endX > 50) next.click();
  if(endX - startX > 50) prev.click();
  startAuto();
});

/* touch */
slider.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
  stopAuto();
});
slider.addEventListener("touchend", e=>{
  let endX = e.changedTouches[0].clientX;
  if(startX - endX > 50) next.click();
  if(endX - startX > 50) prev.click();
  startAuto();
});

/* autoplay */
function startAuto(){
  if(auto) return;              // already running
  auto = setInterval(()=>{
    safeGo(index+1);
  },3000);
}

function stopAuto(){
  clearInterval(auto);
  auto = null;                  // important
}

function resetAuto(){
  stopAuto();
  startAuto();
}

safeGo(1);
startAuto();