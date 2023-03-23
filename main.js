const submitButton = document.getElementById("submitButton");

const formInputs = [document.getElementById("firstName"), document.getElementById("lastName"), document.getElementById("email"), document.getElementById("message")]

var formEmpty = null;

function validateForm(){

    formEmpty = false;

    formInputs.forEach(input => {
        var inputValue = input.value;
        if(inputValue == ""){
            formEmpty = true;
        }
    });

    if(formEmpty == true){
        alert("empty form")
    }
    else{
        alert("form is not empty")
    }
}

submitButton.addEventListener("click", validateForm)