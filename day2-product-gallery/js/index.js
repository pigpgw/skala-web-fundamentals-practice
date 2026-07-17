const root = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeButton.textContent = "☀️ 라이트";
}

themeButton.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    themeButton.textContent = "🌙 다크";
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    themeButton.textContent = "☀️ 라이트";
    localStorage.setItem("theme", "dark");
  }
});
