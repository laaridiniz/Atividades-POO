import Cadastro from "./cadastro"
import Entrada from "./entrada"
import Servico from "./servico"

export default class CadastroServico extends Cadastro {
    public servicos: Array<Servico>
    public entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        var cod = this.geraStringAleatoria(5);
        var nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        var preco = this.entrada.receberNumero(`Digite o valor do serviço R$: `);
        console.log(`O código gerado para este serviço é: `+cod);
        
        let servico = new Servico(cod, nome,preco);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }

}