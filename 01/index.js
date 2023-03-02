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




// Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(username.value)

    if(username.value === ''){
        showError(username, 'username is required!')
    }else{
        showSeccess(username)
    }

    if(email.value === ''){
        showError(email, 'email is required!')
    }else if(!isValidEmail(email.value)) {
        showError(email, 'email is not valid')
        
    }
    else{
        showSeccess(email)
    }

    if(password.value === ''){
        showError(password, 'password is required!')
    }else{
        showSeccess(password)
    }

    if(confirm.value === ''){
        showError(confirm, 'confirm is required!')
    }else{
        showSeccess(confirm)
    }

})
