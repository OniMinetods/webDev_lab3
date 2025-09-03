const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const showPassword = document.getElementById('dialog-show-password');

let inputArray = [nameInput, emailInput, passwordInput];
inputArray = inputArray.reverse();

const formData = new FormData();

const errorNameElement = document.getElementById('format-name');
const errorEmailElement = document.getElementById('format-email');
const errorPasswordElement = document.getElementById('format-password');

const myForm = document.getElementById('form');

const modal = document.getElementById('dialog');

nameInput.addEventListener('blur', () => {
  if (!nameInput.validity.valid) {
    nameInput.setAttribute('aria-invalid', 'true');
    errorNameElement.removeAttribute('hidden');
  } else {
    nameInput.setAttribute('aria-invalid', 'false');
    errorNameElement.setAttribute('hidden', 'true');
  }
});

emailInput.addEventListener('blur', () => {
  if (!emailInput.validity.valid) {
    emailInput.setAttribute('aria-invalid', 'true');
    errorEmailElement.removeAttribute('hidden');
  } else {
    emailInput.setAttribute('aria-invalid', 'false');
    errorEmailElement.setAttribute('hidden', 'true');
  }
});

passwordInput.addEventListener('blur', () => {
  if (!passwordInput.validity.valid) {
    passwordInput.setAttribute('aria-invalid', 'true');
    errorPasswordElement.removeAttribute('hidden');
  } else {
    passwordInput.setAttribute('aria-invalid', 'false');
    errorPasswordElement.setAttribute('hidden', 'true');
  }
});

nameInput.addEventListener('input', () => {
  if (nameInput.validity.valid) {
    nameInput.setAttribute('aria-invalid', 'false');
    errorNameElement.setAttribute('hidden', 'true');
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid) {
    emailInput.setAttribute('aria-invalid', 'false');
    errorEmailElement.setAttribute('hidden', 'true');
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valid) {
    passwordInput.setAttribute('aria-invalid', 'false');
    errorPasswordElement.setAttribute('hidden', 'true');
  }
});

myForm.addEventListener('submit', function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    inputArray.forEach((item) => {
      if (item.validity.valid === false) {
        item.focus();
      }
    });
  } else {
    formData.append('Name', nameInput.value);
    formData.append('Email', emailInput.value);
    formData.append('Password', passwordInput.value);
    // event.preventDefault();
    // formData.forEach((i) => {
    //   console.log(i);
    // });
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    window['dialog'].close();
  }
}); // не берется область с padding'ом (увеличил padding у внутренних элементов)

showPassword.addEventListener('pointerdown', () => {
  passwordInput.setAttribute('type', 'text');
});

showPassword.addEventListener('pointerup', () => {
  passwordInput.setAttribute('type', 'password');
});
