import Entrada from "./entrada";
import Empresa from "./empresa";
import CadastroCliente from "./cadastroCliente";
import ListagemClientes from "./listagemCliente";
import ListagemProdutos from "./listagemProdutos";
import ListagemServicos from "./listagemServicos";
import CadastroProduto from "./cadastroProduto";
import CadastroServico from "./cadastroServico";
import ExcluirCliente from "./excluirCliente";
import Excluir from "./excluir";
import ExcluirProduto from "./excluirProduto";
import ExcluirServico from "./excluirServico";
import AtualizarCliente from "./atualizarCliente";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

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

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let exclusao = new ExcluirCliente (empresa.getClientes)
            exclusao.Excluir()
            break;
        case 4:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 5:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 6:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Excluir()
            break;
        case 7:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 8:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 9:
            let exclusaoServico = new ExcluirServico(empresa.getServicos)
            exclusaoServico.Excluir()
            break;
        case 10:
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.Atualizar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}