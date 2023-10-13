const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  const footer = document.getElementById("footer");
  footer.style.top = "20px";
  footer.style.bottom = "auto";
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  const footer = document.getElementById("footer");
  footer.style.top = "auto";
  footer.style.bottom = "0";
});

