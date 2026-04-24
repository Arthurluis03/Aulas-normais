function add(){
let npd = +prompt("Gostaria de adicionar quantos produtos?: ")
for(let i = 1; i <= npd; i++) {
    nomev = prompt("Digite o nome do veiculo");
    dsdP.push(nomev); 
}
alert(dsdP.join("\n"))
}
