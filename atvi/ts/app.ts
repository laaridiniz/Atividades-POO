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
import Cliente from "./cliente";
import cpf from "./cpf";
import Rg from "./rg";
import Telefone from "./telefone";
import Servico from "./servico";
import Produto from "./produto";
import MaiorConsumo from "./consumoMaior";
import GeneroCliente from "./clienteGenero";
import GeneroConsumo from "./consumoGenero";
import MenorConsumo from "./consumoMenor";
import servicosProdutosConsumidos from "./servicosProdutos+Consumidos";
import ConsumoValor from "./ConsumoValor";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true


let c1 = new Cliente('Davi', 'Davis', 'M', new cpf('45625136200', new Date()),[new Rg('556215258', new Date()),new Rg('391562853', new Date())], [new Telefone('12', '98568548'), new Telefone('23', '8546925658')])
let c2 = new Cliente('César Juan da Cunha', 'Cesinha', 'M', new cpf('08372057001', new Date()),[new Rg('14738057-1', new Date()),new Rg('53362152-1', new Date())], [new Telefone('92', '37468463'), new Telefone('92', '984247021')])
let c3 = new Cliente('Gustavo Rafael Paulo Alves', 'Gu', 'M', new cpf('64625557771', new Date()),[new Rg('44356135-7', new Date()),new Rg('84563254-1', new Date())], [new Telefone('83', '38094238'), new Telefone('83', '984413840')])
let c4 = new Cliente('Antônia Brenda Dias', 'Toninha', 'F', new cpf('21109039530', new Date()),[new Rg('21816333-2', new Date()),new Rg('35454097-1', new Date())], [new Telefone('82', '37769735'), new Telefone('82', '996393726')])
let c5 = new Cliente('Larissa Emanuelly Ramos', 'Lala', 'F', new cpf('796514966-49', new Date()),[new Rg('32703638-2', new Date()),new Rg('45896325-5', new Date())], [new Telefone('11', '26001416'), new Telefone('11', '983520073')])
let c6 = new Cliente('Ian Osvaldo Viana', 'Ian', 'M', new cpf('165831536-70', new Date()),[new Rg('25033142-1', new Date()),new Rg('25033142-8', new Date())], [new Telefone('71', '36056107'), new Telefone('71', '987040118')])
let c7 = new Cliente('Geraldo Levi Vitor Cavalcanti', 'Ge', 'M', new cpf('414484552-43', new Date()),[new Rg('42877132-4', new Date()),new Rg('42877132-8', new Date())], [new Telefone('65', '992084505'), new Telefone('45', '81507421')])
let c8 = new Cliente('Renan André Duarte', 'Renan', 'F', new cpf('610219816-64', new Date()),[new Rg('1285648522-5', new Date())], [new Telefone('85', '785404758')])
let c9 = new Cliente('Hadassa Lavínia', 'Had', 'F', new cpf('180.423.939-97', new Date()),[new Rg('13.326.064-1', new Date())], [new Telefone('85', '98139-3190')])
let c10 = new Cliente('Luana Lívia', 'Luh', 'F', new cpf('254.228.447-42', new Date()),[new Rg('14.286.953-3', new Date()),new Rg('38.599.216-6', new Date())], [new Telefone('98', '2513-4323'), new Telefone('98', '98923-2249')])
let c11 = new Cliente('Rosângela Luana', 'Roh', 'F', new cpf('952.682.049-55', new Date()),[new Rg('10.311.688-6', new Date()),new Rg('25.154.097-x', new Date())], [new Telefone('85', '3881-6192'), new Telefone('85', '98415-3778')])
let c12 = new Cliente('Sônia Simone', 'Soninha', 'F', new cpf('279.463.136-59', new Date()),[new Rg('44.965.497-7', new Date()),new Rg('78.954.097-x', new Date())], [new Telefone('67', '2788-5571'), new Telefone('67', '99146-2470')])
let c13 = new Cliente('Sueli Eloá', 'Suh', 'F', new cpf('158.396.612-95', new Date()),[new Rg('40.797.651-6', new Date()),new Rg('78.954.097-x', new Date())], [new Telefone('82', '3514-2194'), new Telefone('82', '98313-2650')])
let c14 = new Cliente('Roberto Anthony', 'Rô', 'M', new cpf('360.631.745-08', new Date()),[new Rg('16.787.653-3', new Date()),new Rg('98.554.097-x', new Date())], [new Telefone('55', '2514-0055'), new Telefone('55', '99365-1708')])
let c15 = new Cliente('Manuela Ester Pietra', 'Manu', 'F', new cpf('967.602.405-88', new Date()),[new Rg('41.664.915-4', new Date()),new Rg('98.554.097-7', new Date())], [new Telefone('95', '3627-9143'), new Telefone('95', '99840-7811')])
let c16 = new Cliente('Vitor Raul', 'Vitinho', 'M', new cpf('455.923.736-00', new Date()),[new Rg('41.523.682-4', new Date()),new Rg('98.536.097-1', new Date())], [new Telefone('79', '2561-3461'), new Telefone('79', '98838-7764')])
let c17 = new Cliente('Samuel Caleb Fogaça', 'Samu', 'M', new cpf('187.603.682-68', new Date()),[new Rg('49.322.223-6', new Date()),new Rg('78.586.097-7', new Date())], [new Telefone('44', '2551-5184'), new Telefone('44', '98903-8529')])
let c18 = new Cliente('Sophia Luna Jéssica Ferreira', 'Sophi', 'F', new cpf('184.065.130-04', new Date()),[new Rg('28.358.281-9', new Date()),new Rg('96.875.409-5', new Date())], [new Telefone('96', '3974-0313'), new Telefone('96', '98848-4504')])
let c19 = new Cliente('Tatiane Laura Nascimento', 'Taty', 'F', new cpf('844.172.673-67', new Date()),[new Rg('38.387.973-5', new Date()),new Rg('36.554.097-9', new Date())], [new Telefone('83', '3598-1048'), new Telefone('83', '98361-8221')])
let c20 = new Cliente('Jennifer Emily da Cruz', 'Jeny', 'F', new cpf('019.607.162-39', new Date()),[new Rg('49.501.190-3', new Date()),new Rg('36.554.097-2', new Date())], [new Telefone('21', '3705-6350'), new Telefone('21', '98433-5474')])
let c21 = new Cliente('Renata Vera Barros', 'Renatinha', 'F', new cpf('510.294.249-26', new Date()),[new Rg('37.841.582-8', new Date()),new Rg('45.960.976-2', new Date())], [new Telefone('91', '2715-4675'), new Telefone('91', '99743-1232')])
let c22 = new Cliente('Yuri Oliver Benedito', 'Yuri', 'M', new cpf('679.466.271-06', new Date()),[new Rg('98.841.582-5', new Date()),new Rg('22.094.348-5', new Date())], [new Telefone('48', '2814-1679'), new Telefone('48', '99493-9634')])
let c23 = new Cliente('João Gustavo Vinicius Figueiredo', 'João', 'M', new cpf('831.793.136-68', new Date()),[new Rg('123415582-4', new Date()),new Rg('985540958-9', new Date())], [new Telefone('12', '687504758'), new Telefone('12', '9695295417')])
let c24 = new Cliente('Rafaela', 'Castro', 'F', new cpf('1464448478-20', new Date()),[new Rg('878415582-x', new Date()),new Rg('258554097-6', new Date())], [new Telefone('86', '789504758'), new Telefone('17', '99752954')])
let c25 = new Cliente('Artur', 'Tutu', 'M', new cpf('967444847-14', new Date()),[new Rg('614415582-4', new Date()),new Rg('563525555-4', new Date())], [new Telefone('12', '877504758'), new Telefone('', '9969529541')])
let c26 = new Cliente('Messias', 'Vitorino', 'M', new cpf('8464448478-36', new Date()),[new Rg('4178415582-9', new Date()),new Rg('4145568585-4', new Date())], [new Telefone('25', '565458744'), new Telefone('45', '3545747474')])
let c27 = new Cliente('Amanda', 'Dioly', 'F', new cpf('5864448789-41', new Date()),[new Rg('357155821-7', new Date()),new Rg('9888885877-9', new Date())], [new Telefone('12', '354155774'), new Telefone('36', '854456452')])
let c28 = new Cliente('Helena', 'Ravaglia', 'F', new cpf('5244448478-68', new Date()),[new Rg('4387415582-8', new Date()),new Rg('565889877-2', new Date())], [new Telefone('16', '88684858'), new Telefone('47', '558857474')])
let c29 = new Cliente('Giovanna', 'Liparelli', 'F', new cpf('123587787-15', new Date()),[new Rg('369415582-1', new Date()),new Rg('357774447-3', new Date())], [new Telefone('13', '898744554'), new Telefone('11', '858554577')])
let c30 = new Cliente('Rafaela', 'Queiroz', 'F', new cpf('2565455454-58', new Date()),[new Rg('4575554474-7', new Date()),new Rg('985540597-1', new Date())], [new Telefone('22', '6952214254'), new Telefone('12', '58747555')])

