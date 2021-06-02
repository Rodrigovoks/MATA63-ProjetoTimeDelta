import { setLoggedUser, getLoggedUser, loadNav } from "./app.js";
import { get } from './api.js';

$(function () {
    loadNav();
    get('empresas', empresaResponse => {
        get('vagas', response => {
            let vagas = response.data.filter(el => {
                return el.candidates.includes(getLoggedUser());
            });

            vagas.forEach(v => {
                debugger;
                let empresa = empresaResponse.data.filter(el =>{
                    return el.id == v.companyId;
                })[0];

                let row = $(".vaga-row.d-none").clone().removeClass("d-none");
                row.find(".posicao").html(v.role);
                row.find(".empresa").html(empresa.name);
    
                $("table").find("tbody").append(row);
    
            });
        });
    });




})