let qtdpdr = +prompt("Quantos produtos?");

let ttcompra = 0;
let acima100 = 0;

let pdrMC = "";
let maP = 0;

for (let i = 1; i <= qtdpdr; i++) {
    let nome = prompt("Nome do produto " + i + ":");
    let preco = +prompt("Preço do produto:");
    let quantidade = +prompt("Quantidade:");

    let subtotal = preco * quantidade;
    ttcompra += subtotal;

    if (preco > 100) {
        acima100++;
    }

    if (preco > maiorPreco) {
        maP = preco;
        pdrMC = nome;
    }
}

alert("Valor total da compra: R$ " + ttcompra);
alert("Produtos acima de R$100: " + acima100);
alert("Produto mais caro: " + pdrMC + " (R$ " + maiorPreco + ")");