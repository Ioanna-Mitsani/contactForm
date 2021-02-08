'use strict';

/* form elements */
const form = document.forms.form;
const fullname = form.fullname;
const email = form.email;
const emailValid = form.emailvalid;
const phone = form.phone;
const address = form.address;
const message = form.message;

/* RegExp Patterns */
const nameRegex = /^[a-z ,.-]+\s[a-z ,.-]+$/i;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
const phoneRegex = /^(\+\d{2,3}\s?)(\d{3,5})\s?(\d{5,7})$/;
const addressRegex = /^[a-z0-9 .,&]+/i;

/*Errors and icons */
const nameError = document.getElementById('e1');
const validName = document.getElementById('v1');
const notValidName = document.getElementById('f1');

const emailError = document.getElementById('e2');
const validEmail = document.getElementById('v2');
const notValidEmail = document.getElementById('f2');

const confirmError1 = document.getElementById('e31');
const confirmError2 = document.getElementById('e32');
const validEmailConf = document.getElementById('v3');
const notValidEmailConf = document.getElementById('f3');

const phoneError = document.getElementById('e4');
const validPhone = document.getElementById('v4');
const notValidPhone = document.getElementById('f4');

const addressError = document.getElementById('e5');
const validAddress = document.getElementById('v5');
const notValidAddress = document.getElementById('f5');

const messageError = document.getElementById('e6');
const formError1 = document.getElementById('e71');
const formError2 = document.getElementById('e72');

fullname.onblur = () => {
    if (!nameRegex.test(fullname.value.trim())){
       nameError.style.display = "block"; 
       notValidName.style.display = "inline-block"; 
       validName.style.display = 'none';
    } else {
        nameError.style.display = "none";
        validName.style.display = "inline-block";
        notValidName.style.display = "none"; 
    }

    if (fullname.value.trim() === ""){
        nameError.style.display = "none";
        validName.style.display = "none";
        notValidName.style.display = "none";  
    }

}

fullname.onfocus = () => {
    nameError.style.display = "none"; 
    notValidName.style.display = "none"; 
    validName.style.display = 'none';
}

email.onblur = () => {
    if (!emailRegex.test(email.value.trim())){
       emailError.style.display = "block"; 
       notValidEmail.style.display = "inline-block"; 
       validEmail.style.display = "none";
    }else if (emailRegex.test(email.value.trim())){
        emailError.style.display = "none";
        validEmail.style.display = "inline-block";
        notValidEmail.style.display = "none";
    }

    if (email.value.trim() == ""){
        emailError.style.display = "none"; 
        notValidEmail.style.display = "none"; 
        validEmail.style.display = 'none';
    }

    if (email.value.toLowerCase().trim() == emailValid.value.toLowerCase().trim() && email.value.trim() != "" && emailValid.trim() != ""){
        emailError.style.display = "none";
        validEmail.style.display = "inline-block";
        notValidEmail.style.display = "none";

        confirmError1.style.display = "none"; 
        confirmError2.style.display = "none"; 
        notValidEmailConf.style.display = "none"; 
        validEmailConf.style.display = "inline-block";
    } else if(email.value.trim() != emailValid.value.trim()){
        confirmError1.style.display = "block";
        notValidEmailConf.style.display = "inline-block"; 
        validEmailConf.style.display = "none";
    }

    if (email.value.trim() == "" && emailRegex.test(emailValid.value.trim()) == true){
        emailError.style.display = "none"; 
        notValidEmail.style.display = "none"; 
        validEmail.style.display = 'none'

        confirmError1.style.display = "block"; 
        confirmError2.style.display = "none"; 
        notValidEmailConf.style.display = "none"; 
        validEmailConf.style.display = 'none';
    }

    if (!emailRegex.test(email.value.trim()) && !emailRegex.test(emailValid.value.trim())){
        emailError.style.display = "block"; 
       notValidEmail.style.display = "inline-block"; 
       validEmail.style.display = "none";
       confirmError2.style.display = "block";
        notValidEmailConf.style.display = "inline-block"; 
        validEmailConf.style.display = "none";
    }

}

