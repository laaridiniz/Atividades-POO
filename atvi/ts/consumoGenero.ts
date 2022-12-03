
import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";
import Consumo from "./consumo";
import OrdenadorConsumo from "./consumoOrdem";
import Listagem from "./listagem";
import Empresa from "./empresa";

export default class GeneroConsumo extends Listagem {
  private clientes: Array<Cliente>
  private produtos: Array<Produto>
  private servicos: Array<Servico>

  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
    super()
    this.clientes = clientes
    this.produtos = produtos
    this.servicos = servicos
  }

  public listar(): void {
  //Listagem de produtos e serviços pelo gênero feminino
    let generoCliente = 'Feminino';

    let meninas: Array<Cliente> = []
    for (let index = 0; index < this.clientes.length; index++) {
      const cliente = this.clientes[index];
      if (cliente.genero == generoCliente) {
        meninas.push(cliente)
      }
    }

    let consumoFem: Consumo[] = []
    //verifica produto
    this.produtos.forEach(produto => {
      let consumo = new Consumo()
      consumo.nome = produto.nome
      consumo.valor = 0
      consumoFem.push(consumo)
    })

    meninas.forEach(meninas => {
      meninas.getProdutosConsumidos.forEach(produtoConsumido => {
        consumoFem.forEach(consumoFem => {
          if (produtoConsumido.nome == consumoFem.nome) {
            consumoFem.valor = consumoFem.valor + 1
          }
        })
      })
    })


    let ordenadorFem = new OrdenadorConsumo()
    ordenadorFem.consumo = consumoFem

    let consumoOrdenadosFem = ordenadorFem.ordenarConsumo()
    console.log("-------------------------------------------------\nGênero Feminino - Produtos mais consumidos: ")
    for(var i = 0; i < consumoOrdenadosFem.length; i++){
      console.log(`${i+1}º Produto - Nome: ${consumoOrdenadosFem[i].nome} - Quantidade: ${consumoOrdenadosFem[i].valor}`);
    };
    // verifica serviços
    let consumoServico: Consumo[] = []

    this.servicos.forEach(servico => {
      let consumoSer = new Consumo()
      consumoSer.nome = servico.nome
      consumoSer.valor = 0
      consumoServico.push(consumoSer)
    })

    meninas.forEach(meninas => {
      meninas.getServicosConsumidos.forEach(servicoConsumido => {
        consumoServico.forEach(consumoSer => {
          if (servicoConsumido.nome == consumoSer.nome) {
            consumoSer.valor = consumoSer.valor + 1
          }
        })
      })
    })


    let ordenadorServicoFem = new OrdenadorConsumo()
    ordenadorServicoFem.consumo = consumoServico

    let consumoOrdenadoServicoFem = ordenadorServicoFem.ordenarConsumo()
    console.log("---------------------------------------------\nGênero Feminino - Serviços mais consumidos: ")
    for(var i = 0; i < consumoOrdenadoServicoFem.length; i++){
      console.log(`${i+1}º Serviço - Nome: ${consumoOrdenadoServicoFem[i].nome} - Quantidade: ${consumoOrdenadoServicoFem[i].valor}`);
    };

    //masculino
    let generoClienteMasc = 'M';

    let meninos: Array<Cliente> = []
    for (let index = 0; index < this.clientes.length; index++) {
      const cliente = this.clientes[index];
      if (cliente.genero == generoClienteMasc) {
        meninos.push(cliente)
      }
    }

    let consumoMasc:  Consumo[] = []
    //verifica produto
    this.produtos.forEach(produto => {
      let consumo = new Consumo()
      consumo.nome = produto.nome
      consumo.valor = 0
      consumoMasc.push(consumo)
    })

    meninos.forEach(menino => {
      menino.getProdutosConsumidos.forEach(produtoConsumido => {
        consumoMasc.forEach(consumo => {
          if (produtoConsumido.nome == consumo.nome) {
            consumo.valor = consumo.valor + 1
          }
        })
      })
    })

    let ordenador = new OrdenadorConsumo()
    ordenador.consumo = consumoMasc

    let consumoMascOrdenados = ordenador.ordenarConsumo()
    console.log("----------------------------------------\nGênero Masculino - Produtos mais consumidos: ")
    for(var i = 0; i < consumoMascOrdenados.length; i++){
      console.log(`${i+1}º Produto - Nome: ${consumoMascOrdenados[i].nome} - Quantidade: ${consumoMascOrdenados[i].valor}`);
    };

    //verifica serviços

    let consumoServicoMasc: Consumo[] = []

    this.servicos.forEach(servico => {
      let consumoServicoM = new Consumo()
      consumoServicoM.nome = servico.nome
      consumoServicoM.valor = 0
      consumoServicoMasc.push(consumoServicoM)
    })

    meninos.forEach(meninos => {
      meninos.getServicosConsumidos.forEach(servicoConsumido => {
        consumoServicoMasc.forEach(consumoServicoM => {
          if (servicoConsumido.nome == consumoServicoM.nome) {
            consumoServicoM.valor = consumoServicoM.valor + 1
          }
        })
      })
    })


    let ordenadorServicoMasc = new OrdenadorConsumo()
    ordenadorServicoMasc.consumo = consumoServicoMasc

    let consumoOrdenadosServM = ordenadorServicoMasc.ordenarConsumo()
    console.log("---------------------------------------\nGênero Masculino - Serviços mais consumidos: ")
    for(var i = 0; i < consumoOrdenadosServM.length; i++){
      console.log(`${i+1}º Serviço - Nome: ${consumoOrdenadosServM[i].nome} - Quantidade: ${consumoOrdenadosServM[i].valor}`);
    };
    
  }
}
