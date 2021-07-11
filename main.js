//Importando os componentes
import HeaderDash from './src/components/HeaderDash';
import MenuDash from './src/components/MenuDash';
import SectionColumn from './src/components/SectionColumn';
import SectionRow from './src/components/SectionRow';
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
const $htmlSectionRow = SectionRow();
const $htmlCardDash = CardDash();

$root.insertAdjacentHTML('beforeend', $htmlHeaderDash);
$root.insertAdjacentHTML('beforeend', $htmlMenuDash);
$root.insertAdjacentHTML('beforeend', $htmlSectionColumn);

//Incluindo componentes dentro de outros componentes
const $sectionColumn = document.querySelector('#section-column');
$sectionColumn.insertAdjacentHTML('beforeend', $htmlSectionRow);

const $sectionRow = document.querySelector('#section-row');
for(let i = 0; i <= 4; i++){
    $sectionRow.insertAdjacentHTML('beforeend', $htmlCardDash);
}
