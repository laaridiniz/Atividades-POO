"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consumo_1 = __importDefault(require("./consumo"));
const consumoOrdem_1 = __importDefault(require("./consumoOrdem"));
const listagem_1 = __importDefault(require("./listagem"));
class GeneroConsumo extends listagem_1.default {
    constructor(clientes, produtos, servicos) {
        super();
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    listar() {
        //Listagem de produtos e serviços pelo gênero feminino
        let generoCliente = 'Feminino';
        let meninas = [];
        for (let index = 0; index < this.clientes.length; index++) {
            const cliente = this.clientes[index];
            if (cliente.genero == generoCliente) {
                meninas.push(cliente);
            }
        }
        let consumoFem = [];
        //verifica produto
        this.produtos.forEach(produto => {
            let consumo = new consumo_1.default();
            consumo.nome = produto.nome;
            consumo.valor = 0;
            consumoFem.push(consumo);
        });
        meninas.forEach(meninas => {
            meninas.getProdutosConsumidos.forEach(produtoConsumido => {
                consumoFem.forEach(consumoFem => {
                    if (produtoConsumido.nome == consumoFem.nome) {
                        consumoFem.valor = consumoFem.valor + 1;
                    }
                });
            });
        });
        let ordenadorFem = new consumoOrdem_1.default();
        ordenadorFem.consumo = consumoFem;
        let consumoOrdenadosFem = ordenadorFem.ordenarConsumo();
        console.log("-------------------------------------------------\nGênero Feminino - Produtos mais consumidos: ");
        for (var i = 0; i < consumoOrdenadosFem.length; i++) {
            console.log(`${i + 1}º Produto - Nome: ${consumoOrdenadosFem[i].nome} - Quantidade: ${consumoOrdenadosFem[i].valor}`);
        }
        ;
        // verifica serviços
        let consumoServico = [];
        this.servicos.forEach(servico => {
            let consumoSer = new consumo_1.default();
            consumoSer.nome = servico.nome;
            consumoSer.valor = 0;
            consumoServico.push(consumoSer);
        });
        meninas.forEach(meninas => {
            meninas.getServicosConsumidos.forEach(servicoConsumido => {
                consumoServico.forEach(consumoSer => {
                    if (servicoConsumido.nome == consumoSer.nome) {
                        consumoSer.valor = consumoSer.valor + 1;
                    }
                });
            });
        });
        let ordenadorServicoFem = new consumoOrdem_1.default();
        ordenadorServicoFem.consumo = consumoServico;
        let consumoOrdenadoServicoFem = ordenadorServicoFem.ordenarConsumo();
        console.log("---------------------------------------------\nGênero Feminino - Serviços mais consumidos: ");
        for (var i = 0; i < consumoOrdenadoServicoFem.length; i++) {
            console.log(`${i + 1}º Serviço - Nome: ${consumoOrdenadoServicoFem[i].nome} - Quantidade: ${consumoOrdenadoServicoFem[i].valor}`);
        }
        ;
        //masculino
        let generoClienteMasc = 'M';
        let meninos = [];
        for (let index = 0; index < this.clientes.length; index++) {
            const cliente = this.clientes[index];
            if (cliente.genero == generoClienteMasc) {
                meninos.push(cliente);
            }
        }
        let consumoMasc = [];
        //verifica produto
        this.produtos.forEach(produto => {
            let consumo = new consumo_1.default();
            consumo.nome = produto.nome;
            consumo.valor = 0;
            consumoMasc.push(consumo);
        });
        meninos.forEach(menino => {
            menino.getProdutosConsumidos.forEach(produtoConsumido => {
                consumoMasc.forEach(consumo => {
                    if (produtoConsumido.nome == consumo.nome) {
                        consumo.valor = consumo.valor + 1;
                    }
                });
            });
        });
        let ordenador = new consumoOrdem_1.default();
        ordenador.consumo = consumoMasc;
        let consumoMascOrdenados = ordenador.ordenarConsumo();
        console.log("----------------------------------------\nGênero Masculino - Produtos mais consumidos: ");
        for (var i = 0; i < consumoMascOrdenados.length; i++) {
            console.log(`${i + 1}º Produto - Nome: ${consumoMascOrdenados[i].nome} - Quantidade: ${consumoMascOrdenados[i].valor}`);
        }
        ;
        //verifica serviços
        let consumoServicoMasc = [];
        this.servicos.forEach(servico => {
            let consumoServicoM = new consumo_1.default();
            consumoServicoM.nome = servico.nome;
            consumoServicoM.valor = 0;
            consumoServicoMasc.push(consumoServicoM);
        });
        meninos.forEach(meninos => {
            meninos.getServicosConsumidos.forEach(servicoConsumido => {
                consumoServicoMasc.forEach(consumoServicoM => {
                    if (servicoConsumido.nome == consumoServicoM.nome) {
                        consumoServicoM.valor = consumoServicoM.valor + 1;
                    }
                });
            });
        });
        let ordenadorServicoMasc = new consumoOrdem_1.default();
        ordenadorServicoMasc.consumo = consumoServicoMasc;
        let consumoOrdenadosServM = ordenadorServicoMasc.ordenarConsumo();
        console.log("---------------------------------------\nGênero Masculino - Serviços mais consumidos: ");
        for (var i = 0; i < consumoOrdenadosServM.length; i++) {
            console.log(`${i + 1}º Serviço - Nome: ${consumoOrdenadosServM[i].nome} - Quantidade: ${consumoOrdenadosServM[i].valor}`);
        }
        ;
    }
}
exports.default = GeneroConsumo;
