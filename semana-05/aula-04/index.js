import { createCard } from "./card.js";

document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());

window.getInfo = function () {
  const name = document.getElementById("form-name").value;
  const imageUrl = document.getElementById("form-image-url").value;
  const description = document.getElementById("form-description").value;

  createCard({ name, imageUrl, description });
};
