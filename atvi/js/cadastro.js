"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cadastro {
    constructor() {
        this.formatData = (data) => {
            var partesData = data.split('/');
            var ano = new Number(partesData[2].valueOf()).valueOf();
            var mes = new Number(partesData[1].valueOf()).valueOf();
            var dia = new Number(partesData[0].valueOf()).valueOf();
            return new Date(ano, mes, dia);
        };
    }
    geraStringAleatoria(tamanho) {
        var stringAleatoria = '';
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i = 0; i < tamanho; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    }
}
exports.default = Cadastro;
