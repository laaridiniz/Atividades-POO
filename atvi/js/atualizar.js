"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Atualizar {
    constructor() {
        this.formatData = (data) => {
            var partesData = data.split('/');
            var ano = new Number(partesData[2].valueOf()).valueOf();
            var mes = new Number(partesData[1].valueOf()).valueOf();
            var dia = new Number(partesData[0].valueOf()).valueOf();
            return new Date(ano, mes, dia);
        };
        this.formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
    }
}
exports.default = Atualizar;
