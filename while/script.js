do {  
    opcoes = +prompt(` Menu de Produtos
        1 - Cadastrar Produto
        2 - Listar produto 
        3 - Alterar produto
        4 - Excluir produto
        5 - Voltar
        `)
        
        switch (opcoes) {
            case 1:
                alert("Produto Cadastrado");
                break
            case 2: 
                alert("Lista de produtos");
                break

            case 3:
                alert("Alterar produto");
                break

            case 4:
                alert("Excluir Produto")
                break

            case 5: 
                alert("Voltar")
                break
            default: 
            alert("Opção invalida")
        }
}while(opcoes != 5)
