//Importando o css
import './style.css';

//Componente
const TableDash = () => {
    return `
        <section class="section-table">
            <h2>Fixas</h2>
                <table class="table-dash">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>Vencimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Medicamentos controlados</td>
                            <td>R$4.000,00</td>
                            <td class="status-data"><img class="icon-dash" src="/src/images/icons/alert.svg" alt="Vencido" title="Vencido"></td>
                            <td class="vencimento vencido">07/07/2021</td>
                            <td>
                                <button class="btn-tb editar"><img class="icon-dash" src="src/images/icons/edit.svg" alt="Editar" title="Editar"></button>
                                <button class="btn-tb excluir"><img class="icon-dash" src="src/images/icons/delete.svg" alt="Excluir" title="Excluir"></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </section>
    `;
}

export default TableDash;