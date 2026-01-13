// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavigation();
  initDonationForm();
  initVideoPlayers();
  initGallery();
  initScrollEffects();
  initLiveChat();
  initMobileMenu();
});

// custom js
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


// video section 
document.querySelectorAll(".video-thumbnail").forEach((video) => {
    video.addEventListener("click", function () {
      const videoURL = this.dataset.video;

      this.innerHTML = `
        <iframe 
          src="${videoURL}"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      `;
    });
  });

// Navigation functionality
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const navLinks = document.querySelectorAll(".nav-item a");

  // Add click handlers for navigation items
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link) {
      link.addEventListener("click", function (e) {
        // Remove active class from all items
        navItems.forEach((navItem) => navItem.classList.remove("active"));

        // Add active class to clicked item
        item.classList.add("active");

        // Handle smooth scrolling for anchor links
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    }
  });

  // Handle dropdown menus
  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");
  dropdownItems.forEach((item) => {
    const link = item.querySelector("a");
    const svg = item.querySelector("svg");

    if (link && svg) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        // Toggle dropdown (you can implement dropdown functionality here)
        console.log("Dropdown clicked:", link.textContent);
      });
    }
  });
}

// Donation form functionality
function initDonationForm() {
  const donationForm = document.querySelector(".donation-form");
  const donateBtn = document.querySelector(".btn-donate");

  if (donateBtn) {
    donateBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        phoneEmail:
          document.querySelector('.form-field input[type="text"]')?.value || "",
        amount:
          document.querySelector('.form-field input[type="number"]')?.value ||
          "",
      };

      // Validate form
      if (!formData.phoneEmail) {
        alert("Please enter your phone number or email");
        return;
      }

      if (!formData.amount) {
        alert("Please enter donation amount");
        return;
      }

      // Simulate donation process
      showDonationModal(formData);
    });
  }

  // Add form field inputs if they don't exist
  addFormInputs();
}

function addFormInputs() {
  const formFields = document.querySelectorAll(".form-field");

  formFields.forEach((field, index) => {
    const label = field.querySelector("label");
    if (label && !field.querySelector("input")) {
      const input = document.createElement("input");

      if (index === 0) {
        // Phone/Email field
        input.type = "text";
        input.placeholder = "Enter phone or email";
      } else if (index === 1) {
        // Amount field
        input.type = "number";
        input.placeholder = "Enter amount";
        input.min = "1";
      }

      input.style.cssText = `
                border: none;
                outline: none;
                background: transparent;
                flex: 1;
                font-size: 16px;
                color: #363636;
            `;

      field.appendChild(input);
    }
  });
}

// custom select for donation
const select = document.querySelector(".custom-select");
const head = select.querySelector(".select-head");
const options = select.querySelectorAll(".select-options li");
const realSelect = document.getElementById("donation");

head.addEventListener("click", () => {
  select.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    head.textContent = option.textContent;
    realSelect.value = option.dataset.value;
    select.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("active");
  }
});

function showDonationModal(data) {
  // Create modal
  const modal = document.createElement("div");
  modal.className = "donation-modal";
  modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Confirm Donation</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p><strong>Contact:</strong> ${data.phoneEmail}</p>
                    <p><strong>Amount:</strong> $${data.amount}</p>
                    <p>Thank you for your generous donation to ASH Foundation!</p>
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary cancel-donation">Cancel</button>
                    <button class="btn-primary confirm-donation">Confirm Donation</button>
                </div>
            </div>
        </div>
    `;

  // Add modal styles
  const style = document.createElement("style");
  style.textContent = `
        .donation-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-content {
            background: white;
            border-radius: 8px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .modal-header h3 {
            margin: 0;
            color: #3D82CF;
        }
        .close-modal {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        .modal-body p {
            margin-bottom: 10px;
            color: #333;
        }
        .modal-footer {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 20px;
        }
    `;

  document.head.appendChild(style);
  document.body.appendChild(modal);

  // Add event listeners
  modal.querySelector(".close-modal").addEventListener("click", () => {
    document.body.removeChild(modal);
    document.head.removeChild(style);
  });

  modal.querySelector(".cancel-donation").addEventListener("click", () => {
    document.body.removeChild(modal);
    document.head.removeChild(style);
  });

  modal.querySelector(".confirm-donation").addEventListener("click", () => {
    // Simulate successful donation
    alert("Thank you! Your donation has been processed successfully.");
    document.body.removeChild(modal);
    document.head.removeChild(style);
  });

  // Close on overlay click
  modal.querySelector(".modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      document.body.removeChild(modal);
      document.head.removeChild(style);
    }
  });
}

// Video player functionality
function initVideoPlayers() {
  const playButtons = document.querySelectorAll(".play-button");

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const videoCard = this.closest(".video-card");
      const thumbnail = videoCard.querySelector(".video-thumbnail");

      // Create video element
      const video = document.createElement("video");
      video.controls = true;
      video.autoplay = true;
      video.style.cssText = `
                width: 100%;
                height: 207px;
                object-fit: cover;
            `;

      // Replace thumbnail with video (in a real implementation, you'd use actual video URLs)
      thumbnail.innerHTML = "";
      thumbnail.appendChild(video);

      // For demo purposes, show a message
      video.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f0f0; color: #666;">
                    <p>Video would play here</p>
                </div>
            `;
    });
  });
}

