
import { post } from "./api.js";

const perfis = {
    "candidato" : {
        "label" : "CPF",
        "resource": "pessoas"
    },
    "empresa" : {
        "label": "CNPJ",
        "resource": "empresas"
    }
}

function radioPerfilOnChange(event){
    const radioValue = $(event.target).val();
    $("label[for=inputDocumento]").html(perfis[radioValue].label);
}

function cadastroFormOnSubmit(event){
    event.preventDefault();
    
    const objeto = {
        "name" : inputNome.val(),
        "email": inputEmail.val(),
        "password": inputPassword.val(),
        "documentNumber": inputDocumento.val()
    };

    const checkedValue = $("input[type=radio][name=inlineRadioOptions]:checked").val();

    post(perfis[checkedValue].resource, objeto, (res) => {
        window.location = "index.html"
    })
}

let radioButtonPerfil = null, formCadastro = null, inputNome = null, inputEmail =  null, inputPassword = null, inputDocumento = null;

$(function(){

    radioButtonPerfil = $("input[type=radio][name=inlineRadioOptions]");
    formCadastro = $("#form-cadastro");
    inputNome =  $("#inputNome");
    inputEmail =  $("#inputEmail");
    inputPassword =  $("#inputPassword");
    inputDocumento = $("#inputDocumento");

    radioButtonPerfil.change(radioPerfilOnChange);
    formCadastro.submit(cadastroFormOnSubmit);
    
});