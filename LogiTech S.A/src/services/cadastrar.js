import {
  NamePeople,
  Section,
  Room,
  FirstHour,
  LastHour,
  Password,
  ButtonCadastrar
} from "../dom/elements.js";

import { reservas, salvarReservas } from "../storage/reservas.js";

export function cadastrarReserva() {
  const turno = document.querySelector('input[name="Hour"]:checked');

  if (
    !NamePeople.value ||
    !Section.value ||
    !Room.value ||
    !FirstHour.value ||
    !LastHour.value ||
    !turno ||
    !Password.value
  ) {
    alert("Preencha tudo");
    return false;
  }

  reservas.push({
    nome: NamePeople.value,
    Section: Section.value,
    sala: Room.value,
    FirstHour: FirstHour.value,
    LastHour: LastHour.value,
    turno: turno.value,
    Senha: Password.value,
  });

  salvarReservas();

  return true;
}
