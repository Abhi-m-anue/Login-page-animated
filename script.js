const handleLogin = () => {
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("active");
  const loginTxt = document.querySelector(".login-txt");
  loginTxt.textContent = "";

  const loginCard = document.querySelector(".login-card");
  loginCard.classList.add("close-animation");
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.add("close-animation");

  const rightSection = document.querySelector(".image");
  rightSection.classList.add("img-shrink");
};

const handleToggle = () => {
  const togglePassword = document.getElementById("toggle-password");
  const passwordInput = document.getElementById("password");
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "Show" : "Hide";
};
