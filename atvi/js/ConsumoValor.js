"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ConsumoValor extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let quantidade_consumo = [];
        this.clientes.forEach(cliente => {
            let cpf = cliente.getCpf.getValor;
            let nome = cliente.nome;
            let nomeSocial = cliente.nomeSocial;
            let consumo_Total = 0;
            cliente.getProdutosConsumidos.forEach((produto) => {
                consumo_Total = consumo_Total + produto.getValor;
            });
            cliente.getServicosConsumidos.forEach((servico) => {
                consumo_Total = consumo_Total + servico.getValor;
            });
            quantidade_consumo.push({
                nome: nome,
                cpf: cpf,
                nomeSocial: nomeSocial,
                quantidade: consumo_Total
            });
        });
        quantidade_consumo = quantidade_consumo.sort((a, b) => {
            return b.quantidade - a.quantidade;
        });
        quantidade_consumo = quantidade_consumo.slice(0, 5);
        console.log("5 clientes que mais consumiram em valor");
        quantidade_consumo.forEach(cliente => {
            console.log("\n-------------------------------------------------------\n");
            console.log("CPF: " + cliente.cpf);
            console.log("Nome: " + cliente.nome);
            console.log(`Valor Total: R$ ${cliente.quantidade}`);
        });
    }
}
exports.default = ConsumoValor;
