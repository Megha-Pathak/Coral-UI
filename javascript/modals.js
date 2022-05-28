const simpleModalBtn = document.querySelector('#simple-modal-btn');
const simpleModal = document.querySelector('#simple-modal');
const alertModalBtn = document.querySelector('#alert-modal-btn');
const alertModal = document.querySelector('#alert-modal');
const confirmationModalBtn = document.querySelector('#confirmation-modal-btn');
const confirmationModal = document.querySelector('#confirmation-modal');

const displayModal = (ele) => ele.showModal();

simpleModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayModal(simpleModal);
});

alertModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayModal(alertModal);
});

confirmationModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayModal(confirmationModal);
});