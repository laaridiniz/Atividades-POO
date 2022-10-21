"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("./entrada"));
const empresa_1 = __importDefault(require("./empresa"));
const cadastroCliente_1 = __importDefault(require("./cadastroCliente"));
const listagemCliente_1 = __importDefault(require("./listagemCliente"));
const listagemProdutos_1 = __importDefault(require("./listagemProdutos"));
const listagemServicos_1 = __importDefault(require("./listagemServicos"));
const cadastroProduto_1 = __importDefault(require("./cadastroProduto"));
const cadastroServico_1 = __importDefault(require("./cadastroServico"));
const excluirCliente_1 = __importDefault(require("./excluirCliente"));
const excluirProduto_1 = __importDefault(require("./excluirProduto"));
const excluirServico_1 = __importDefault(require("./excluirServico"));
const atualizarCliente_1 = __importDefault(require("./atualizarCliente"));
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Excluir cliente`);
    console.log(`4 - Cadastrar produto`);
    console.log(`5 - Listar todos os produtos`);
    console.log(`6 - Excluir produto`);
    console.log(`7 - Cadastrar servico`);
    console.log(`8 - Listar todos os servicos`);
    console.log(`9 - Excluir servico`);
    console.log(`10 - Atualizar cadastro de cliente`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            let cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new listagemCliente_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let exclusao = new excluirCliente_1.default(empresa.getClientes);
            exclusao.Excluir();
            break;
        case 4:
            let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 5:
            let listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 6:
            let exclusaoProduto = new excluirProduto_1.default(empresa.getProdutos);
            exclusaoProduto.Excluir();
            break;
        case 7:
            let cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 8:
            let listagemServicos = new listagemServicos_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 9:
            let exclusaoServico = new excluirServico_1.default(empresa.getServicos);
            exclusaoServico.Excluir();
            break;
        case 10:
            let atualizarCliente = new atualizarCliente_1.default(empresa.getClientes);
            atualizarCliente.Atualizar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
