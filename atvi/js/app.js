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
const cliente_1 = __importDefault(require("./cliente"));
const cpf_1 = __importDefault(require("./cpf"));
const rg_1 = __importDefault(require("./rg"));
const telefone_1 = __importDefault(require("./telefone"));
const servico_1 = __importDefault(require("./servico"));
const produto_1 = __importDefault(require("./produto"));
const consumoMaior_1 = __importDefault(require("./consumoMaior"));
const clienteGenero_1 = __importDefault(require("./clienteGenero"));
const consumoGenero_1 = __importDefault(require("./consumoGenero"));
const consumoMenor_1 = __importDefault(require("./consumoMenor"));
const servicosProdutos_Consumidos_1 = __importDefault(require("./servicosProdutos+Consumidos"));
const ConsumoValor_1 = __importDefault(require("./ConsumoValor"));
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new empresa_1.default();
let execucao = true;
let c1 = new cliente_1.default('Davi', 'Davis', 'M', new cpf_1.default('45625136200', new Date()), [new rg_1.default('556215258', new Date()), new rg_1.default('391562853', new Date())], [new telefone_1.default('12', '98568548'), new telefone_1.default('23', '8546925658')]);
let c2 = new cliente_1.default('César Juan da Cunha', 'Cesinha', 'M', new cpf_1.default('08372057001', new Date()), [new rg_1.default('14738057-1', new Date()), new rg_1.default('53362152-1', new Date())], [new telefone_1.default('92', '37468463'), new telefone_1.default('92', '984247021')]);
let c3 = new cliente_1.default('Gustavo Rafael Paulo Alves', 'Gu', 'M', new cpf_1.default('64625557771', new Date()), [new rg_1.default('44356135-7', new Date()), new rg_1.default('84563254-1', new Date())], [new telefone_1.default('83', '38094238'), new telefone_1.default('83', '984413840')]);
let c4 = new cliente_1.default('Antônia Brenda Dias', 'Toninha', 'F', new cpf_1.default('21109039530', new Date()), [new rg_1.default('21816333-2', new Date()), new rg_1.default('35454097-1', new Date())], [new telefone_1.default('82', '37769735'), new telefone_1.default('82', '996393726')]);
let c5 = new cliente_1.default('Larissa Emanuelly Ramos', 'Lala', 'F', new cpf_1.default('796514966-49', new Date()), [new rg_1.default('32703638-2', new Date()), new rg_1.default('45896325-5', new Date())], [new telefone_1.default('11', '26001416'), new telefone_1.default('11', '983520073')]);
let c6 = new cliente_1.default('Ian Osvaldo Viana', 'Ian', 'M', new cpf_1.default('165831536-70', new Date()), [new rg_1.default('25033142-1', new Date()), new rg_1.default('25033142-8', new Date())], [new telefone_1.default('71', '36056107'), new telefone_1.default('71', '987040118')]);
let c7 = new cliente_1.default('Geraldo Levi Vitor Cavalcanti', 'Ge', 'M', new cpf_1.default('414484552-43', new Date()), [new rg_1.default('42877132-4', new Date()), new rg_1.default('42877132-8', new Date())], [new telefone_1.default('65', '992084505'), new telefone_1.default('45', '81507421')]);
let c8 = new cliente_1.default('Renan André Duarte', 'Renan', 'F', new cpf_1.default('610219816-64', new Date()), [new rg_1.default('1285648522-5', new Date())], [new telefone_1.default('85', '785404758')]);
let c9 = new cliente_1.default('Hadassa Lavínia', 'Had', 'F', new cpf_1.default('180.423.939-97', new Date()), [new rg_1.default('13.326.064-1', new Date())], [new telefone_1.default('85', '98139-3190')]);
let c10 = new cliente_1.default('Luana Lívia', 'Luh', 'F', new cpf_1.default('254.228.447-42', new Date()), [new rg_1.default('14.286.953-3', new Date()), new rg_1.default('38.599.216-6', new Date())], [new telefone_1.default('98', '2513-4323'), new telefone_1.default('98', '98923-2249')]);
let c11 = new cliente_1.default('Rosângela Luana', 'Roh', 'F', new cpf_1.default('952.682.049-55', new Date()), [new rg_1.default('10.311.688-6', new Date()), new rg_1.default('25.154.097-x', new Date())], [new telefone_1.default('85', '3881-6192'), new telefone_1.default('85', '98415-3778')]);
let c12 = new cliente_1.default('Sônia Simone', 'Soninha', 'F', new cpf_1.default('279.463.136-59', new Date()), [new rg_1.default('44.965.497-7', new Date()), new rg_1.default('78.954.097-x', new Date())], [new telefone_1.default('67', '2788-5571'), new telefone_1.default('67', '99146-2470')]);
let c13 = new cliente_1.default('Sueli Eloá', 'Suh', 'F', new cpf_1.default('158.396.612-95', new Date()), [new rg_1.default('40.797.651-6', new Date()), new rg_1.default('78.954.097-x', new Date())], [new telefone_1.default('82', '3514-2194'), new telefone_1.default('82', '98313-2650')]);
let c14 = new cliente_1.default('Roberto Anthony', 'Rô', 'M', new cpf_1.default('360.631.745-08', new Date()), [new rg_1.default('16.787.653-3', new Date()), new rg_1.default('98.554.097-x', new Date())], [new telefone_1.default('55', '2514-0055'), new telefone_1.default('55', '99365-1708')]);
let c15 = new cliente_1.default('Manuela Ester Pietra', 'Manu', 'F', new cpf_1.default('967.602.405-88', new Date()), [new rg_1.default('41.664.915-4', new Date()), new rg_1.default('98.554.097-7', new Date())], [new telefone_1.default('95', '3627-9143'), new telefone_1.default('95', '99840-7811')]);
let c16 = new cliente_1.default('Vitor Raul', 'Vitinho', 'M', new cpf_1.default('455.923.736-00', new Date()), [new rg_1.default('41.523.682-4', new Date()), new rg_1.default('98.536.097-1', new Date())], [new telefone_1.default('79', '2561-3461'), new telefone_1.default('79', '98838-7764')]);
let c17 = new cliente_1.default('Samuel Caleb Fogaça', 'Samu', 'M', new cpf_1.default('187.603.682-68', new Date()), [new rg_1.default('49.322.223-6', new Date()), new rg_1.default('78.586.097-7', new Date())], [new telefone_1.default('44', '2551-5184'), new telefone_1.default('44', '98903-8529')]);
let c18 = new cliente_1.default('Sophia Luna Jéssica Ferreira', 'Sophi', 'F', new cpf_1.default('184.065.130-04', new Date()), [new rg_1.default('28.358.281-9', new Date()), new rg_1.default('96.875.409-5', new Date())], [new telefone_1.default('96', '3974-0313'), new telefone_1.default('96', '98848-4504')]);
let c19 = new cliente_1.default('Tatiane Laura Nascimento', 'Taty', 'F', new cpf_1.default('844.172.673-67', new Date()), [new rg_1.default('38.387.973-5', new Date()), new rg_1.default('36.554.097-9', new Date())], [new telefone_1.default('83', '3598-1048'), new telefone_1.default('83', '98361-8221')]);
let c20 = new cliente_1.default('Jennifer Emily da Cruz', 'Jeny', 'F', new cpf_1.default('019.607.162-39', new Date()), [new rg_1.default('49.501.190-3', new Date()), new rg_1.default('36.554.097-2', new Date())], [new telefone_1.default('21', '3705-6350'), new telefone_1.default('21', '98433-5474')]);
let c21 = new cliente_1.default('Renata Vera Barros', 'Renatinha', 'F', new cpf_1.default('510.294.249-26', new Date()), [new rg_1.default('37.841.582-8', new Date()), new rg_1.default('45.960.976-2', new Date())], [new telefone_1.default('91', '2715-4675'), new telefone_1.default('91', '99743-1232')]);
let c22 = new cliente_1.default('Yuri Oliver Benedito', 'Yuri', 'M', new cpf_1.default('679.466.271-06', new Date()), [new rg_1.default('98.841.582-5', new Date()), new rg_1.default('22.094.348-5', new Date())], [new telefone_1.default('48', '2814-1679'), new telefone_1.default('48', '99493-9634')]);
let c23 = new cliente_1.default('João Gustavo Vinicius Figueiredo', 'João', 'M', new cpf_1.default('831.793.136-68', new Date()), [new rg_1.default('123415582-4', new Date()), new rg_1.default('985540958-9', new Date())], [new telefone_1.default('12', '687504758'), new telefone_1.default('12', '9695295417')]);
let c24 = new cliente_1.default('Rafaela', 'Castro', 'F', new cpf_1.default('1464448478-20', new Date()), [new rg_1.default('878415582-x', new Date()), new rg_1.default('258554097-6', new Date())], [new telefone_1.default('86', '789504758'), new telefone_1.default('17', '99752954')]);
let c25 = new cliente_1.default('Artur', 'Tutu', 'M', new cpf_1.default('967444847-14', new Date()), [new rg_1.default('614415582-4', new Date()), new rg_1.default('563525555-4', new Date())], [new telefone_1.default('12', '877504758'), new telefone_1.default('', '9969529541')]);
let c26 = new cliente_1.default('Messias', 'Vitorino', 'M', new cpf_1.default('8464448478-36', new Date()), [new rg_1.default('4178415582-9', new Date()), new rg_1.default('4145568585-4', new Date())], [new telefone_1.default('25', '565458744'), new telefone_1.default('45', '3545747474')]);
let c27 = new cliente_1.default('Amanda', 'Dioly', 'F', new cpf_1.default('5864448789-41', new Date()), [new rg_1.default('357155821-7', new Date()), new rg_1.default('9888885877-9', new Date())], [new telefone_1.default('12', '354155774'), new telefone_1.default('36', '854456452')]);
let c28 = new cliente_1.default('Helena', 'Ravaglia', 'F', new cpf_1.default('5244448478-68', new Date()), [new rg_1.default('4387415582-8', new Date()), new rg_1.default('565889877-2', new Date())], [new telefone_1.default('16', '88684858'), new telefone_1.default('47', '558857474')]);
let c29 = new cliente_1.default('Giovanna', 'Liparelli', 'F', new cpf_1.default('123587787-15', new Date()), [new rg_1.default('369415582-1', new Date()), new rg_1.default('357774447-3', new Date())], [new telefone_1.default('13', '898744554'), new telefone_1.default('11', '858554577')]);
let c30 = new cliente_1.default('Rafaela', 'Queiroz', 'F', new cpf_1.default('2565455454-58', new Date()), [new rg_1.default('4575554474-7', new Date()), new rg_1.default('985540597-1', new Date())], [new telefone_1.default('22', '6952214254'), new telefone_1.default('12', '58747555')]);
let s1 = new servico_1.default('Unha', 'URCNS', 15);
let s2 = new servico_1.default('Limpeza', 'KAMDD', 50);
let s3 = new servico_1.default('Sobrancelha', 'SFJID', 60);
let s4 = new servico_1.default('Corte', 'DSERG', 20);
let s5 = new servico_1.default('Maquiagem', 'WEERF', 70);
let s6 = new servico_1.default('Pedicure', 'TFRJE', 40);
let s7 = new servico_1.default('Botox', 'RTUTE', 80);
let s8 = new servico_1.default('Preenchimento', 'WEHIW', 45);
let s9 = new servico_1.default('Cílios', 'RYIUJ', 60);
let s10 = new servico_1.default('Depilação', 'EHJFH', 25);
let p1 = new produto_1.default('Xampu', 'YJHDS', 20);
let p2 = new produto_1.default('Esmalte', 'RTEYU', 15);
let p3 = new produto_1.default('Camisa', 'RYTU7', 30);
let p4 = new produto_1.default('Cera', 'YTJUR', 35);
let p5 = new produto_1.default('Rímel', 'IKYTT', 80);
let p6 = new produto_1.default('Secador', 'EWMKR', 200);
let p7 = new produto_1.default('Demaquilante', 'WHUWF', 60);
let p8 = new produto_1.default('Acetona', 'REWOD', 40);
let p9 = new produto_1.default('Batom', 'IEKFE', 25);
let p10 = new produto_1.default('Pente', 'DFJGI', 10);
c1.addProduto(p1);
c1.addProduto(p1);
c1.addProduto(p2);
c1.addProduto(p9);
c1.addServicos(s6);
c1.addServicos(s10);
c1.addServicos(s3);
c2.addProduto(p3);
c2.addProduto(p4);
c2.addProduto(p10);
c2.addProduto(p5);
c2.addServicos(s1);
c2.addServicos(s2);
c3.addProduto(p6);
c3.addProduto(p7);
c3.addProduto(p8);
c3.addProduto(p8);
c3.addServicos(s1);
c3.addServicos(s5);
c3.addServicos(s5);
c5.addProduto(p5);
c5.addProduto(p8);
c5.addProduto(p10);
c5.addServicos(s1);
c5.addServicos(s10);
c5.addServicos(s2);
c10.addServicos(s10);
c10.addServicos(s3);
c10.addProduto(p2);
c29.addProduto(p1);
c29.addProduto(p7);
c29.addProduto(p8);
c29.addServicos(s5);
empresa.getClientes.push(c1);
empresa.getClientes.push(c2);
empresa.getClientes.push(c3);
empresa.getClientes.push(c4);
empresa.getClientes.push(c5);
empresa.getClientes.push(c6);
empresa.getClientes.push(c7);
empresa.getClientes.push(c8);
empresa.getClientes.push(c9);
empresa.getClientes.push(c10);
empresa.getClientes.push(c11);
empresa.getClientes.push(c12);
empresa.getClientes.push(c13);
empresa.getClientes.push(c14);
empresa.getClientes.push(c15);
empresa.getClientes.push(c16);
empresa.getClientes.push(c17);
empresa.getClientes.push(c18);
empresa.getClientes.push(c19);
empresa.getClientes.push(c20);
empresa.getClientes.push(c21);
empresa.getClientes.push(c22);
empresa.getClientes.push(c23);
empresa.getClientes.push(c24);
empresa.getClientes.push(c25);
empresa.getClientes.push(c26);
empresa.getClientes.push(c27);
empresa.getClientes.push(c28);
empresa.getClientes.push(c29);
empresa.getClientes.push(c30);
empresa.getServicos.push(s1);
empresa.getServicos.push(s2);
empresa.getServicos.push(s3);
empresa.getServicos.push(s4);
empresa.getServicos.push(s5);
empresa.getServicos.push(s6);
empresa.getServicos.push(s7);
empresa.getServicos.push(s8);
empresa.getServicos.push(s9);
empresa.getServicos.push(s10);
empresa.getProdutos.push(p1);
empresa.getProdutos.push(p2);
empresa.getProdutos.push(p3);
empresa.getProdutos.push(p4);
empresa.getProdutos.push(p5);
empresa.getProdutos.push(p6);
empresa.getProdutos.push(p7);
empresa.getProdutos.push(p8);
empresa.getProdutos.push(p9);
empresa.getProdutos.push(p10);
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Produto`);
    console.log(`3 - Serviço`);
    console.log(`4 - Listagem`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar Clientes`);
            console.log(`3 - Excluir cliente`);
            console.log(`4 - Atualizar cadastro de cliente`);
            console.log(`0 - Sair`);
            let entradaCliente = new entrada_1.default();
            let opcaoCliente = entradaCliente.receberNumero(`Por favor, escolha uma opção: `);
            switch (opcaoCliente) {
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
                    let atualizarCliente = new atualizarCliente_1.default(empresa.getClientes);
                    atualizarCliente.Atualizar();
                    break;
                case 0:
                    console.log(`Até mais!`);
                    break;
            }
            break;
        case 2:
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Excluir produto`);
            console.log(`0 - Sair`);
            let entradaProduto = new entrada_1.default();
            let opcaoProduto = entradaProduto.receberNumero(`Por favor, escolha uma opção: `);
            switch (opcaoProduto) {
                case 1:
                    let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
                    cadastroProduto.cadastrar();
                    break;
                case 2:
                    let listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
                    listagemProdutos.listar();
                    break;
                case 3:
                    let exclusaoProduto = new excluirProduto_1.default(empresa.getProdutos);
                    exclusaoProduto.Excluir();
                    break;
                case 0:
                    console.log(`Até mais!`);
                    break;
            }
            break;
        case 3:
            console.log(`1 - Cadastrar servico`);
            console.log(`2 - Listar Serviços`);
            console.log(`3 - Excluir serviço`);
            console.log(`0 - Sair`);
            let entradaServico = new entrada_1.default();
            let opcaoServico = entradaServico.receberNumero(`Por favor, escolha uma opção: `);
            switch (opcaoServico) {
                case 1:
                    let cadastroServico = new cadastroServico_1.default(empresa.getServicos);
                    cadastroServico.cadastrar();
                    break;
                case 2:
                    let listagemServicos = new listagemServicos_1.default(empresa.getServicos);
                    listagemServicos.listar();
                    break;
                case 3:
                    let exclusaoServico = new excluirServico_1.default(empresa.getServicos);
                    exclusaoServico.Excluir();
                    break;
                case 0:
                    console.log(`Até mais!`);
                    break;
            }
            break;
        case 4:
            console.log("Listagem: \n");
            if (empresa.getClientes.length)
                console.log("1 - 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");
            console.log("2 - Listagem clientes por gênero.\n");
            if (empresa.getServicos.length || empresa.getProdutos.length)
                console.log("3 - Listagem serviços ou produtos mais consumidos\n");
            if (empresa.getServicos.length || empresa.getProdutos.length)
                console.log("4 - Listagem serviços ou produtos mais consumidos por gênero\n");
            if (empresa.getServicos.length || empresa.getProdutos.length)
                console.log("5 - Listagem 10 clientes que menos consumiram produtos ou serviços\n");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            console.log("0 - Voltar Para o Menu Principal\n");
            let entrada = new entrada_1.default();
            let opcao = entrada.receberNumero("Escolha uma opção: ");
            switch (opcao) {
                case 1:
                    let consumoMaior = new consumoMaior_1.default(empresa);
                    consumoMaior.listar();
                    break;
                case 2:
                    let generoCliente = new clienteGenero_1.default(empresa.getClientes);
                    generoCliente.listar();
                    break;
                case 3:
                    let produtosServicosMaisConsumidos = new servicosProdutos_Consumidos_1.default(empresa.getClientes);
                    produtosServicosMaisConsumidos.listar();
                    break;
                case 4:
                    let generoConsumo = new consumoGenero_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
                    generoConsumo.listar();
                    break;
                case 5:
                    let menorConsumo = new consumoMenor_1.default(empresa);
                    menorConsumo.listar();
                    break;
                case 6:
                    let valorConsumo = new ConsumoValor_1.default(empresa.getClientes);
                    valorConsumo.listar();
                    break;
                case 0:
                    console.log(`Até mais!`);
                    break;
                default:
                    break;
            }
            break;
        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
