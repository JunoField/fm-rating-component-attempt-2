document.getElementById("submit-button").addEventListener("click", (e) => {onFormSubmit()});
document.querySelector(".radio-section").addEventListener("click", (e) => {onRadioSelected()});

//when any radio button is selected, clear the error if present
function onRadioSelected(){
    document.getElementById("no-input-error").classList.add("hidden");
}

//when submit button pressed
function onFormSubmit(){
    if (document.querySelector('input[type=radio]:checked') == null){ //when submittted and radios are all deselected, display an error
        document.getElementById("no-input-error").classList.remove("hidden");
    } else { //if an element is selected, get its value then transition to the next screen
        openThanksState(document.querySelector('input[type=radio]:checked'));
    }  
}

//change state, passing selected value as an argument
function openThanksState(rating){
    console.log("thanks for submitting! (not yet implemented)");
}