import { tabela } from "../dom/elements.js";

export function mostrarDados(reservas) {
  tabela.innerHTML = "";

  reservas.forEach((reserva) => {
    tabela.innerHTML += `
      <tr>
        <td>${reserva.nome}</td>
        <td>${reserva.Section}</td>
        <td>${reserva.sala}</td>
        <td>${reserva.FirstHour}</td>
        <td>${reserva.LastHour}</td>
        <td>${reserva.turno}</td>
      </tr>
    `;
  });
}