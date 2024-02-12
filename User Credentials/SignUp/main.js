

const floating = document.getElementById('floating');
const floatingUsername = document.getElementById('floatingUsername');
const floatingEmail = document.getElementById('floatingEmail');
const floatingPassword = document.getElementById('floatingPassword');
const floatingPassword2 = document.getElementById('floatingPassword2');




floating.addEventListener('submit', (e) =>{

    e.preventDefault();
    checkInputs();





});



function checkInputs(){
    //get the values from the inputs
    const floatingUsernameValue = floatingUsername.value.trim();
    const floatingEmailValue = floatingEmail.value.trim();
    const floatingPasswordValue = floatingPassword.value.trim();
    const floatingPassword2Value = floatingPassword2.value.trim();

    if(floatingUsernameValue === ''){
        // show error
        // add error class
        setErrorFor(floatingUsername, 'Username cannot be blank');
    }else{
        // add success class
        setSuccessFor(floatingUsername);
    }

    if(floatingEmailValue === ''){
        // show error
        // add error class
        setErrorFor(floatingEmail, 'Email cannot be blank');
    }else{
        // add success class
        setSuccessFor(floatingEmail);
    }

    if(floatingPasswordValue === ''){
        // show error
        // add error class
        setErrorFor(floatingPassword, 'Password cannot be blank');
    }else{
        // add success class
        setSuccessFor(floatingPassword);
    }

    if(floatingPassword2Value === ''){
        // show error
        // add error class
        setErrorFor(floatingPassword2, 'Password cannot be blank');
    }else if(floatingPasswordValue !== floatingPassword2Value) {
		setErrorFor(floatingPassword2, 'Passwords does not match');
    }else{
        // add success class
        setSuccessFor(floatingPassword2);
    }
}

function setErrorFor(input, message){
    const formFloating = input.parentElement; // .form-floating
    const small = formFloating.querySelector('small');

    // add error class
    formFloating.className = 'form-floating error'

    // add error message inside the small tag
    small.innerText = message;
}

function setSuccessFor(input){
    const formFloating = input.parentElement; // .form-floating

    // add error class
    formFloating.className = 'form-floating success'
}