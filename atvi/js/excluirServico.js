"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("./entrada"));
const excluir_1 = __importDefault(require("./excluir"));
let executa = true;
class ExcluirServico extends excluir_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    Excluir() {
        console.log(`\nInício da exclusão do servico`);
        while (executa) {
            let busca = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
            this.servicos.forEach(servico => {
                if (servico.nome == busca) {
                    console.log(`Serviço encontrado, nome: ${servico.nome}, deseja realmente excluir o serviço?`);
                    let confirma = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
                    switch (confirma) {
                        case 1:
                            let indice = this.servicos.indexOf(servico);
                            this.servicos.slice(indice, 1);
                            console.log(`Serviço excluído com sucesso.`);
                            break;
                        case 2:
                            executa = false;
                            console.log(`Cancelado`);
                            break;
                    }
                }
                else {
                    console.log(`\n Nenhum serviço encontrado com o nome informado. \n`);
                }
            });
        }
    }
}
exports.default = ExcluirServico;
