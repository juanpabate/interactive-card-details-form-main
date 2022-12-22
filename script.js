//CARDHOLDER NAME
let cardName= document.querySelector('.front-card__name');
let nameInput= document.querySelector('.form__cardholder');
let nameError= document.querySelector('.form__cardholder--error')

//CARD NUMBER
let cardNumber= document.querySelector('.front-card__number');
let numberInput= document.querySelector('.form__cardnumber');
let numberError= document.querySelector('.form__cardnumber--error');

//MONTH
let cardMonth= document.querySelector('.front-card__month');
let monthInput= document.querySelector('.datecode__month');
let monthError= document.querySelector('.datecode__month--error');

//YEAR
let cardYear= document.querySelector('.front-card__year');
let yearInput= document.querySelector('.datecode__year');
let yearError= document.querySelector('.datecode__yearc--error');

//CVC
let cardCode= document.querySelector('.back-card__code');
let codeInput= document.querySelector('.form-datecode__cvc--input');
let codeError= document.querySelector('.form__datecode__cvc--error');


//INGRESO DINÁMICO DEL TEXTO
nameInput.addEventListener('input', ()=>{

    if(nameInput.value == ''){
        cardName.innerText= 'Jane Appleseed';
    }else{
        cardName.innerText= nameInput.value;
    }

    //VALIDANDO QUE NO HAYA UN NÚMERO
    let regExp= /[0-9]/g;
    if(regExp.test(nameInput.value)){
        showError(nameError, 'Wrong format');
    }else{
        nameError.innerText= '';
    }

});

//INGRESO DINÁMICO DEL NÚMERO
numberInput.addEventListener('input', ()=>{

    //AGREGANDO ESPACIO CADA 4 LETRAS
    numberInput.value= numberInput.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();

    if(numberInput.value== ''){
        cardNumber.innerText='0000 0000 0000 0000';
    }else{
        cardNumber.innerText= numberInput.value;
    }

    //VALIDANDO QUE NO HAYA UNA LETRA
    validateLetters(numberInput, numberError, numberConfirm);
});

//INGRESO DINÁMICO DEL MES
monthInput.addEventListener('input', ()=>{
    if(monthInput.value== ''){
        cardMonth.innerText= '00';
    }else{
        cardMonth.innerText= monthInput.value;
    }

    //VALIDANDO QUE NO HAYA UNA LETRA
    validateLetters(monthInput, monthError, monthConfirm);
    //VALIDANDO QUE EL DATO SEA CORRECTO
    if(parseInt(monthInput.value)> 12 || parseInt(monthInput.value)<= 0){
        showError(monthError, 'Wrong month')
    }
});

//INGRESO DINÁMICO DEL AÑO
yearInput.addEventListener('input', ()=>{
    if(yearInput.value== ''){
        cardYear.innerText= '00';
    }else{
        cardYear.innerText= yearInput.value;
    }

     //VALIDANDO QUE NO HAYA UNA LETRA
     validateLetters(yearInput, yearError, yearConfirm);

    //VALIDANDO QUE EL DATO SEA CORRECTO
    if(parseInt(yearInput.value)> 20 && parseInt(yearInput.value)< 25){
        yearError.innerText= '';
    }else if(yearInput.value== ''){
        yearError.innerText= '';
    }
    else{
        showError(yearError, 'Wrong year')
    }
    
});
//INGRESO DINÁMICO DE LA CONTRASEÑA
codeInput.addEventListener('input', ()=>{
    if(codeInput.value== ''){
        cardCode.innerText= '000'
    }else{
        cardCode.innerText= codeInput.value;
    }

    validateLetters(codeInput, codeError, codeConfirm);
});

//BOTON DE CONFIRMAR
let submitButton= document.querySelector('.form__button')
let formSection= document.querySelector('.form-content')
let thanksSection= document.querySelector('.completed-state')
let resetButton= document.querySelector('.completed-state__button')


//CONFIRMS
let nameConfirm= false;
let numberConfirm= false;
let monthConfirm= false;
let yearConfirm= false;
let codeConfirm= false;


submitButton.addEventListener('click',()=>{
    event.preventDefault();

    if(verifyIsFilled(nameInput, nameError)){
        nameConfirm= true;
    }else{
        nameConfirm= false;
    }

    if(verifyIsFilled(numberInput, numberError)){
        numberConfirm= true;
    }else{
        numberConfirm= false;
    }

    if(verifyIsFilled(monthInput, monthError)){
        monthConfirm= true;
    }else{
        monthConfirm= false;
    }

    if(verifyIsFilled(yearInput, yearError)){
        yearConfirm= true;
    }else{
        yearConfirm= false;
    }

    if(verifyIsFilled(codeInput, codeError)){
        codeConfirm= true;
    }else{
        codeConfirm= false;
    }
    

    if(nameConfirm== true && numberConfirm== true && monthConfirm== true && yearConfirm== true && codeConfirm== true){
        formSection.style.display= 'none';
        thanksSection.style.display= 'flex';
    }
});

resetButton.addEventListener('click', ()=>{
    location.reload();
})

//FUNCIONES
function showError(error, message){
    error.innerText= message;
}

function validateLetters(input, error, confirm){
    let regExp= /[A-z]/g;
    if(regExp.test(input.value)){
        showError(error, 'Only numbers');
    }else{
        showError(error, '');
    }
}

function verifyIsFilled(input, error){
    if(input.value== ''){
        error.innerText= 'Empty';
        return false;
    }else{
        return true;
    }
}

