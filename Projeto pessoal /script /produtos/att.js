
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
