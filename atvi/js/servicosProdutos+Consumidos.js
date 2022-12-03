"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class servicosProdutosConsumidos extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let produtos_consumidos = [];
        this.clientes.map(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                let nome = produto.nome;
                let quantidade = produtos_consumidos[produto.nome] = (produtos_consumidos[produto.nome] || 0) + 1;
                produtos_consumidos.push({
                    nome: nome,
                    quantidade: quantidade
                });
            });
        });
        let ordena_produto = produtos_consumidos.sort((a, b) => {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log("\nProduto mais consumido: ");
        ordena_produto.forEach((consumidos) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade: ${consumidos.quantidade}`);
            console.log("\n-------------------------------------------------------\n");
        });
        let servicos_consumidos = [];
        this.clientes.map(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                let nome = servico.nome;
                let quantidade = servicos_consumidos[servico.nome] = (servicos_consumidos[servico.nome] || 0) + 1;
                servicos_consumidos.push({
                    nome: nome,
                    quantidade: quantidade
                });
            });
        });
        let ordena_servico = servicos_consumidos.sort((a, b) => {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log("\nServiço mais consumido:");
        ordena_servico.forEach((consumidos) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade: ${consumidos.quantidade}`);
            console.log("\n-------------------------------------------------------\n");
        });
    }
}
exports.default = servicosProdutosConsumidos;
