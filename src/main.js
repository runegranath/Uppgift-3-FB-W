import "./main.scss";

const frogContainer = document.getElementById("frog-animation");

if (frogContainer) {
  frogContainer.addEventListener("click", () => {
    frogContainer.classList.add("is-active");
  });
}