let s1 = new Servico('Unha','URCNS',15);
let s2 = new Servico('Limpeza','KAMDD',50);
let s3 = new Servico('Sobrancelha','SFJID',60);
let s4 = new Servico('Corte','DSERG',20);
let s5 = new Servico('Maquiagem','WEERF',70);
let s6 = new Servico('Pedicure','TFRJE',40);
let s7 = new Servico('Botox','RTUTE',80);
let s8 = new Servico('Preenchimento','WEHIW',45);
let s9 = new Servico('Cílios','RYIUJ',60);
let s10 = new Servico('Depilação','EHJFH',25);

let p1 = new Produto('Xampu','YJHDS',20);
let p2 = new Produto('Esmalte','RTEYU',15);
let p3 = new Produto('Camisa','RYTU7',30);
let p4 = new Produto('Cera','YTJUR',35);
let p5 = new Produto('Rímel','IKYTT',80);
let p6 = new Produto('Secador','EWMKR',200);
let p7 = new Produto('Demaquilante','WHUWF',60);
let p8 = new Produto('Acetona','REWOD',40);
let p9 = new Produto('Batom','IEKFE',25);
let p10 = new Produto('Pente','DFJGI',10);

c1.addProduto(p1)
c1.addProduto(p1)
c1.addProduto(p2)
c1.addProduto(p9)
c1.addServicos(s6);
c1.addServicos(s10)
c1.addServicos(s3)

