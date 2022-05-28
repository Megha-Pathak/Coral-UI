const baselineSnackbar = document.querySelector('#baseline-snackbar');
const leadingSnackbar = document.querySelector('#leading-snackbar');
const stackedSnackbar = document.querySelector('#stacked-snackbar');

const snackbarBtns = document.querySelectorAll('.showSnackbar-btn');
const snackbarIcons = document.querySelectorAll('.snackbar-icon');

const showSnackbar = (e) => {
  const snackbar = e.target.getAttribute('data-button');
  document.querySelector(`#${snackbar}-snackbar`).classList.add('showSnackbar');

  setTimeout(() => document.querySelector(`#${snackbar}-snackbar`).classList.remove('showSnackbar'), 3000);
};

const hideSnackbar = (e) => {
  const snackbar = e.target.getAttribute('data-snackbar');
  document.querySelector(`#${snackbar}-snackbar`).classList.remove('showSnackbar');
};

snackbarBtns.forEach(snackbarBtn => snackbarBtn.addEventListener('click', showSnackbar));
snackbarIcons.forEach(snackbarIcon => snackbarIcon.addEventListener('click', hideSnackbar));
