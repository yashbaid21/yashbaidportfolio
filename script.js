// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Typing animation
const roles = ["Frontend Web Developer", "Graphic Designer", "Freelancer"];
let roleIndex = 0, charIndex = 0;
const typingSpeed = 120, erasingSpeed = 80, delayBetweenRoles = 1500;
const typingText = document.querySelector(".typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else setTimeout(eraseRole, delayBetweenRoles);
}

function eraseRole() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(typeRole, delayBetweenRoles);
});

// Scroll animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Stagger grids
const grids = document.querySelectorAll('.skills-grid, .project-grid');
grids.forEach(grid => appearOnScroll.observe(grid));
grid.classList.add('show');

// Hero particles
const particlesContainer = document.querySelector('.particles');
const numParticles = 30;
for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = Math.random() * 6 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particlesContainer.appendChild(particle);
}

const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const designCards = document.querySelectorAll('.design-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    designCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

 

