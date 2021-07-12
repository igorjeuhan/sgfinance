//Importando o css
import './style.css';
//Importando o componente
import CardDash from '../../CardDash';

//Componente
const SectionCards = (amountCards) => {

    const $htmlCardDash = CardDash();
    const $htmlContent = $htmlCardDash.repeat(amountCards);

    return `
        <div class="section-cards" id="section-cards">
        ${$htmlContent}
        </div>
    `;
}

//Exportando o componente
export default SectionCards;