"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrdenadorConsumo {
    ordenarConsumo() {
        return this.consumo.sort((c1, c2) => (c1.valor > c2.valor ? -1 : 1));
    }
}
exports.default = OrdenadorConsumo;
