const NamePlayer = document.getElementById("NamePlayer");
const PositionPlayer = document.getElementById("PositionPlayer");
const NumberShirt = document.getElementById("NumberShirt");
const Escalar = document.getElementById("btnEscalar");
const Remover = document.getElementById("btnRemover");
const RemovePlayer = document.getElementById("RemoveNumberShirt");
const h2 = document.querySelector(".txt2");


let Array__NamePlayer = [];
let Array__PositionPlayer = [];
let Array__NumberShirt = [];

Escalar.addEventListener("click", () => {
  if (NamePlayer.value == "" || PositionPlayer.value == "" || NumberShirt.value == ""
  ) {
    alert("Preencha todos os campos");
  } else {
    Array__NamePlayer.push(NamePlayer.value);
    Array__PositionPlayer.push(PositionPlayer.value);
    Array__NumberShirt.push(+NumberShirt.value);

    h2.innerHTML = `
    ESCALAÇÃO <br><br>

    Nome do jogador: ${Array__NamePlayer.join(", ")} <br>
    Posição do jogador: ${Array__PositionPlayer.join(", ")} <br>
    Número da camisa: ${Array__NumberShirt.join(", ")}
    `;

    NamePlayer.value = "";
    PositionPlayer.value = "";
    NumberShirt.value = "";
  }
});

Remover.addEventListener("click", () => {
  let index = +RemovePlayer.value;

  let posicao = Array__NumberShirt.indexOf(index);

  if (posicao != -1) {
    Array__NamePlayer.splice(posicao, 1);
    Array__PositionPlayer.splice(posicao, 1);
    Array__NumberShirt.splice(posicao, 1);
    alert("JOGADOR REMOVIDO");
    RemovePlayer.value = ""
    atualizarTela()
  } else {
    alert("Numero não encontrado");
  }
});

    function atualizarTela() {

    h2.innerHTML = `
    ESCALAÇÃO <br><br>

    Nome do jogador: ${Array__NamePlayer.join(", ")} <br>
    Posição do jogador: ${Array__PositionPlayer.join(", ")} <br>
    Número da camisa: ${Array__NumberShirt.join(", ")}
    `

}