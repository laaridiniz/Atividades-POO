/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "../estilo/estilo.css";
import TabelaClientes from "./tabelaClientes";


type props = {
    tema: string
}


export default class ListaCliente extends Component<props> {
     
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="table">
                <TabelaClientes></TabelaClientes>
            </div>
        )
    }
}