import Atualizar from "./atualizar";
import Cliente from "./cliente";
import Entrada from "./entrada";

let executa = true

export default class AtualizarCliente extends Atualizar {
        private clientes: Array<Cliente>
        private entrada: Entrada
        constructor(clientes: Array<Cliente>) {
            super()
            this.clientes = clientes
            this.entrada = new Entrada()
        }
        
        public Atualizar(): void {
            console.log(`\nAtualização do cliente`);
            while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o CPF do cliente que você deseja alterar: `);
            this.clientes.forEach(cliente => {
                if (cliente.getCPF.getValor == busca){
                    console.log(`Cliente encontrado, nome: ${cliente.nome}. Qual campo deseja alterar?`);
                    let confirma = this.entrada.receberNumero(`1 - Nome, 2 - Nome Social, 3 - CPF, 4 - RG, 5 - Data de cadastro, 6 - Telefone,
                    7 - Produtos consumidos, 8 - Serviços consumidos`)
                    switch(confirma){
                        case 1:
                            this.entrada.receberTexto(`Digite o novo nome:`)
                            let indice = this.clientes.indexOf(cliente)
                            this.servicos.slice(indice, 1)
                            console.log(`Serviço excluido com sucesso.`);
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