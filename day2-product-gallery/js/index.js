const root = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    themeButton.textContent = "🌙 다크";
  } else {
    root.setAttribute("data-theme", "dark");
    themeButton.textContent = "☀️ 라이트";
  }
});
