let dsdP = []
let dlt
let ndlt
let rdlt
let nomev
let indice
let removido
let usuario = []
let senha = []
let fnc = []
let passf = [ 2316,  309, 2611 ]
let fnç 
let prg
let user
let pass
let userd
let passd




/////////////////////
//A // U // T // H //
/////////////////////

function cadastro() {
    let prg = prompt("Já tem cadastro?").toLowerCase();

    if (prg === "sim") {
        alert("Então por que está no cadastro inteligente, faça logo o login")
    } else {
        let novoUser = prompt(` Olá, Lembre-se de nao colocar nenhum usuario que ofenda até as micros-minorias então 
        Novo usuário:`);
        let novaSenha = prompt(`Lembre-se de crir uma senha que vá se lembrar, então 
            Nova senha:`);

        usuario.push(novoUser);
        senha.push(novaSenha);

        alert("Nice, sua conta foi criada, agora pode efetuar o login");
    }
}
function Login(){
        let userd = prompt("Por favor digite seu Usuário:");
        let index = usuario.indexOf(userd);

        if (index !== -1) {

            let passd = prompt("Certo, agora digite a sua senha:");

            if (senha[index] === passd) {
                alert(`Tá bom, vc foi achado, sejam bem vindo(a)`);
                window.location.href = "prd.html";
            } else {
                alert("Ops, errou a sua senha");
            }

        } else {
            alert("Putz, desconheço esse usuario, talvez precise criar um conta");
        }
}


//////////////////////////////////////////
// P // R // O // D // U // T // O // S // 
//////////////////////////////////////////


function add(){
let npd = +prompt("Gostaria de adicionar quantos produtos?: ")
for(let i = 1; i <= npd; i++) {
    nomev = prompt("Digite o nome do veiculo");
    dsdP.push(nomev); 
}
alert(dsdP.join("\n"))
}





//





function addn(){
for(let i = 1; i < 4; i++) {
     nomev = prompt("Digite os nome dos novos carros e suas marcas!");
    dsdP.push(nomev); 
    alert(dsdP.join("\n"))
}
}


//


function att(){
alert("Atualização dos veiculos: ");
 rdlt = prompt("Olá, você deseja excluir algum veículo? 'sim' ou 'nao'");

if (rdlt === 'sim') {

     ndlt = +prompt("Digite o número de veículos que deseja excluir:");

    for (let j = 0; j < ndlt; j++) {

         mensagem = "Escolha o número do veículo para excluir:\n";

        for (let i = 0; i < dsdP.length; i++) {
            mensagem += `${i + 1} - ${dsdP[i]}\n`;
        }

         dlt = +prompt(mensagem);

        if (dlt >= 1 && dlt <= dsdP.length) {

             indice = dlt - 1;
             removido = dsdP[indice];

            dsdP.splice(indice, 1); 

            alert(`O veículo ${removido} foi removido`);

        } else {
            alert("Número inválido!");
            j--; 
        }
    }
}

else if (rdlt == 'nao' || rdlt == 'Nao' || rdlt == 'não' || rdlt == 'Não' )
{
    alert("Tudo bem, continuando então :D")
} else { alert("Resposta invalida, escreva apenas sim ou nao")
}
}







////////////////////////////////
// L // I // M // P // A // R //
////////////////////////////////

function lmp(){
    let exc = +prompt(`Deseja excluir todos os produtos colocados até então?
        1 - sim
        2 - não 
        `)
    switch(exc){
    case 1:
    alert("Lista apagada!")
    dsdP.splice(0, dsdP.length);
    break
    case 2: 
    alert("Operação cancelada")
    break
    default:
    alert("Por gentileza, digite apenas, os numeros 1 e 2 para responder")
    break
    
}
}




///////////////////////////
// T // E // S // T // E //
/////////////////////////// 
    function test(){
      alert(usuario.join("\n"))
      alert(senha.join("\n"))
}
