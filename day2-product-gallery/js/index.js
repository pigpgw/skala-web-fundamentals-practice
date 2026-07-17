const root = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeButton.textContent = "☀️ 라이트";
  themeButton.setAttribute("aria-pressed", "true");
}

themeButton.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    themeButton.textContent = "🌙 다크";
    themeButton.setAttribute("aria-pressed", "false");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    themeButton.textContent = "☀️ 라이트";
    themeButton.setAttribute("aria-pressed", "true");
    localStorage.setItem("theme", "dark");
  }
});
