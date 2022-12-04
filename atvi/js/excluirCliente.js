"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("./entrada"));
const excluir_1 = __importDefault(require("./excluir"));
let executa = true;
class ExcluirCliente extends excluir_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    Excluir() {
        let entrada = new entrada_1.default();
        var cliente = entrada.receberTexto("Informe o CPF do cliente que deseja deletar: ");
        var index = this.clientes.findIndex(i => i.getCpf.getValor === cliente);
        var encontrado = this.clientes.find(element => element.getCpf.getValor == cliente);
        if (encontrado !== undefined) {
            console.log(`Cliente ` + encontrado.nome);
            console.log(`Realmente deseja excluir este cliente?`);
            var resp = entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
            console.log("");
            if (resp == 1) {
                this.clientes.splice(index, 1);
                console.log(`Cliente excluído com sucesso!`);
                console.log(`----------------------------------------`);
            }
            else {
                console.log(`Operação cancelada!`);
            }
        }
        else {
            console.log(`Cliente não encontrado!`);
        }
    }
}
exports.default = ExcluirCliente;
