import {getLoggedUser, getTypeUser, loadNav} from './app.js';
import {post} from  './api.js';

function criarVagaOnSubmit(event){
    debugger;
    event.preventDefault();

    let vaga = {
        role: inputArea.val(),
        contractType: inputTipoContrato.val(),
        wage: inputSalario.val(),
        availableOpportunities: inputVagas.val(),
        description: inputRequisitos.val(),
        companyId: getLoggedUser()
    }

    debugger;
    
    post('vagas', vaga, (response) => {
        window.location = "index.html";
    })
}

let inputArea, inputTipoContrato, inputRequisitos, inputSalario, inputVagas

$(function(){
    loadNav();

    if(getTypeUser() != 2){
        window.location = "index.html";
    }

    inputArea = $("#inputArea");
    inputTipoContrato = $("#inputContrato");
    inputRequisitos = $("#inputRequisitos");
    inputSalario = $("#inputSalario");
    inputVagas = $("#inputVagas");

    $("#form-vaga").submit(criarVagaOnSubmit);
});