const params = new URLSearchParams(window.location.search);
const name = params.get("fullName");
const id = params.get("loginId");
const password = params.get("password");
const email = params.get("email");
const phoneNumber = params.get("phone");
const gender = params.get("gender");
const interests = params.getAll("interests");
const region = params.get("region");
const termsAccepted = params.get("termsAccepted");

const resultFullName = document.getElementById("result-full-name");
const resultLoginId = document.getElementById("result-login-id");
const resultPassword = document.getElementById("result-password");
const resultEmail = document.getElementById("result-email");
const resultPhone = document.getElementById("result-phone");
const resultGender = document.getElementById("result-gender");
const resultInterests = document.getElementById("result-interests");
const resultRegion = document.getElementById("result-region");
const resultTermsAccepted = document.getElementById("result-terms-accepted");

resultFullName.textContent = name;
resultLoginId.textContent = id;
resultPassword.textContent = password;
resultEmail.textContent = email;
resultPhone.textContent = phoneNumber;
resultGender.textContent = gender;
resultInterests.textContent = interests.join(", ");
resultRegion.textContent = region;
resultTermsAccepted.textContent =
  termsAccepted === "on" ? "동의함" : "동의하지 않음";
