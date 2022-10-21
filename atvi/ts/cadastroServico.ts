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
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let servico = new Servico(nome);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }

}