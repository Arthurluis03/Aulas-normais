let fases = +prompt("Quantas fases você jogou?");

let total = 0;
let acima100 = 0;

for (let i = 1; i <= fases; i++) {
    let pontos = +prompt("Pontos da fase " + i + ":")

    total += pontos;

    if (pontos > 100) {
        acima100++;
    }
}

let media = total / fases;

alert("Pontuação total: " + total);
alert("Média por fase: " + media);
alert("Fases com mais de 100 pontos: " + acima100);