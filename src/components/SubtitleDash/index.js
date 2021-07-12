//Importando o css
import './style.css';

//Componente
const SubtitleDash = () => {
    return `
        <section class="legendas-dash">
            <h2>Legenda</h2>
            <div class="content-legenda">
                <div class="legenda-dash">
                    <img class="icon-dash" src="/src/images/icons/check.svg" alt="Pago" title="Pago">
                    <span class="text-legenda">Pago</span>
                </div>
                <div class="legenda-dash">
                    <img class="icon-dash" src="/src/images/icons/clock.svg" alt="Pendente" title="Pendente">
                    <span class="text-legenda">Pendente</span>
                </div>
                <div class="legenda-dash">
                    <img class="icon-dash" src="/src/images/icons/alert.svg" alt="Vencido" title="Vencido">
                    <span class="text-legenda">Vencido</span>
                </div>
            </div>
        </section>
    `;
}

export default SubtitleDash;