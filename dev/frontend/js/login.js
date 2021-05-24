
import { post } from "./api.js";

function login(email, password) {
    const loginObj = {
        email: email,
        password: password
    };
    post('login', loginObj, (res) => {
        if(res?.logged){
            window.location = 'dashboard.html';
        }else{
            showErrorMessage("Erro ao tentar realizar login. Verifique se e-mail e/ou senha estão corretos.");
        }

        hideSpinner();
    });
}

function hideErrorMessage(){
    alert.addClass("d-none");
}

function showErrorMessage(message){
    alert.removeClass("d-none");
    alert.html(message);
}

function showSpinner(){
    spinner.removeClass("d-none");
}

function hideSpinner(){
    spinner.addClass("d-none");
}

function onFormLoginSubmit(event){
    debugger;
    event.preventDefault();
    showSpinner();
    hideErrorMessage();
    let email = inputEmail.val();
    let password = inputPassword.val();

    login(email, password);
}

//form elements
let inputPassword, inputEmail, formLogin;

//ui elements
let spinner, alert;


$(function () {
    inputEmail = $("#inputEmail");
    inputPassword = $("#inputPassword");
    formLogin = $("#form-login");


    spinner = $(".loading-spinner");
    alert = $(".alert-danger");
    
    formLogin.submit(onFormLoginSubmit);
});