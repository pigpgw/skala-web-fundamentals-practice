const STORAGE_KEY = "seoul-travel-large-text";
const root = document.documentElement;
const toggleButton = document.querySelector(".text-size-toggle");

function updateTextSize(isLarge) {
  root.classList.toggle("large-text", isLarge);
  toggleButton.setAttribute("aria-pressed", String(isLarge));
  toggleButton.textContent = isLarge ? "기본 글씨" : "큰 글씨";
}

let savedLargeText = false;

try {
  savedLargeText = localStorage.getItem(STORAGE_KEY) === "true";
} catch {
  savedLargeText = false;
}

updateTextSize(savedLargeText);

toggleButton.addEventListener("click", () => {
  const isLarge = !root.classList.contains("large-text");

  updateTextSize(isLarge);

  try {
    localStorage.setItem(STORAGE_KEY, String(isLarge));
  } catch {
    // 저장소를 사용할 수 없어도 현재 화면의 글자 크기 변경은 유지합니다.
  }
});
