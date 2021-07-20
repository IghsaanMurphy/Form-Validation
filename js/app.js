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

// CHECK IF EMAIL IS VALID
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email not valid');
    }
}

// GET FIELD NAMES
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// CHECK REQUIRED FIELDS
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required`);
            if(`${getFieldName(input)}` === password2){
                showError(input, 'Passwords Do Not Match');
                console.log('im in')
            }
        } else {
            showSuccess(input);
        }
    })
}


// EVENT LISTENERS
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkEmail(email);
})

