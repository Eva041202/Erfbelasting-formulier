const input = document.querySelector('input')
const error = document.querySelector('.error')
const form = document.querySelector('form')

input.addEventListener('input', (event) => {
    console.log(event)

    if (!input.validity.valid){
        error.textContent ='Vul de juiste voorletters in'
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


// const landen = {
//     "Afghanistan": "AFG",
//     "Åland": "ALA",
//     "Albania": "ALB"
// };

// const landInput = document.querySelector("#land");
// const codeInput = document.querySelector("#landcode");

// landInput.addEventListener("input", function() {

//     const land = landInput.value;

//     if (landen[land]) {
//        codeInput.value = landen[land]:
//     }
// });


// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     if (!input.validity.valid){
//         error.textContent ='Vul een correcte naam in'
//     input.setAttribute('aria-describedby', 'error-id')
//         input.focus()
//     } else {
//     input.removeAttribute('aria-describedby')
//     }
// })