email.onfocus = () => {
    emailError.style.display = "none"; 
    notValidEmail.style.display = "none"; 
    validEmail.style.display = 'none';
}

emailValid.onblur = () => {
    if(!emailRegex.test(emailValid.value.trim())){
        confirmError2.style.display = "block";
        notValidEmailConf.style.display = "inline-block"; 
        validEmailConf.style.display = "none";
    }else{
        confirmError2.style.display = "none";
        validEmailConf.style.display = "inline-block";
        notValidEmailConf.style.display = "none"; 
    }
    
    if(emailValid.value.toLowerCase().trim() != email.value.toLowerCase().trim()){
        confirmError1.style.display = "block";
        notValidEmailConf.style.display = "inline-block"; 
        validEmailConf.style.display = "none";
    }else if (emailValid.value.toLowerCase().trim() == email.value.toLowerCase().trim() && emailRegex.test(emailValid.value.trim()) == true){
        confirmError1.style.display = "none";
        validEmailConf.style.display = "inline-block";
        notValidEmailConf.style.display = "none";
    }

    if (emailValid.value.trim() == ""){
        confirmError1.style.display = "none"; 
        confirmError2.style.display = "none"; 
        notValidEmailConf.style.display = "none"; 
        validEmailConf.style.display = 'none';
    }
}

emailValid.onfocus = () => {
    confirmError1.style.display = "none"; 
    confirmError2.style.display = "none"; 
    notValidEmailConf.style.display = "none"; 
    validEmailConf.style.display = "none";
}

phone.onblur = () => {
    if (!phoneRegex.test(phone.value.trim())){
        phoneError.style.display = "block"; 
        notValidPhone.style.display = "inline-block"; 
        validPhone.style.display = "none";
    } else {
        phoneError.style.display = "none";
        validPhone.style.display = "inline-block";
        notValidPhone.style.display = "none";
    }

    if (phone.value.trim() == ""){
        phoneError.style.display = "none";
        notValidPhone.style.display = "none";
        validPhone.style.display = "none";     
    }
}

phone.onfocus = () => {
   if (phone.value == ""){
        phone.value = "+30"
    }

    phoneError.style.display = "none";
    notValidPhone.style.display = "none";
    validPhone.style.display = "none";
}

address.onblur = () => {
    if(!addressRegex.test(address.value.trim())){
        addressError.style.display = "block";
        validAddress.style.display = "none";
        notValidAddress.style.display = "inline-block";
    } else {
        addressError.style.display = "none";
        validAddress.style.display = "inline-block";
        notValidAddress.style.display = "none";
    }

    if (address.value.trim() == ""){
        addressError.style.display = "none";
        validAddress.style.display = "none";
        notValidAddress.style.display = "none";
    }
}

address.onfocus = () => {
        addressError.style.display = "none";
        validAddress.style.display = "none";
        notValidAddress.style.display = "none";
}

message.oninput = () => {
    if (message.value.length <= 150){
        messageError.style.display = "block";
    } else {
        messageError.style.color = "red";
    }
}

message.onblur = () => {
    if (message.value.length <= 150){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        messageError.style.color = "red";
    }
}

form.onsubmit = (event) => {
    if (
        fullname.value.trim() == "" ||
        email.value.trim() == "" ||
        emailConf.value.trim() == "" ||
        phone.value.trim() == "" ||
        address.value.trim() == "" ||
        message.value.trim() == ""
    ) {
        event.preventDefault();
        formError1.style.display="block";
    }
}

form.onsubmit = (ev) => {   if(
        nameRegex.test(fullname.value.trim()) == false ||
        emailRegex.test(email.value.trim()) == false ||
        emailRegex.test(emailValid.value.trim()) == false ||
        phoneRegex.test(phone.value.trim()) == false ||
        addressRegex.test(address.value.trim()) == false){
            ev.preventDefault();
            formError2.style.display = "block";
        }
}