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
        var cod = this.geraStringAleatoria(5);
        var nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        var preco = this.entrada.receberNumero(`Digite o valor do produto R$: `);
        console.log(`O código gerado para esse produto é: `+cod);
        let produto = new Produto(cod,nome,preco);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}