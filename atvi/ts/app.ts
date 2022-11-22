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
    console.log(`1 - Cliente`);
    console.log(`2 - Produto`);
    console.log(`3 - Serviço`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar Clientes`);
            console.log(`3 - Excluir cliente`);
            console.log(`4 - Atualizar cadastro de cliente`);
            console.log(`0 - Sair`);
            let entradaCliente = new Entrada()
            let opcaoCliente = entradaCliente.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcaoCliente){
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
                    let atualizarCliente = new AtualizarCliente(empresa.getClientes)
                    atualizarCliente.Atualizar()
                    break;
                case 0:
                    console.log(`Até mais!`)
                    break;
            }
            break;
        case 2:
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Excluir produto`);
            console.log(`0 - Sair`);
            let entradaProduto = new Entrada()
            let opcaoProduto = entradaProduto.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcaoProduto){
                case 1: 
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
                    listagemProdutos.listar()
                    break;
                case 3:
                    let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
                    exclusaoProduto.Excluir()
                    break;
                case 0:
                    console.log(`Até mais!`)
                    break;
            }
            break;
        case 3:
            console.log(`1 - Cadastrar servico`);
            console.log(`2 - Listar Serviços`);
            console.log(`3 - Excluir serviço`);
            console.log(`0 - Sair`);
            let entradaServico = new Entrada()
            let opcaoServico = entradaServico.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcaoServico){
                case 1: 
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServicos = new ListagemServicos(empresa.getServicos)
                    listagemServicos.listar()
                    break;
                case 3:
                    let exclusaoServico = new ExcluirServico(empresa.getServicos)
                    exclusaoServico.Excluir()
                    break;
                case 0:
                    console.log(`Até mais!`)
                    break;
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}