//Importando o css
import './style.css';

//Componente
const MenuDash = () => {
    return ` 
        <nav>
            <ul>
                <li><a href=""><img class="icon" src="src/images/icons/dash.svg" alt="Ícone de dashboard" title="Dashboard">Dashboard</a></li>
                <li><a href=""><img class="icon" src="src/images/icons/list.svg" alt="Ícone de lista" title="Contas">Contas</a></li>
                <li><a href=""><img class="icon" src="src/images/icons/coust.svg" alt="Ícone de dinheiro" title="Cobranças">Cobranças</a></li>
                <li><a href=""><img class="icon" src="src/images/icons/exit.svg" alt="Ícone de logout" title="Sair">Sair</a></li>
            </ul>
        </nav>`;
}

//Exportando o componente
export default MenuDash;