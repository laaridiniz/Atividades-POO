import Cadastro from "./cadastro"
import Produto from "./produto";
import Entrada from "./entrada";

export default class CadastroProduto extends Cadastro {
    public produtos: Array<Produto>
    public entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let produto = new Produto(nome);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }

}