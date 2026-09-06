const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

document.querySelectorAll(".course-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "Enrolled ✓";
    button.disabled = true;
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thank you! Your message has been submitted.";
  event.target.reset();
});
