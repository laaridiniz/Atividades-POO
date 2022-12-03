"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class MaiorConsumo extends listagem_1.default {
    constructor(empresa) {
        super();
        this.clientes = empresa.getClientes,
            this.produtos = empresa.getProdutos,
            this.servicos = empresa.getServicos;
    }
    listar() {
        let nome;
        let cpf;
        let consumo;
        let ordem;
        let quantidade_consumida = [];
        this.clientes.forEach(cliente => {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor;
            consumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            quantidade_consumida.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumo,
            });
        });
        ordem = quantidade_consumida.sort((x, y) => {
            return y.quantidade - x.quantidade;
        });
        ordem = ordem.slice(0, 10);
        console.log("Listagem dos 10 Clientes que mais consumiram produtos ou servicos em quantidade.");
        console.log(`\n---------------------------------------------\n`);
        ordem.forEach(cliente => {
            console.log(`Nome : ` + cliente.nome);
            console.log(`CPF: ` + cliente.cpf);
            console.log(`Quantidade de produtos e/ou serviços consumidos:` + cliente.quantidade);
            console.log(`\n---------------------------------------------\n`);
        });
    }
}
exports.default = MaiorConsumo;
