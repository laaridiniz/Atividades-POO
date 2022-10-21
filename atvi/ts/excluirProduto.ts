import Entrada from "./entrada"
import Excluir from "./excluir"
import Produto from "./produto"

let executa = true

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public Excluir(): void {
        console.log(`\nInício da exclusão do produto`);
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
            this.produtos.forEach(produto =>{
                if (produto.nome == busca){
                    console.log(`Produto encontrado, nome: ${produto.nome}, deseja realmente excluir o produto?`);
                    let confirma = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`)
                    switch(confirma){
                        case 1:
                            let indice = this.produtos.indexOf(produto)
                            this.produtos.slice(indice, 1)
                            console.log(`Produto excluido com sucesso.`);
                            break
                        case 2:
                            executa = false
                            console.log(`Cancelado`);
                            break
                            
                    }
                }
                else{
                    console.log(`\n Nenhum produto encontrado com o nome informado. \n`); 
                }
            })
                
                        
        }
    }
}