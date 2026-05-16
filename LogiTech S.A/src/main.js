import { ButtonCadastrar, FirstHour, LastHour, Master_key, NamePeople, remover, Room, Section } from "./dom/elements.js";


import "./dom/salasUI.js";

import { ClearLS } from "./_admin/Admin.js";



import { troca } from '../src/dom/eyes.js';

troca()

import { cadastrarReserva } from "./services/cadastrar.js";

import { removerReserva } from "./services/remover.js";

import { reservas } from "./storage/reservas.js";

import { mostrarDados } from "./ui/tabela.js";



mostrarDados(reservas);

ButtonCadastrar.addEventListener("click", () => {
  const sucesso = cadastrarReserva();

  if (sucesso) {
    mostrarDados(reservas);
    NamePeople.value = ''
    Section.value = ''
    Room.value = ''
    FirstHour.value = ''
    LastHour.value = ''


  }
});

remover.addEventListener("click", () => {
  removerReserva();
  
  mostrarDados(reservas);
});

// const NamePeople = document.getElementById("NamePeople");
// const Section = document.getElementById("Section");
// const Room = document.getElementById("Room");
// const FirstHour = document.getElementById("FirstHour");
// const LastHour = document.getElementById("LastHour");
// const ButtonCadastrar = document.getElementById("cadastrar");
// const Livres = document.getElementById("livres");
// const tabela = document.getElementById("tabela");
// const Password = document.getElementById('Password');
// const remover = document.getElementById('remover');
// const Password_Delete = document.getElementById('Password_Delete')
// const rooms = document.getElementById("rooms");
// const Room_Delete = document.getElementById("Room_Delete");
// const Array_NamePeople = [];
// const Array_Section = [];
// const Array_Room = [];
// const Array_FirstHour = [];
// const Array_LastHour = [];
// const Array_Turno = [];
// const Array_Password = [];
// const Array_reservas = JSON.parse(localStorage.getItem("reservas")) || [];

// const salas = {
//   H: ["H1", "H2", "H3"],
//   C: ["C1", "C2", "C3"],
//   D: ["D1", "D2", "D3"],
//   J: ["J1", "J2", "J3"],
// };
// Section.addEventListener("change", () => {
//   const setor = Section.value.trim().toUpperCase();

//   Room.value = "";

//   if (!salas[setor]) {
//     Room.placeholder = "Setor inválido";
//     return;
//   }

//   Room.placeholder = `Ex: ${salas[setor][0]}`;
// });

// const panel = document.getElementById("panel");
// const openBtn = document.getElementById("openPanel");
// const closeBtn = document.getElementById("closePanel");

// openBtn.addEventListener("click", () => {
//   panel.classList.remove("hidden");
// });

// closeBtn.addEventListener("click", () => {
//   panel.classList.add("hidden");
// });

// // cadastrar

// ButtonCadastrar.addEventListener("click", () => {

//   const turno = document.querySelector('input[name="Hour"]:checked');

//   if (
//     !NamePeople.value ||
//     !Section.value ||
//     !Room.value ||
//     !FirstHour.value ||
//     !LastHour.value ||
//     !turno ||
//     !Password.value
//   ) {
//     alert("Por favor preencha todos os campos");
//     return;
//   }

//   const conflito = Array_reservas.some((reserva) => {
//   return (
//     reserva.sala === Room.value &&
//     reserva.FirstHour === FirstHour.value
//   );
// });

//   if (conflito) {
//     alert("Essa sala já está ocupada nesse horário!");
//     return;
//   }

//   Array_reservas.push({
//   nome: NamePeople.value,
//   Section: Section.value,
//   sala: Room.value,
//   FirstHour: FirstHour.value,
//   LastHour: LastHour.value,
//   turno: turno.value,
//   Senha: Password.value
// });

// //   Array_NamePeople.push(NamePeople.value);
// //   Array_Section.push(Section.value);
// //   Array_Room.push(Room.value);
// //   Array_FirstHour.push(FirstHour.value);
// //   Array_LastHour.push(LastHour.value);
// //   Array_Turno.push(turno.value);
// //   Array_Password.push(Password.value);

//   localStorage.setItem("reservas", JSON.stringify(Array_reservas));

//   mostrarDados();

//   NamePeople.value = ""
//   Section.value = ""
//   Room.value = ""
//   FirstHour.value = ""
//   LastHour.value = ""
//   Password.value = ""

//   document.querySelectorAll('input[name="Hour"]').forEach(r => {
//     r.checked = false;
//   });

// });

// Section.addEventListener("input", () => {
//   const setor = Section.value.trim().toUpperCase();

//   rooms.innerHTML = "";

//   if (!salas[setor]) return;

//   salas[setor].forEach((sala) => {
//     const option = document.createElement("option");
//     option.value = sala;
//     rooms.appendChild(option);
//   });
// });

// function mostrarDados() {
//   tabela.innerHTML = "";

//   Array_reservas.forEach((reserva) => {
//     tabela.innerHTML += `
//       <tr>
//         <td>${reserva.nome}</td>
//         <td>${reserva.Section}</td>
//         <td>${reserva.sala}</td>
//         <td>${reserva.FirstHour}</td>
//         <td>${reserva.LastHour}</td>
//         <td>${reserva.turno}</td>
//       </tr>
//     `;
//   });
// }
// remover.addEventListener('click', () => {

//     const salaDelete = Room_Delete.value.trim().toUpperCase();
//     const senhaDelete = Password_Delete.value.trim();

//     if (!salaDelete || !senhaDelete) {
//         alert("Preencha a sala e a senha!");
//         return;
//     }

//     const index = Array_reservas.findIndex((reserva) => {
//         return (
//             reserva.sala.toUpperCase() === salaDelete &&
//             reserva.Senha === senhaDelete
//         );
//     });

//     if (index === -1) {
//         alert("Sala não encontrada ou senha incorreta!");
//         return;
//     }

//     Array_reservas.splice(index, 1);

//     localStorage.setItem("reservas", JSON.stringify(Array_reservas));

//     Room_Delete.value = "";
//     Password_Delete.value = "";

//     mostrarDados();

//     alert("Removido com sucesso!");
// });

// mostrarDados();
