"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atualizar_1 = __importDefault(require("./atualizar"));
const entrada_1 = __importDefault(require("./entrada"));
class AtualizarProduto extends atualizar_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    Atualizar() {
        console.log(`\nAtualização do produto`);
        let busca = this.entrada.receberTexto(`Por favor informe o código do produto que deseja alterar: `);
        this.produtos.forEach(produto => {
            if (produto.getCod == busca) {
                let executa = true;
                while (executa) {
                    console.log(`Produto encontrado foi ${produto.nome}. Qual campo deseja alterar?`);
                    let confirma = this.entrada.receberNumero(`1 - Nome do produto, 2 - Preço, 0 - Sair\n`);
                    switch (confirma) {
                        case 1:
                            produto.nome = this.entrada.receberTexto(`Digite o novo nome: `);
                            console.log(`Nome do produto atualizado com sucesso!`);
                            break;
                        case 2:
                            console.log(`O preço atual do serviço é ${this.formatter.format(produto.getValor)}\n`);
                            var valor = this.entrada.receberTexto(`Digite o novo preço: `);
                            var precoFormat = valor.replace(" ", "").replace("R", "").replace("$", "").replace(".", "").replace(",", ".");
                            produto.setValor(parseInt(precoFormat));
                            console.log(`Preço do produto atualizado com sucesso!`);
                            break;
                        case 0:
                            executa = false;
                            console.log(`Obrigado!`);
                        default:
                            console.log("Digite uma opção válida!");
                            break;
                    }
                }
            }
            else {
                console.log(`\n Nenhum produto encontrado com o código informado. \n`);
            }
        });
    }
}
exports.default = AtualizarProduto;
