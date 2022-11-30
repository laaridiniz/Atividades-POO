import Cliente from "./cliente";
import Listagem from "./listagem";

export default class ListagemCliente extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        if (this.clientes.length > 0){
            console.log(`\nLista de todos os clientes:`);
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCPF.getValor);
                console.log(`--------------------------------------`);
            });
        }
        else{
            console.log(`\nNão há clientes cadastrados.`)
        }
        
        console.log(`\n`);
    }
}