const body = document.querySelector('body')

/// criando elementos

const h1 = document.createElement('h1')
h1.innerText = 'Criação dos elementos atraves do DOM'
h1.classList.add('txt1')


const botao = document.createElement('button')
botao.innerText = 'Clique aqui'
botao.classList.add('botao')
botao.style.cursor = 'pointer'

botao.addEventListener('click', ()=>{
    body.removeChild(h1)
    // pode fazer a mesma coisa, e adicionar mais produtos tipo, elemento.remove(h1, botao e por ai vai)
    // body.remove(h1, h2) remove os elementos 
}) 
//// apontar qual o local de existencia do elemento, ou seja no body


// body.appendChild(h1)
// body.appendChild(button)

body.append(h1, h2, botao) /// essa forma junta todos, e vc coloca na ordem que quer
// body.append(botao, h1)
