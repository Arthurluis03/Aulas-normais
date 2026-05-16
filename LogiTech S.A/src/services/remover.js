import {
  Room_Delete,
  Password_Delete
} from "../dom/elements.js";

import {
  reservas,
  salvarReservas
} from "../storage/reservas.js";

export function removerReserva() {

  const salaDelete =
    Room_Delete.value.trim().toUpperCase();

  const senhaDelete =
    Password_Delete.value.trim();

  const index = reservas.findIndex((reserva) => {
    return (
      reserva.sala.toUpperCase() === salaDelete &&
      reserva.Senha === senhaDelete
    );
  });

  if (index === -1) {
    alert("Não encontrado");
    return;
  }

  reservas.splice(index, 1);

  salvarReservas();
}