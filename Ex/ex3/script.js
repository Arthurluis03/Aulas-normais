// Você está trabalhando no sistema de controle de acesso de um laboratório
// secreto. Por questões de segurança, o número 10 deve ser evitado a todo
// custo. O contador de testes deve exibir os números normalmente, mas
// precisa ser encerrado imediatamente ao chegar nesse número. Crie um
// programa que inicie a contagem em 1 e siga até 20. Se o número 10 for
// alcançado, o sistema deve exibir uma mensagem de alerta e interromper a
// contagem.
// Saída esperada:
// 1
// 2
// 3
// ...
// 9
// Número proibido encontrado! Encerrando...

let bomb = 10;
let limite = +prompt("Digite até qual número deseja contar:");
let time = 1;

do {
  if (time === bomb) {
    alert("Alerta numero invalido, interrompendo BOOOM");
    break;
  }

  alert(time);
  time++;
} while (time <= limite);
