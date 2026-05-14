const input = document.getElementById('texto');
const divConteudo = document.getElementById('conteudo');

    
    let nomes = []
input.addEventListener('keydown', (event)=>{
    let tecla = event.key
    let texto = input.value;
    
    // divConteudo.innerHTML = `a tecla apertada foi ${tecla}`
    if (tecla == 'Enter'){
        if(texto == ''){
            alert('erro')
        }else{
        nomes.push(texto)
        divConteudo.innerHTML= `Nomes digitados: 
        ${nomes.join(',\n')}. `
        input.value = null
    }}
})

function nome(){
    alert(`${nomes.join('\n')}`)
}

// input.addEventListener('keyup', ()=>{
//     divConteudo.innerHTML = "SOLTOU A TECLA: ";
// })

// input.addEventListener('keypress', ()=>{
//     divConteudo.innerHTML = "TECLA PRESSIONADA: ";
// })

