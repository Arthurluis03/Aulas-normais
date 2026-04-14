let maça = 5;
let banana = 3;
let uva = 2;

let item = prompt(`Qual item você quer comprar? 
1 - maça - R$ 5
2 - banana - R$ 3
3 - uva - R$ 2
`);

let preco;

switch(item.toLowerCase()){
    case "1":
    case "maça":
        preco = maça;
        break;

    case "2":
    case "banana":
        preco = banana;
        break;

    case "3":
    case "uva":
        preco = uva;
        break;

    default:
        alert("Item inválido!");
        throw new Error("Parando execução");
}

let tipo = prompt("Você é: funcionario, vip ou normal?");

let total;

switch (tipo.toLowerCase()) {
    case "funcionario":
        total = preco * 0.9;
        alert("Funcionário tem 10% de desconto!\nTotal: R$ " + total.toFixed(2));
        break;

    case "vip":
        total = preco * 0.95;
        alert("Cliente VIP tem 5% de desconto!\nTotal: R$ " + total.toFixed(2));
        break;

    case "normal":
        total = preco;
        alert("Cliente normal não tem desconto.\nTotal: R$ " + total.toFixed(2));
        break;

    default:
        alert("Tipo inválido!");
}