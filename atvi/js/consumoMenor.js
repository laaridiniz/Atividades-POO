"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class MenorConsumo extends listagem_1.default {
    constructor(empresa) {
        super();
        this.clientes = empresa.getClientes,
            this.produtos = empresa.getProdutos,
            this.servicos = empresa.getServicos;
    }
    listar() {
        let nome;
        let cpf;
        let consumo_Total;
        let ordenacao = [];
        let quantidade_consumo = [];
        var i = 1;
        this.clientes.forEach(cliente => {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor;
            consumo_Total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            quantidade_consumo.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumo_Total,
                posicao: i
            });
            i = i + 1;
        });
        ordenacao = quantidade_consumo.sort((x, y) => {
            return y.quantidade - x.quantidade;
        });
        ordenacao.reverse();
        ordenacao = ordenacao.slice(0, 10);
        console.log("10 Clientes que menos consumiram produtos ou servicos em quantidade");
        ordenacao.forEach(cliente => {
            console.log("\n-------------------------------------------\n");
            console.log(`Nome: ${cliente.nome}`);
            console.log(`CPF: ${cliente.cpf}`);
            console.log(`Quantidade de produtos e servicos consumidos: ${cliente.quantidade}`);
        });
    }
}
exports.default = MenorConsumo;
