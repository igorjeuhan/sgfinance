//Importando o css
import './style.css';

//Componente
const CardDash = () => {
    return `
        <div class="card-content">
            <header class="header-card">
                <h2>Fixas</h2>
                <span class="value-qtd">10</span>
            </header>
            <div class="footer-card">
                <p class="total total1">Total: R$4.000,00</p> 
            </div>
        </div>
    `;
}

//Exportando o componente
export default CardDash;