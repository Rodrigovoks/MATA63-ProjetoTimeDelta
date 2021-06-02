import { setLoggedUser, getLoggedUser, loadNav } from "./app.js";
import {get} from  './api.js';

$(function(){
    get('vagas', response => {
        debugger;
        let vagas = response.data.filter(el => {
            return el.companyId == "c95d7d59-eae8-432e-861c-e0d36195a082";
        });

        vagas.forEach(v =>{
            let row = $(".vaga-row.d-none").clone().removeClass("d-none");
            row.find(".posicao").html(v.role);
            row.find(".vagas").html(v.availableOpportunities);
            row.find(".contrato").html(v.contractType);
            row.find("button").click(ev => {
                get('pessoas', response => {
                    debugger;
                    v.candidatos.forEach(c =>{
                        
                        let candidato = response.data.filter( i => {
                            return i.id == c;
                        })[0];

                        let card = $(".candidato-card.d-none").clone().removeClass("d-none");
                        card.find("h5").html(candidato.name);
                        $(".modal-body").append(card);
                    });
                });

            });

            $("table").find("tbody").append(row);

        });
    });



})