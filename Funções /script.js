let valor
let resultado = 0 

function calcular(){

  for (let i = 0; i<=2; i++){
    valor = Number(prompt(`Digite o ${i}* valor`))
    resultado += valor
  }  
  alert("Resultado: " + resultado)
}
calcular()
;
/////
// tem o negocio do parametro, voce coloca dentro dos aspas, da função, dessa forma "function calcular(Parametro){}" pode colocar aqui, voce obrigatoriamente precisa usar o parametro se colocado, ou seja se vc colocar o parametro, vc precisa usar, é meio besta, mas é sempre bom lembra
// voce consegue pegar o valor do parametro dessa forma aqui, calcular(Number(prompt("informe quantos numeros deseja na conta para efetuar a operação"))), dessa forma ele pede a quantidade de vezes que ele vai repetir o for, ou seja aumentando os valores da operação
// se eu digitar no prompt ali de calculo que quero 7 numeros, na hora de somar, tenho que colocar os 7 valores que coloquei anteriormente, assim nao quebrando o codigo, achei legal pelo fato de conseguir perguntar ao usuario, posso implementar isso de forma coerente, assim aumentando minha taxa de sucesso
// 

function calcular(quantidade){
    
    let resultado = 0 
  for (let i = 1; i<= quantidade; i++){
     let valor = Number(prompt(`Digite o ${i}* valor para somar`)) 
     resultado += valor
  }  
  alert("Resultado: " + resultado)
}
calcular(Number(prompt(`Informe quantos numeros deseja efetuar a operação`)))
