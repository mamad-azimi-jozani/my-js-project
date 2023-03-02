const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')



// show input error message
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message

}



// show success outline
function showSeccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'

}

// check email is valid or not
function isValidEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase())
}

function checkRequired(input){
    input.forEach(element => {
        console.log(element.value)
        if(element.value.trim() === ''){
            showError(element, `${element.id} is required!`)

        }else{
            showSeccess(element)
        }

    });
}



// Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([username, email, password, confirm])
})
