import {getLoggedUser} from './app.js';
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
        companyId: 1
    }

    debugger;
    
    post('vagas', vaga, (response) => {
        window.location = "index.html";
    })
}

let inputArea, inputTipoContrato, inputRequisitos, inputSalario, inputVagas

$(function(){
    // let user = getLoggedUser();

    // if(!user){
    //     window.location = "login.html";
    // }

    inputArea = $("#inputArea");
    inputTipoContrato = $("#inputContrato");
    inputRequisitos = $("#inputRequisitos");
    inputSalario = $("#inputSalario");
    inputVagas = $("#inputVagas");

    $("#form-vaga").submit(criarVagaOnSubmit);
});