let username = document.getElementById('username')
let password = document.getElementById('password')
let usernameCheck = document.getElementById('usernameCheck')
let passwordCheck = document.getElementById('passwordCheck')

function login(){
    if(username.value === ''){
        usernameCheck.textContent = 'This field is required'
        usernameCheck.style.color = 'red'
        usernameCheck.style.fontWeight = 'bold'
    }
    else{
        usernameCheck.textContent = ''
    }
    if(password.value === ''){
        passwordCheck.textContent = 'This field is required'
        passwordCheck.style.color = 'red'
        passwordCheck.style.fontWeight = 'bold'
    }
    else if(password.value.length < 8){
        passwordCheck.textContent = 'Minimum 8 characters required'
        passwordCheck.style.color = 'red'
        passwordCheck.style.fontWeight = 'bold'
    }else{
        passwordCheck.textContent = ''
    }
}
