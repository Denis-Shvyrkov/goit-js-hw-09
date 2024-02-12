const STORAGE_KEY = 'userData';

const form = document.querySelector('form');

const textarea = form.querySelector('.textarea');

init();

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const data = {
    email,
    message,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
}
function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const data = {
    email,
    message,
  };

  saveToLS(STORAGE_KEY, data);
}

function saveToLS(key, value) {
  const strfdValue = JSON.stringify(value);

  localStorage.setItem(key, strfdValue);
}

function loadFromLS(key) {
  const strfdValue = localStorage.getItem(key);
  try {
    return JSON.parse(strfdValue);
  } catch {
    return strfdValue;
  }
}

function init() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}
