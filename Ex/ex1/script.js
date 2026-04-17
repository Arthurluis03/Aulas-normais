let numero = +prompt("Digite o número final:");
let i = 0;

do {
  if (i % 2 == 0) {
    alert(`${i}`);
  }
  i++;
} while (i <= numero);
