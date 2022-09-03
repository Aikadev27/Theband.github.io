const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.js-close');
const modalContainer = document.querySelector('.js-modal-container');

function showModal() {
    modal.classList.add('open');
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal);
}
close.addEventListener('click', function(event) {
    modal.classList.remove('open');
});
modal.addEventListener('click', function(event) {
    modal.classList.remove('open');
});
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})