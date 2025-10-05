// LANG DROPDOWN
const dropdown = document.getElementById("lang-dropdown");
const button = document.getElementById("lang-button");
const links = document.querySelectorAll(".dropdown-content a");

// Toggle dropdown
button.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

// Update current language when clicked
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const flag = link.getAttribute("data-flag");
    const name = link.getAttribute("data-name");

    // Update button content
    button.innerHTML = `<span class="${flag}"></span> ${name} ▼`;

    // Close dropdown
    dropdown.classList.remove("show");
  });
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});