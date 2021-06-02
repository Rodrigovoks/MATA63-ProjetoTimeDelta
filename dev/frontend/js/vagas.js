import { getTypeUser, getLoggedUser, loadNav } from "./app.js";
import {get} from  './api.js';

$(function(){
    loadNav();

    if(getTypeUser() != 2){
        window.location = "index.html";
    }

    get('vagas', response => {
        debugger;
        let vagas = response.data.filter(el => {
            return el.companyId == getLoggedUser();
        });

        vagas.forEach(v =>{
            let row = $(".vaga-row.d-none").clone().removeClass("d-none");
            row.find(".posicao").html(v.role);
            row.find(".vagas").html(v.availableOpportunities);
            row.find(".contrato").html(v.contractType);
            row.find("button").click(ev => {
                get('pessoas', response => {
                    debugger;
                    v.candidates.forEach(c =>{
                        
                        let candidato = response.data.filter( i => {
                            return i.id == c;
                        })[0];

                        let card = $(".candidato-card.d-none").clone().removeClass("d-none");
                        card.find("h5").html(candidato.name);
                        card.find("a").attr("href", `perfil-candidato.html?id=${candidato.id}`);
                        $(".modal-body").append(card);
                    });
                });

            });

            $("table").find("tbody").append(row);

        });
    });



})