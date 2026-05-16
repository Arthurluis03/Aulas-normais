import { Master_key, Input_Admin, Password_Admin } from "../dom/elements.js";
import { mostrarDados } from "../ui/tabela.js";

Password_Admin.addEventListener("click", ClearLS);
Input_Admin.addEventListener("keydown", (event) => {
  const tecla = event.key;
  if (tecla == "Enter") {
    ClearLS();
  }
});

export function ClearLS() {
  if (Input_Admin.value === Master_key) {
    alert("Bem-vindo Admin, a limpeza do LS será feita agora!");
    localStorage.clear();
    mostrarDados();
  } else {
    alert("Senha incorreta!");
  }
}
