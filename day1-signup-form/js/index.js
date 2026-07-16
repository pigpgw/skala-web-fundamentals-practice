const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("fullName");
  const id = formData.get("loginId");
  const password = formData.get("password");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const gender = formData.get("gender");
  const interests = formData.getAll("interests");
  const region = formData.get("region");
  const termsAccepted = formData.get("termsAccepted");
  const data = {
    name,
    id,
    hasPassword: password ? true : false,
    email,
    phone,
    gender,
    interests,
    region,
    termsAccepted,
  };

  sessionStorage.setItem("signupData", JSON.stringify(data));

  // 회원가입 완료 페이지로 이동
  window.location.href = "./result.html";
});
