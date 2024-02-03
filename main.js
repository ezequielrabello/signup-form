const inputs = window.document.querySelectorAll('input')
const form = window.document.querySelector('form')
const label = window.document.querySelectorAll('label')
const res = window.document.querySelectorAll('.res')
const hasToBeEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


form.addEventListener('submit', (event) => {
    event.preventDefault()
    validate_firstName()
    validate_lastName()
    validate_email()
    validate_password()
})

function setError(index) {
    inputs[index].classList.add('invalid')
    res[index].innerHTML = `${label[index].innerHTML} cannot be empty`
    inputs[index].placeholder = ""
    
}

function removeError(index) {
    inputs[index].classList.remove('invalid')
    res[index].innerHTML = ""
}

function validate_firstName() {
    if (inputs[0].value.length === 0) {
        setError(0)
    } else {
        removeError(0)
    }
}

function validate_lastName() {
    if (inputs[1].value.length === 0) {
        setError(1)
    } else {
        removeError(1)
    }
}

function validate_email() {
    if (!hasToBeEmail.test(inputs[2].value)) {
        inputs[2].classList.add('invalid')
        res[2].innerHTML = `Looks like this is not an email`
        inputs[2].placeholder = "email@example/com"

    } else {
        inputs[2].classList.remove('invalid')
        res[2].innerHTML = ""
    }
}

function validate_password() {
    if (inputs[3].value.length === 0) {
        setError(3)
    } else {
        removeError(3)
    }
}