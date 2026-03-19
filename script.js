/*MARK - BRON:
            Workshop validatie van Victor
            Hulp en uitleg van Vasilis om uiteindelijk alle inputs te kunnen aanspreken */

const inputs = document.querySelectorAll('input')
//const error = document.querySelector('.error')
const form = document.querySelector('form')

inputs.forEach((input) => {
    //console.log(input);
    input.addEventListener('input', (event) => {
        var error = input.parentNode.nextElementSibling;
        console.log(error)

        if (!input.validity.valid){
            var errorMsg = input.getAttribute('data-error');
            console.log("hoi1")
            if(error && error.classList.contains('error')) {
            // console.log("hoi2", errorMsg)
                error.textContent = errorMsg; 
            }
            
            //input.focus()
            input.classList.remove('valid');
            input.classList.add('invalid');
        } else {
            console.log('hoi')
            if(error && error.classList.contains('error')) {
                error.textContent =""
            }
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    });
});