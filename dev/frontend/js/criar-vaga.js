import { fileURLToPath } from 'url';
import {getLoggedUser} from './app.js';
import {post} from  './api.js';

function criarVagaOnSubmit(event){
    let vaga = {
        areaAtuacao = inputArea.val(),
        tipoContrato = inputTipoContrato.val(),
        salario = inputSalario.val(),
        vagas = inputVagas.val(),
        requisitos = inputRequisitos.val()
    }

    post('jobOpportunity', vaga, () => {
        alert("sucesso");
    })
}

let inputArea, inputTipoContrato, inputRequisitos, inputSalario, inputVagas

$(function(){
    let user = getLoggedUser();

    if(!user){
        window.location = "login.html";
    }

    inputArea = $("#inputArea");
    inputTipoContrato = $("#inputContrato");
    inputRequisitos = $("#inputRequisitos");
    inputSalario = $("#inputSalario");
    inputVagas = $("#inputVagas");

    $("form-vaga").submit(criarVagaOnSubmit);
});