// Gallery functionality
function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      if (img) {
        showImageModal(img.src, img.alt);
      }
    });

    // Add hover effect
    item.style.cursor = "pointer";
  });
}

function showImageModal(src, alt) {
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <img src="${src}" alt="${alt}" style="max-width: 100%; max-height: 80vh; object-fit: contain;">
            </div>
        </div>
    `;

  // Add modal styles
  const style = document.createElement("style");
  style.textContent = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
        }
        .image-modal .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .image-modal .modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .image-modal .close-modal {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
    `;

  document.head.appendChild(style);
  document.body.appendChild(modal);

  // Add event listeners
  modal.querySelector(".close-modal").addEventListener("click", () => {
    document.body.removeChild(modal);
    document.head.removeChild(style);
  });

  modal.querySelector(".modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      document.body.removeChild(modal);
      document.head.removeChild(style);
    }
  });
}

// Scroll effects
function initScrollEffects() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll to top functionality
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #3D82CF;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

  document.body.appendChild(scrollToTopBtn);

  // Show/hide scroll to top button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Live chat functionality
function initLiveChat() {
  const chatButton = document.querySelector(".chat-button");

  if (chatButton) {
    chatButton.addEventListener("click", function () {
      // In a real implementation, this would open a chat widget
      alert(
        "Live chat would open here. This would typically connect to a chat service like Intercom, Zendesk, or a custom chat system."
      );
    });
  }
}

// Mobile menu functionality
function initMobileMenu() {
  // Create mobile menu button
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = "mobile-menu-btn";
  mobileMenuBtn.innerHTML = "☰";
  mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: white;
        cursor: pointer;
        padding: 10px;
    `;

  // Add mobile menu button to header
  const topBar = document.querySelector(".top-bar-content");
  if (topBar) {
    topBar.appendChild(mobileMenuBtn);
  }

  // Show/hide mobile menu button based on screen size
  function toggleMobileMenu() {
    const nav = document.querySelector(".navigation");
    const navMenu = document.querySelector(".nav-menu");

    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = "block";
      navMenu.style.display = "none";
    } else {
      mobileMenuBtn.style.display = "none";
      navMenu.style.display = "flex";
    }
  }

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    const isVisible = navMenu.style.display === "flex";

    navMenu.style.display = isVisible ? "none" : "flex";
    navMenu.style.flexDirection = "column";
    navMenu.style.position = "absolute";
    navMenu.style.top = "100%";
    navMenu.style.left = "0";
    navMenu.style.right = "0";
    navMenu.style.background = "#002556";
    navMenu.style.padding = "20px";
    navMenu.style.zIndex = "1000";
  });

  // Handle window resize
  window.addEventListener("resize", toggleMobileMenu);

  // Initial check
  toggleMobileMenu();
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add loading states
function showLoading(element) {
  element.classList.add("loading");
}

function hideLoading(element) {
  element.classList.remove("loading");
}

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone.replace(/\s/g, ""));
}

// Error handling
window.addEventListener("error", function (e) {
  console.error("An error occurred:", e.error);
  // In a production environment, you might want to send this to an error tracking service
});

// Performance monitoring
window.addEventListener("load", function () {
  // Log page load time
  const loadTime = performance.now();
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Accessibility improvements
document.addEventListener("keydown", function (e) {
  // Close modals with Escape key
  if (e.key === "Escape") {
    const modals = document.querySelectorAll(".donation-modal, .image-modal");
    modals.forEach((modal) => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    });
  }
});

// Add focus management for better accessibility
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}
