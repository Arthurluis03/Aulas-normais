// let senha = prompt("Defina sua senha:")
// let tentativa

// for (tentativa = 3; tentativa >= 1; tentativa--) {
//     alert("Faça o login")
//     let entrada = prompt("Qual a senha?")

//     if (entrada == senha) {
//         alert("Senha correta, seja bem-vindo!")
//         break
//     } else {
//         alert("Senha incorreta")
//     }

//     alert(`Você tem ${tentativa - 1} tentativa(s) restante(s)`)
// }


let senha = prompt("Defina sua senha: ")
let tentativas=3
 do {  
       login = prompt("Digite a senha: ")
       if (senha == login ) {
        alert("Login bem-sucedido")
        break
       } else {
        alert("Ops, senha errada, tente novamente")
        tentativas--
       }
       alert(`Você tem ${tentativas}, restante(s) `)
       
 } while(tentativas>0)
