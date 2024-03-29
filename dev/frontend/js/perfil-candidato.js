import {get} from  './api.js';
import {loadNav } from "./app.js";
$(function(){
    debugger;
    loadNav();
    const urlParams = new URLSearchParams(window.location.search);
    const candidatoId = urlParams.get('id');

    get('pessoas', response => {
        const candidato = response.data.filter( c => {
            return c.id == candidatoId;
        })[0];
    
        $(".container-body").find("h4").html(candidato.name);
        $(".container-body").find(".email").html(candidato.email);
    });
});