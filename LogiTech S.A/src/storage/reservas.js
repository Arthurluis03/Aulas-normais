export const reservas =
  JSON.parse(localStorage.getItem("reservas")) || [];

export function salvarReservas() {
  localStorage.setItem("reservas", JSON.stringify(reservas));
}
