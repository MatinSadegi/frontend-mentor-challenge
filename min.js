const FirstName = document.querySelector('#FirstName');
const LastName = document.querySelector('#LastName');
const Email = document.querySelector('#Email');
const Password = document.querySelector('#Password');
const Form = document.querySelector('#Form');


Form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    chekinput();

});



function chekinput() {

const FirstNameValue = FirstName.value.trim();
const LastNameValue = LastName.value.trim();
const EmailValue =  Email.value.trim();
const PasswordValue = Password.value.trim();

if(FirstNameValue === ''){
    FirstName.removeAttribute('placeholder');
    setError(FirstName , 'First Name cannot be empty');
}
    else{
        setSuccess(FirstName , '');
    }


if(LastNameValue === ''){
    LastName.removeAttribute('placeholder');
    setError(LastName , 'Last Name Name cannot be empty');
}
    else{
        setSuccess(LastName , '');
    }


if(EmailValue === ''){
    Email.removeAttribute('placeholder');
    setError(Email , 'Email cannot be empty');
}
    else{
        setSuccess(Email , '');
    }


if(PasswordValue === ''){
    Password.removeAttribute('placeholder');
    setError(Password , 'Password cannot be empty');
}
    else{
        setSuccess(Password , '');
    }
}

function setError(inp , massage){
    inp.className = 'errorStyle';
    const inputDiv = inp.parentElement;
    inputDiv.lastElementChild.style.opacity = 1;
    inputDiv.children[2].textContent = massage;
}

function setSuccess(inp ,massage){
    inp.className = 'successStyle';
    const inputDiv = inp.parentElement;
    inputDiv.lastElementChild.style.opacity = 0;
    inputDiv.children[2].textContent = massage;
}

