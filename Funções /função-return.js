// deve-se sar uma função com retorno sempre que precisar que ela devolva um valor
//
//ao coloca o return na função qer dizer q acaba ali, pos isso nada roda
//diferents ramificações dentro da função podem ter diferentes retornos.
// 
//
// Resto fica para segunda feira! 
//
//
///// exemplos do return




// aqui podemos colocar os valores, que nem na segunda de x e y, mas escolhi deixar os valores estaticos, como 50 como valor, e 20% 
function porcentagem(numero, porcentagem) {
   return numero * (porcentagem/100)
}
let resultado = porcentagem(50, 20)
console.log("Resultado = "+resultado)





// nesse casoq que eu fiz, eu perguntei os valores de x e y 
function calculo(x, y) {
   return x * y
}
let resultado = calculo(+prompt("Digite o valor de x"), +prompt("Digite o valor de y"))
alert("Resultado = "+resultado)



//



// Dessa forma aqui, usamos um sistema bem mais avançado que os outros, usando if, false e true

let numeroidade= +prompt("Qual sua idade")
let verifica = maiorIdade(numeroidade)
function maiorIdade(idade){
    if(idade >=18){
        return true
        
    } else {
        return false
    }
} if(verifica){
    alert(`Você é maior de idade: sua idade é ${numeroidade}`)
} else{
    alert(`Você é menor de idade: sua idade é ${numeroidade}`)
}

