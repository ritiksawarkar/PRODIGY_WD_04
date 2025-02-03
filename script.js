function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");

  // Update the menu icon for accessibility
  const menuIcon = document.querySelector(".menu-icon");
  const isExpanded = navLinks.classList.contains("show");
  menuIcon.setAttribute("aria-expanded", isExpanded);
}

// Automatically hide the menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav-links");
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      const menuIcon = document.querySelector(".menu-icon");
      menuIcon.setAttribute("aria-expanded", false);
    }
  });
});
