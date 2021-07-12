//Importando o css
import './style.css';

//Componente
const ModalDash = () => {
    return `
        <section class="modal-overlay conta">
            <div class="modal-content conta">
                <h2>Adicione a conta</h2>
                <form action="#">
                    <div class="input-group">
                        <label for="titulo">Título</label>
                        <input type="text" name="titulo" id="titulo" placeholder="Título da conta">
                    </div>
                    <div class="input-group">
                        <label for="description">Descrição</label>
                        <input type="text" name="description" id="description" placeholder="Descrição da conta">
                    </div>
                    <div class="input-group">
                        <label for="value">Valor</label>
                        <input type="number" name="value" id="value" placeholder="Valor da conta">
                    </div>
                    <div class="input-group">
                        <label for="Data">Data</label>
                        <input type="date" name="data-venc" id="data">
                        <small>Data de vencimento</small>
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

export default ModalDash;