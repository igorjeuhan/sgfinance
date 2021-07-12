//Importando o css
import './style.css';

//Componente
const MenuDash = () => {
    return ` 
        <nav class="menu">
            <ul>
                <li class="menu-option"><a href="">Dashboard</a></li>
                <li class="menu-option"><a href="">Contas</a></li>
                <li class="menu-option"><a href="">Cobranças</a></li>
                <li class="menu-option"><a href="">Sair</a></li>
            </ul>
        </nav>`;
}

//Exportando o componente
export default MenuDash;