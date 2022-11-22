import Cadastro from "./cadastro";
import Cliente from "./cliente";
import cpf from "./cpf";
import Entrada from "./entrada";
import Rg from "./rg";
import Telefone from "./telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {

        console.log(`\nInício do cadastro do cliente`);

        var nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        var nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        var genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: `);
        var valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        var data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf (dd/mm/yyyy): `);
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var CPF = new cpf(valor, dataEmissao);
        let plusRg = true;
        let rgs: Rg[] = [];
        while(plusRg){
            var rg = this.entrada.receberTexto(`Insira o número do RG: `);
            var dataRg = this.entrada.receberTexto(`Insira a data de emissão do RG: `);
            var partesData = dataRg.split('/');
            var ano = new Number(partesData[2].valueOf()).valueOf();
            var mes = new Number(partesData[1].valueOf()).valueOf();
            var dia = new Number(partesData[0].valueOf()).valueOf();
            var dataEmissao = new Date(ano, mes, dia);
            var novoRg = new Rg(rg,dataEmissao);
            rgs.push(novoRg);
            console.log(`RG cadastrado com sucesso!\n`);
            var opcao = this.entrada.receberNumero(`Digite 1 para adicionar outro RG ou 0 para seguir com o cadastro: `);
            if (opcao != 1){
                plusRg = false;
            }     
        }
        let plusTel = true;
        let tels: Telefone[] = [];
        while(plusTel){
            var ddd = this.entrada.receberTexto(`Insira o DDD do telefone: `);
            var num = this.entrada.receberTexto(`Insira o número do telefone: `);
            var novoTel = new Telefone(ddd, num);
            tels.push(novoTel);
            console.log(`Telefone cadastrado com sucesso!\n`);
            var opcao = this.entrada.receberNumero(`Digite 1 para adicionar outro telefone ou 0 para seguir com o cadastro: `);
            if (opcao != 1){
                plusTel = false;
            }     
        }
        let cliente = new Cliente(nome, nomeSocial, genero,CPF,rgs,tels);
        this.clientes.push(cliente)
        console.log(`\nCadastro finalizado :)\n`);
    }

}