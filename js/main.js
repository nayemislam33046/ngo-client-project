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

const dropdowns = document.querySelectorAll(".nav-item.dropdown");

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector("a");

  trigger.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation(); // 🔥 very important

    // অন্য dropdown বন্ধ
    dropdowns.forEach(d => {
      if (d !== dropdown) d.classList.remove("active");
    });

    dropdown.classList.toggle("active");
  });
});

// 🔥 outside click
document.addEventListener("click", () => {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove("active");
  });
});



// custom select dropdown
document.addEventListener("DOMContentLoaded", () => {

  const customSelects = document.querySelectorAll(".custom-select");
  if (!customSelects.length) return;

  customSelects.forEach(customSelect => {

    const trigger = customSelect.querySelector(".select-trigger");
    const triggerText = trigger.querySelector("span");
    const options = customSelect.querySelectorAll(".select-options li");
    const realSelect = customSelect.querySelector("select");

    if (!trigger || !realSelect || !options.length) return;

    // open / close
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();

      // close others
      customSelects.forEach(cs => {
        if (cs !== customSelect) cs.classList.remove("open");
      });

      customSelect.classList.toggle("open");
    });

    // option click
    options.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();

        const value = option.dataset.value;

        // set UI text
        triggerText.textContent = value;

        // set real select value
        realSelect.value = value;

        customSelect.classList.remove("open");
      });
    });

  });

  // click outside
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".custom-select.open")
      .forEach(cs => cs.classList.remove("open"));
  });

});

