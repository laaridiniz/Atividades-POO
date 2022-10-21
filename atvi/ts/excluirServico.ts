import Entrada from "./entrada"
import Excluir from "./excluir"
import Servico from "./servico"

let executa = true

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public Excluir(): void {
        console.log(`\nInício da exclusão do servico`);
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
            this.servicos.forEach(servico => {
                if (servico.nome == busca){
                    console.log(`Serviço encontrado, nome: ${servico.nome}, deseja realmente excluir o serviço?`);
                    let confirma = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`)
                    switch(confirma){
                        case 1:
                            let indice = this.servicos.indexOf(servico)
                            this.servicos.slice(indice, 1)
                            console.log(`Serviço excluído com sucesso.`);
                            break
                        case 2:
                            executa = false
                            console.log(`Cancelado`);
                            break
                            
                    }
                }
                else{
                    console.log(`\n Nenhum serviço encontrado com o nome informado. \n`); 
                }
            })
                
                        
        }
    }
}