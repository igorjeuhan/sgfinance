//Importando os componentes
import HeaderDash from './src/components/HeaderDash';
import MenuDash from './src/components/MenuDash';
import SectionColumn from './src/components/objects/SectionColumn';
import SubtitleDash from './src/components/SubtitleDash';
import SectionCards from './src/components/objects/SectionCards';
import TableDash from './src/components/TableDash';
import ModalDash from './src/components/ModalDash';
import ModalDashTwo from './src/components/ModalDash';

//Importando o css do Settings
import './src/css/generic/reset.css';
import './src/css/settings/fonts.css';
import './src/css/settings/colors.css';
//Importando o css dos Elements
import './src/css/elements/base.css';
import './src/css/elements/patternElements.css';
import './src/css/elements/icons.css';
import './src/css/elements/small.css';
import './src/css/elements/animationElements.css';

//Montando o layout principal
const $root = document.querySelector('#root');
const $htmlHeaderDash = HeaderDash();
const $htmlMenuDash = MenuDash();
const $htmlSectionColumn = SectionColumn();
const $htmlSubtitleDash = SubtitleDash();
const $htmlSectionCards = SectionCards(4);
const $htmlTableDash = TableDash();
const $htmlModalDash = ModalDash();
const $htmlModalDashTwo = ModalDashTwo();

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${$htmlHeaderDash}
        ${$htmlMenuDash}
        ${$htmlSectionColumn}
        ${$htmlModalDash}
        ${$htmlModalDashTwo}
    ` 
);

//Incluindo componentes dentro de outros componentes
const $sectionColumn = document.querySelector('#section-column');
$sectionColumn.insertAdjacentHTML(
    "beforeend", 
    `
        ${$htmlSubtitleDash}
        ${$htmlSectionCards.repeat(2)}
        ${$htmlTableDash}
    `
);


