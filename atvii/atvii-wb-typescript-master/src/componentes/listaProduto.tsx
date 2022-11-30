/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "../estilo/estilo.css";


type props = {
    tema: string
}


export default class ListaProduto extends Component<props> {
     
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="table">
                <table className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Kit Shampoo e Condicionador</td>
                            <td>R$ 40,00</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Máscara para Progressiva</td>
                            <td>R$ 180,00</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Óleo nutritivo</td>
                            <td>R$ 15,00</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
        </table>
        </div>
        )
    }
}
