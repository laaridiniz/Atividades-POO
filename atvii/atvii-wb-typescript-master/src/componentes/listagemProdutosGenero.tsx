/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "../estilo/estilo.css";


type props = {
    tema: string
}

export default class ListagemProdutoGenero extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
            <div style={{ display: "inline"}}>
                <table style={{ width: "49%", float: "left"}} className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Feminino</th>
                            <th>Masculino</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>15</td>
                            <td>4</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>1</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>6</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ width: "49%", float: "left"}} className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Feminino</th>
                            <th>Masculino</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>15</td>
                            <td>4</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>1</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>6</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: "inline"}}>
                <table style={{ width: "49%", float: "left"}} className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Feminino</th>
                            <th>Masculino</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>15</td>
                            <td>4</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>1</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>6</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ width: "49%", float: "left"}} className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Feminino</th>
                            <th>Masculino</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>15</td>
                            <td>4</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>1</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>6</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
