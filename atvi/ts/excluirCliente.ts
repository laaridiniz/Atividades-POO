import Cliente from "./cliente";
import Entrada from "./entrada";
import Excluir from "./excluir";

let executa = true

export default class ExcluirCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public Excluir(): void {
        console.log(`\nInício da exclusão do cliente`);
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `);
            this.clientes.forEach(cliente =>{
                if (cliente.getCPF.getValor == busca){
                    console.log(`Cliente encontrado, nome: ${cliente.nome}, deseja realmente excluir o cliente?`);
                    let confirma = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar \n`)
                    switch(confirma){
                        case 1:
                            let indice = this.clientes.indexOf(cliente);
                            this.clientes.splice(indice, 1);
                            console.log(`Cliente excluido com sucesso.`);
                            executa = false
                            break
                        case 2:
                            executa = true
                            console.log(`Cancelado`);
                            break
                            
                    }
                }
                else{
                    console.log(`\n Nenhum cliente encontrado com o CPF informado. \n`); 
                }
            })
                
                        
        }
    }
}