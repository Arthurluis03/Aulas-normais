const input = document.getElementById('texto');
const divConteudo = document.getElementById('conteudo');

input.addEventListener('keydown', ()=>{
    divConteudo.innerHTML = "PRESSIONOU A TECLA: ";
    let texto = input.value;
    
    if (texto == "@gmail.com") {
        alert(texto)
    }
    
})

// input.addEventListener('keyup', ()=>{
//     divConteudo.innerHTML = "SOLTOU A TECLA: ";
// })

// input.addEventListener('keypress', ()=>{
//     divConteudo.innerHTML = "TECLA PRESSIONADA: ";
// })

