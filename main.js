//Importando os componentes
import HeaderDash from './src/components/HeaderDash';
import MenuDash from './src/components/MenuDash';
import SectionColumn from './src/components/objects/SectionColumn';
import SectionCards from './src/components/objects/SectionCards';
import CardDash from './src/components/CardDash';

//Importando o css do Settings
import './src/css/generic/reset.css';
import './src/css/settings/fonts.css';
import './src/css/settings/colors.css';
//Importando o css dos Elements
import './src/css/elements/base.css';
import './src/css/elements/patternElements.css';
import './src/css/elements/icons.css';


//Montando o layout principal
const $root = document.querySelector('#root');
const $htmlHeaderDash = HeaderDash();
const $htmlMenuDash = MenuDash();
const $htmlSectionColumn = SectionColumn();
const $htmlSectionCards = SectionCards();
const $htmlCardDash = CardDash();

$root.insertAdjacentHTML('beforeend', $htmlHeaderDash);
$root.insertAdjacentHTML('beforeend', $htmlMenuDash);
$root.insertAdjacentHTML('beforeend', $htmlSectionColumn);

//Incluindo componentes dentro de outros componentes
const $sectionColumn = document.querySelector('#section-column');
$sectionColumn.insertAdjacentHTML('beforeend', $htmlSectionCards);
//Busca a seção dos cards e insere a quantidade de cards passando o valor por parâmetro
const $sectionCards = document.querySelector('#section-cards');
$sectionCards.insertAdjacentHTML('beforeend', $htmlCardDash.repeat(4));

