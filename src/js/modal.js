ModalConta = {
    open(){
        const modal = document.querySelector('.modal-overlay-conta');
        modal.classList.add('active-conta');
    },
    close(){
        const modal = document.querySelector('.modal-overlay-conta');
        modal.classList.remove('active-conta');
    }
}

ModalCobranca = {
    open(){
        const modal = document.querySelector('.modal-overlay-cobranca');
        modal.classList.add('active-cobranca');
    },
    close(){
        const modal = document.querySelector('.modal-overlay-cobranca');
        modal.classList.remove('active-cobranca');
    }
}