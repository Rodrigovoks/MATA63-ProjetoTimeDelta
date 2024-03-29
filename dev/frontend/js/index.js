import { loadNav, getTypeUser, getLoggedUser } from "./app.js";
import { get, patch } from "./api.js";

$(function () {
    loadNav();
    if(getTypeUser() != 1){
        $(".btn-vaga").hide();
    }
    get('empresas', empresaResponse  => {
        get('vagas', response => {
            $(".numero-vagas").html(response.data.length);
            response.data.map(vaga => {
                debugger;
                let empresaNome;

                empresaNome = empresaResponse.data.filter(el => {
                    return el.id == vaga.companyId;
                })[0].name;

                let vagaElement = $(".anuncio-vaga.d-none").clone().removeClass('d-none');
                vagaElement.find("h4").html(vaga.role);
                vagaElement.find(".vagas").html(vaga.availableOpportunities);
                vagaElement.find(".empresa").html(empresaNome);
                vagaElement.find(".descricao").html(vaga.description);
                vagaElement.find(".salario").html(vaga.wage);
                vagaElement.find("button").click(ev => {
                    debugger;
                    let candidatura = {
                        opportunityId: vaga.id,
                        userId: getLoggedUser()
                    }

                    patch('vagas/candidatar', candidatura, (res) =>{
                        debugger;
                        window.location = "candidato-vagas.html";
                    });
                });
                $(".anuncios").append(vagaElement);
            });
        });
    });
    

})