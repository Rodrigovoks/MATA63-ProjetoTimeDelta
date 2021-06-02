
import { get } from "./api.js";
import { setLoggedUser, getLoggedUser, loadNav } from "./app.js";


function login(email, password) {
    get('pessoas', (res) => {
        get('empresas', (empresasResponse) => {
            debugger;
            let loggedUser;
            let user = res.data.filter(v => {
                return v.email == email;
            });
    
            if (user.length) {
                if (user[0].password == password) {
                    setLoggedUser(user[0].id, 1);
                }
            }else{
                user = empresasResponse.data.filter(v => {
                    return v.email == email;
                });

                if (user.length) {
                    if (user[0].password == password) {
                        setLoggedUser(user[0].id, 2);
                    }
                }
            }
    
            loggedUser = getLoggedUser();
    
            if (loggedUser) {
                window.location = 'index.html';
            } else {
                showErrorMessage("Erro ao tentar realizar login. Verifique se e-mail e/ou senha estão corretos.");
            }
    
            hideSpinner();
        });

    });
}

function hideErrorMessage() {
    alert.addClass("d-none");
}

function showErrorMessage(message) {
    alert.removeClass("d-none");
    alert.html(message);
}

function showSpinner() {
    spinner.removeClass("d-none");
}

function hideSpinner() {
    spinner.addClass("d-none");
}

function onFormLoginSubmit(event) {
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
    spinner = $(".loading-spinner");
    alert = $(".alert-danger");
    inputEmail = $("#inputEmail");
    inputPassword = $("#inputPassword");
    formLogin = $("#form-login");
    
    let loggedUser = getLoggedUser();

    if (loggedUser) {
        $("form").hide();
        showSpinner();
        window.location = "index.html";
    }

    formLogin.submit(onFormLoginSubmit);
});