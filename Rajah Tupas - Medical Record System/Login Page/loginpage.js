const floating = document.getElementById('floating');
const floatingUsername = document.getElementById('floatingUsername');
const floatingPassword = document.getElementById('floatingPassword');
const floatingpwShowHide = document.querySelectorAll(".showHidePw");
const floatingpwFields = document.querySelectorAll(".password");

floatingPassword.addEventListener('click', ()=>{
    Pass = floatingPassword.parentElement;
    Pass.className = 'form-floating show'
    floatingpwShowHide.forEach(eyeIcon =>
    {
        eyeIcon.addEventListener("click", ()=>
        {
            if(floatingPassword.getAttribute("type") == "password"){
                floatingPassword.setAttribute("type", "text")
                floatingPassword.classList.replace("fa-eye-slash", "fa-eye");
            }else{
                floatingPassword.setAttribute("type", "password")
                floatingPassword.classList.replace("fa-eye", "fa-eye-slash");
            }
        })
    })
})


floating.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const floatingUsernameValue = floatingUsername.value.trim();
    const floatingPasswordValue = floatingPassword.value.trim();
    const floatingShowHidePass = floatingpwShowHide;
    const floatingPassFields = floatingpwFields;


    if(floatingUsernameValue === ''){
        // show error
        // add error class
        setErrorFor(floatingUsername, 'Username cannot be blank');
    }else{
        // add success class
        setSuccessFor(floatingUsername);
    }

    if(floatingPasswordValue === ''){
        // show error
        // add error class
        setErrorFor(floatingPassword, 'Password cannot be blank');
    }
    else
    {
        // add success class
        setSuccessFor(floatingPassword);
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