c2.addProduto(p3)
c2.addProduto(p4)
c2.addProduto(p10)
c2.addProduto(p5)
c2.addServicos(s1)
c2.addServicos(s2)

c3.addProduto(p6)
c3.addProduto(p7)
c3.addProduto(p8)
c3.addProduto(p8)
c3.addServicos(s1)
c3.addServicos(s5)
c3.addServicos(s5)

c5.addProduto(p5)
c5.addProduto(p8)
c5.addProduto(p10)
c5.addServicos(s1)
c5.addServicos(s10)
c5.addServicos(s2)

c10.addServicos(s10)
c10.addServicos(s3)
c10.addProduto(p2)

c29.addProduto(p1)
c29.addProduto(p7)
c29.addProduto(p8)
c29.addServicos(s5)

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
        case 4:
            console.log("Listagem: \n");
            if(empresa.getClientes.length)
              console.log("1 - 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");   
              console.log("2 - Listagem clientes por gênero.\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("3 - Listagem serviços ou produtos mais consumidos\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("4 - Listagem serviços ou produtos mais consumidos por gênero\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
            console.log("5 - Listagem 10 clientes que menos consumiram produtos ou serviços\n");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            console.log("0 - Voltar Para o Menu Principal\n");

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ")

            switch (opcao) {
              case 1:
                let consumoMaior = new MaiorConsumo(empresa)
                consumoMaior.listar()
                break;

              case 2:
                let generoCliente = new GeneroCliente(empresa.getClientes)
                generoCliente.listar()
                break;

              case 3:
                let produtosServicosMaisConsumidos = new servicosProdutosConsumidos(empresa.getClientes)
                produtosServicosMaisConsumidos.listar()
                break;

              case 4:
                let generoConsumo = new GeneroConsumo(empresa.getClientes,empresa.getProdutos, empresa.getServicos)
                generoConsumo.listar()
                break;      

              case 5:
                let menorConsumo = new MenorConsumo(empresa)
                menorConsumo.listar()
                break; 

              case 6:
                let valorConsumo = new ConsumoValor(empresa.getClientes)
                  valorConsumo.listar()
                  break;

              case 0:
                console.log(`Até mais!`);
                break;
              default:
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
