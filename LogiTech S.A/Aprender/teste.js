const salvar = document.getElementById("salvar");
const mostrar = document.getElementById("mostrar");
const remover = document.getElementById("remover");
const limpar = document.getElementById("limpar");
const input = document.getElementById("dados");
const ol = document.getElementById("conteudo");

let nomes = [];

salvar.addEventListener("click", () => {
  const dadosSalvos = localStorage.getItem("nomes");

  // Verificar se já existe algum dado salvo
  if (dadosSalvos) {
    nomes = JSON.parse(dadosSalvos);
  }

  nomes.push(input.value);
  localStorage.setItem("nomes", JSON.stringify(nomes));
  input.value = "";
});

mostrar.addEventListener("click", () => {
  const dadosExibir = localStorage.getItem("nomes");
  const dadosConvertidos = JSON.parse(dadosExibir);
  ol.innerText = "";
  alert(dadosConvertidos);

  
  dadosConvertidos.forEach((itemDados) => {
    const li = document.createElement("li");
    li.innerText = itemDados
    ol.appendChild(li)
        
        
  });
});

remover.addEventListener("click", () => {
    localStorage.removeItem('nomes')
    alert(`O item removido com sucesso`)
    Atualizartabela()


});

limpar.addEventListener("click", () => {
    localStorage.clear()
    alert('Lista limpada completamente!')

});

function Atualizartabela(){
    li.innerText = itemDados
    
}