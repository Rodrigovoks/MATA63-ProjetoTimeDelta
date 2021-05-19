
import { insert } from "./api.js";

const perfis = {
    "candidato" : {
        "label" : "CPF",
        "resource": "users"
    },
    "empresa" : {
        "label": "CNPJ",
        "resource": "companies"
    }
}

function radioPerfilOnChange(event){
    const radioValue = $(event.target).val();
    $("label[for=inputDocumento]").html(perfis[radioValue].label);
}

function cadastroFormOnSubmit(event){
    event.preventDefault();
    
    const objeto = {
        "nome" : inputNome.val(),
        "email": inputEmail.val(),
        "password": inputPassword.val(),
        "cadastro": inputDocumento.val()
    };

    const checkedValue = $("input[type=radio][name=inlineRadioOptions]:checked").val();

    insert(perfis[checkedValue].resource, objeto, (res) => {
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