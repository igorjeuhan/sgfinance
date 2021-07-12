//Importando o css
import "./style.css";
//Componente
const HeaderDash = () => {
    return `
    <header class="header-content">
        <h1>Dashboard</h1>
        <button onclick="ModalConta.open()" class="modal-button conta">+ Conta</button>
        <button onclick="ModalConta.open()" class="modal-button cobranca">+ Cobrança</button>
    </header>
    `;
}

//Exportando o componente
export default HeaderDash;