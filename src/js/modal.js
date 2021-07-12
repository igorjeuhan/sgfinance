ModalConta = {
    open(){
        const modal = document.querySelector('.modal-overlay');
        if(modal.classList.contains('conta')){
            modal.classList.add('active-conta');
        } else if (modal.classList.contains('cobranca')){
            modal.classList.add('active-cobranca');
        }
        
    },
    close(){
        const modal = document.querySelector('.modal-overlay');
        if(modal.classList.contains('conta')){
            modal.classList.remove('active-conta');
        } else if (modal.classList.contains('cobranca')){
            modal.classList.remove('active-cobranca');
        }
        
    }
}

// ModalCobranca = {
//     open(){
//         const modal = document.querySelector('.modal-overlay-cobranca');
//         modal.classList.add('active-cobranca');
        
//     },
//     close(){
//         const modal = document.querySelector('.modal-overlay-cobranca');
//         modal.classList.remove('active-cobranca');

        
//     }
// }