const input = document.querySelector('input')
const error = document.querySelector('.error')
const form = document.querySelector('form')

input.addEventListener('input', (event) => {
    console.log(event)

    if (!input.validity.valid){
        error.textContent ='Vul een correcte naam in'
        input.setAttribute('aria-describedby', 'error-id')
        //input.focus()
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        console.log('hoi')
        input.removeAttribute('aria-describedby')
        error.textContent =""
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
})


form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!input.validity.valid){
        error.textContent ='Vul een correcte naam in'
    input.setAttribute('aria-describedby', 'error-id')
        input.focus()
    } else {
    input.removeAttribute('aria-describedby')
    }
})