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
