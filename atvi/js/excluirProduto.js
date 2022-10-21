"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("./entrada"));
const excluir_1 = __importDefault(require("./excluir"));
let executa = true;
class ExcluirProduto extends excluir_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    Excluir() {
        console.log(`\nInício da exclusão do produto`);
        while (executa) {
            let busca = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
            this.produtos.forEach(produto => {
                if (produto.nome == busca) {
                    console.log(`Produto encontrado, nome: ${produto.nome}, deseja realmente excluir o produto?`);
                    let confirma = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
                    switch (confirma) {
                        case 1:
                            let indice = this.produtos.indexOf(produto);
                            this.produtos.slice(indice, 1);
                            console.log(`Produto excluido com sucesso.`);
                            break;
                        case 2:
                            executa = false;
                            console.log(`Cancelado`);
                            break;
                    }
                }
                else {
                    console.log(`\n Nenhum produto encontrado com o nome informado. \n`);
                }
            });
        }
    }
}
exports.default = ExcluirProduto;
