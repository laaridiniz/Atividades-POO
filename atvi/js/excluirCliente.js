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
        this.entrada = new entrada_1.default();
    }
    Excluir() {
        console.log(`\nInício da exclusão do cliente`);
        while (executa) {
            let busca = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `);
            this.clientes.forEach(cliente => {
                if (cliente.getCPF.getValor == busca) {
                    console.log(`Cliente encontrado, nome: ${cliente.nome}, deseja realmente excluir o cliente?`);
                    let confirma = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
                    switch (confirma) {
                        case 1:
                            let indice = this.clientes.indexOf(cliente);
                            this.clientes.slice(indice, 1);
                            console.log(`Cliente excluido com sucesso.`);
                            executa = false;
                            break;
                        case 2:
                            executa = true;
                            console.log(`Cancelado`);
                            break;
                    }
                }
                else {
                    console.log(`\n Nenhum cliente encontrado com o CPF informado. \n`);
                }
            });
        }
    }
}
exports.default = ExcluirCliente;
