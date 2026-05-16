import { Section, Room } from "../dom/elements.js";
import { salas } from "../data/salas.js";

Section.addEventListener("change", () => {
  const setor = Section.value.trim().toUpperCase();

  rooms.innerHTML = "";

  if (!salas[setor]) return;

  salas[setor].forEach((sala) => {
    const option = document.createElement("option");
    option.value = sala;
    rooms.appendChild(option);
  });
});
