// SMOOTH SCROLL 
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // fix for bottom (contact)
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 5
  ) {
    current = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// SIMPLE FADE-IN ANIMATION
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// FORM VALIDATION
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // simple validation
  if (name === "" || email === "" || message === "") {
    messageBox.style.color = "red";
    messageBox.textContent = "Please fill in all fields.";
    return;
  }

  // email check
  if (!email.includes("@") || !email.includes(".")) {
    messageBox.style.color = "red";
    messageBox.textContent = "Enter a valid email.";
    return;
  }

  // success
  messageBox.style.color = "lightgreen";
  messageBox.textContent = "Message sent successfully!";

  form.reset();
});
