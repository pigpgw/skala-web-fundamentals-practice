const displaySignUpResult = () => {
  const signupData = sessionStorage.getItem("signupData");
  const data = JSON.parse(signupData);

  const name = data.name;
  const id = data.id;
  const password = data.hasPassword ? "********" : "-";
  const email = data.email;
  const phoneNumber = data.phone ? data.phone : "-";
  const gender = data.gender;
  const interests = data.interests;
  const region = data.region;
  const termsAccepted = data.termsAccepted;

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
  resultInterests.textContent =
    interests.length > 0 ? interests.join(", ") : "-";
  resultRegion.textContent = region;
  resultTermsAccepted.textContent =
    termsAccepted === "on" ? "동의함" : "동의하지 않음";
};

displaySignUpResult();
