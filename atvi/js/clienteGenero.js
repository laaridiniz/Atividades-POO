"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class GeneroCliente extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let masc = [];
        let fem = [];
        this.clientes.forEach(clientes => {
            if (clientes.genero === "M") {
                masc.push(clientes);
            }
            else if (clientes.genero === "F") {
                fem.push(clientes);
            }
        });
        console.log("Listagem de Clientes por Gênero");
        console.log("Masculino: \n");
        console.log(`Lista de clientes:\n`);
        masc.forEach(masc => {
            console.log(`Nome: ` + masc.nome);
            console.log(`Nome social: ` + masc.nomeSocial);
            console.log(`Gênero: ` + masc.genero);
            console.log(`CPF: ` + masc.getCpf.getValor);
            console.log(`Data de emissão CPF: ` + masc.getCpf.getDataEmissao.toLocaleDateString());
            let rgs = masc.getRgs;
            for (let i = 0; i < rgs.length; i++) {
                console.log(`Rg: ` + rgs[i].getNumero);
                console.log(`Data Emissão RG: ` + rgs[i].getDataEmissao.toLocaleDateString());
            }
            let telefones = masc.getTelefones;
            for (let i = 0; i < telefones.length; i++) {
                console.log('Telefone: (' + telefones[i].getDdd + ') ' + telefones[i].getNumero);
            }
            console.log(`--------------------------------------`);
        });
        //Feminino
        console.log("Feminino:");
        console.log(`\nLista de clientes:`);
        console.log("\n");
        fem.forEach(fem => {
            console.log(`Nome: ` + fem.nome);
            console.log(`Nome social: ` + fem.nomeSocial);
            console.log(`Gênero: ` + fem.genero);
            console.log(`CPF: ` + fem.getCpf.getValor);
            console.log(`Data de emissão CPF: ` + fem.getCpf.getDataEmissao.toLocaleDateString());
            let rgs = fem.getRgs;
            for (let i = 0; i < rgs.length; i++) {
                console.log(`Rg: ` + rgs[i].getNumero);
                console.log(`Data Emissão RG: ` + rgs[i].getDataEmissao.toLocaleDateString());
            }
            let telefones = fem.getTelefones;
            for (let i = 0; i < telefones.length; i++) {
                console.log('Telefone: (' + telefones[i].getDdd + ') ' + telefones[i].getNumero);
            }
            console.log(`--------------------------------------`);
        });
    }
}
exports.default = GeneroCliente;
