"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atualizar_1 = __importDefault(require("./atualizar"));
const entrada_1 = __importDefault(require("./entrada"));
let executa = true;
class AtualizarCliente extends atualizar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    Atualizar() {
        console.log(`\nAtualização do cliente`);
        while (executa) {
            let busca = this.entrada.receberTexto(`Por favor informe o CPF do cliente que você deseja alterar: `);
            this.clientes.forEach(cliente => {
                if (cliente.getCPF.getValor == busca) {
                    console.log(`Cliente encontrado, nome: ${cliente.nome}. Qual campo deseja alterar?`);
                    let confirma = this.entrada.receberNumero(`1 - Nome, 2 - Nome Social, 3 - CPF, 4 - RG, 5 - Data de cadastro, 6 - Telefone,
                    7 - Produtos consumidos, 8 - Serviços consumidos\n`);
                    switch (confirma) {
                        case 1:
                            cliente.nome = this.entrada.receberTexto(`Digite o novo nome:`);
                            console.log(`Nome atualizado com sucesso.`);
                            break;
                        case 2:
                            executa = false;
                            console.log(`Cancelado`);
                            break;
                    }
                }
                else {
                    console.log(`\n Nenhum cliente encontrado com o nome informado. \n`);
                }
            });
        }
    }
}
exports.default = AtualizarCliente;
