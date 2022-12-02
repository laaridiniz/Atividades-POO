/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import EnhancedTable from "./tabelaServico";

type props = {
    tema: string
}


export default class ListaProduto extends Component<props> {
     
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="table">
                <EnhancedTable></EnhancedTable>
            </div>
        )
    }
}