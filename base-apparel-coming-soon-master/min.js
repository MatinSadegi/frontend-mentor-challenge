const input = document.querySelector("#email");
const error = document.querySelector(".error");
const form = document.querySelector("#form");
const errorIcon = document.querySelector(".error-icon");



form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inputValue = input.value.trim();
   
    if(inputValue === "" || !isEmail(inputValue)){

        error.style.display = "block";
        input.style.borderColor = "hsl(0, 93%, 68%)";
        input.style.borderWidth = "2px";
        errorIcon.style.display = "block";
    }
    else{

        errorIcon.style.display = "none";
        error.style.display = "none";
        input.style.borderColor = "green";
    }

    

});








function isEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}