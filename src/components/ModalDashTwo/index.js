//Importando o css
import './style.css';

//Componente
const ModalDashTwo = () => {
    return `
        <section class="modal-overlay cobranca">
            <div class="modal-content cobranca">
                <h2>Adicione a cobrança</h2>
                <form action="#">
                    <div class="input-group">
                        <label for="description">Cliente</label>
                        <input type="text" name="description" id="description" placeholder="Nome do cliente">
                    </div>
                    <div class="input-group">
                        <label for="value">Valor</label>
                        <input type="number" name="value" id="value" placeholder="Valor cobrado">
                    </div>
                    <div class="input-group">
                        <label for="Data">Data</label>
                        <input type="date" name="data" id="data">
                        <small>Data da cobrança</small>
                    </div>
                    <div class="input-group actions">
                        <a href="#" onclick="ModalConta.close()" class="btn-modal cancelar">Cancelar</a>
                        <button class="btn-modal salvar">Salvar</button>
                    </div>
                </form>
            </div>
        </section>
    `;
}

export default ModalDashTwo;