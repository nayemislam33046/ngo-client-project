// get full Year
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
  },
);
motions.forEach((el) => observer.observe(el));

// navigation
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector(".menu-overlay");
const menuClose = document.querySelector(".menu-close");
function openMenu() {
  nav.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");
}
function closeMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}
menuBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);
menuClose.addEventListener("click", closeMenu);

const dropdowns = document.querySelectorAll(".nav-item.dropdown");
dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector("a");
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    dropdowns.forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });
    dropdown.classList.toggle("active");
  });
});

document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});

// custom select dropdown
document.addEventListener("DOMContentLoaded", () => {
  const customSelects = document.querySelectorAll(".custom-select");
  if (!customSelects.length) return;
  customSelects.forEach((customSelect) => {
    const trigger = customSelect.querySelector(".select-trigger");
    const triggerText = trigger.querySelector("span");
    const options = customSelect.querySelectorAll(".select-options li");
    const realSelect = customSelect.querySelector("select");

    if (!trigger || !realSelect || !options.length) return;

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      customSelects.forEach((cs) => {
        if (cs !== customSelect) cs.classList.remove("open");
      });
      customSelect.classList.toggle("open");
    });

    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const value = option.dataset.value;
        triggerText.textContent = value;
        realSelect.value = value;
        customSelect.classList.remove("open");
      });
    });
  });
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".custom-select.open")
      .forEach((cs) => cs.classList.remove("open"));
  });
});


// language selector
  const languageSelector = document.querySelector(".language-selector");
  const toggle = languageSelector.querySelector(".language-toggle");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    languageSelector.classList.toggle("active");
  });

  // click outside to close
  document.addEventListener("click", () => {
    languageSelector.classList.remove("active");
  });