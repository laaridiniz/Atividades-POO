import Cadastro from "./cadastro"
import cpf from "./cpf"
import Produto from "./produto"
import Rg from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private CPF: cpf
    private rgs: Array<Rg>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, CPF: cpf){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.CPF = CPF
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    
    public get getCPF(): cpf {
        return this.CPF
    }
    public get getRgs(): Array<Rg> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefone(): Array<Telefone>{
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto>{
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico>{
        return this.servicosConsumidos
    }
}