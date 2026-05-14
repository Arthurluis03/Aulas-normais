// #### Atividade DOM - Criando elementos  ####

// Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

// - Escalar um jogador
//     - Informar a posição do jogador a ser escalado para o time.
//     - Informar o nome do jogador.
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
//     - Após o jogador ser escalado os campos de texto devem ser limpos.
// - Remover um jogador
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
//     - Após o jogador ser removido o campo de texto deve ser limpo.

// Dica: lembran
// do que é possível acessar o texto de um input através da propriedade value.
	



// definir tudo
const body = document.querySelector('body')
const position = document.querySelector('.position')
const NumberPlayer = document.querySelector('.NumberPlayer')
const NumberShirt = document.querySelector('.Numbershirt')
const RemovePlayerNumber = document.querySelector('.RemovePlayerNumber')
const h1 = document.createElement('h1')
h1.classList.add('txt1')
const buttonSim = document.querySelector('.conf')
const buttonNao = document.querySelector('.negar')


let pt = []
let Nplayer = []
let Nshirt = []

position.addEventListener('keydown', (event)=>{
    const tecla = event.key
    if(tecla == 'Enter'){
        pt.push(position.value)
        alert(pt.join('\n'))
    }
})
NumberPlayer.addEventListener('keydown', (event)=>{
    const tecla = event.key
    if(tecla == 'Enter'){
        Nplayer.push(NumberPlayer.value)
        alert(Nplayer.join('\n'))
    }
})

NumberShirt.addEventListener('keydown', (event)=>{
    const tecla = event.key
    if(tecla == 'Enter'){
        Nshirt.push(NumberShirt.value)
        alert(Nshirt.join('\n'))
    }
})



function escalar(){
    
    if(position.value == '' || NumberPlayer.value === '' || NumberShirt.value == ''){
        alert('erro')
    } else {
        h1.innerText = `Por gentileza, confirma a escalação`
        buttonSim.style.display = 'flex'
        buttonNao.style.display = 'flex'

        buttonSim.addEventListener('click', ()=>{
        buttonSim.style.display = 'none'
        buttonNao.style.display = 'none'


            pt.push(position.value)
            Nplayer.push(NumberPlayer.value)
            Nshirt.push(NumberShirt.value)
            body.appendChild(h1)
             h1.innerText = `
        Jogador Adicionado com sucesso: 

        Posição:  ${pt.join(' \n')}
        Numero do jogador: ${Nplayer.join(' \n')}
        Numero da Camisa: ${Nshirt.join(' \n')}
        
        `
        position.value = null
        NumberPlayer.value = null
        NumberShirt.value = null

        })
        buttonNao.addEventListener('click', ()=>{
            alert('Certo, No aguardo das proximas escalações')
            buttonNao.style.display = 'none'
             buttonSim.style.display = 'none'


        })
        // let confirmação = prompt(`deseja confirmar a escalação?
        // 1 - sim
        // 2 - não
        // `)
        // switch (confirmação){
        //     case 1:
        // pt.push(position.value)
        // Nplayer.push(NumberPlayer.value)
        // Nshirt.push(NumberShirt.value)
        // body.appendChild(h1)
        // h1.innerText = `
        // Jogador Adicionado com sucesso: 

        // Posição:  ${pt.join(' \n')}
        // Numero do jogador: ${Nplayer.join(' \n')}
        // Numero da Camisa: ${Nshirt.join(' \n')}
        
        // `
        // position.value = null
        // NumberPlayer.value = null
        // NumberShirt.value = null
        // break
        // case 2: 
        // alert('certo')
        //  break
        // default:
        // break
    }
     
    
    
}


function remove(){
    let index = Nshirt.indexOf(RemovePlayerNumber.value)
    if (index == -1){
        alert("Numero invalido")
    } else{ 

        h1.innerText = `Jogador removido
            `
        pt.shift
        Nplayer.shift
        Nshirt.shift
        
    }


}