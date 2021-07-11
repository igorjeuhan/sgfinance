//Importando os componentes
import HeaderDash from './src/components/HeaderDash';
import MenuDash from './src/components/MenuDash';
import SectionColumn from './src/components/objects/SectionColumn';
import SectionCards from './src/components/objects/SectionCards';
import SubtitleDash from './src/components/SubtitleDash';

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
const $htmlSubtitleDash = SubtitleDash();
const $htmlSectionCards = SectionCards(4);

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${$htmlHeaderDash}
        ${$htmlMenuDash}
        ${$htmlSectionColumn}
    ` 
);

//Incluindo componentes dentro de outros componentes
const $sectionColumn = document.querySelector('#section-column');
$sectionColumn.insertAdjacentHTML(
    "beforeend", 
    `
        ${$htmlSubtitleDash}
        ${$htmlSectionCards.repeat(2)}
    `
);


