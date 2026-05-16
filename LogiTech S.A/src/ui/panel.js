import {
  panel,
  openBtn,
  closeBtn
} from "../dom/elements.js";

export function iniciarPanel() {

  openBtn.addEventListener("click", () => {
    panel.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.add("hidden");
  });

}