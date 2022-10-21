"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = __importDefault(require("./cadastro"));
const produto_1 = __importDefault(require("./produto"));
const entrada_1 = __importDefault(require("./entrada"));
class CadastroProduto extends cadastro_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let produto = new produto_1.default(nome);
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.default = CadastroProduto;
