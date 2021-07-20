const form = document.getElementById('form'),
username = document.getElementById('username'),
email = document.getElementById('email'),
password = document.getElementById('password'),
password2 = document.getElementById('password2');

// SHOW INPUT ERROR MESSAGE
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// SHOW SUCCESS OUTLINE 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

