import { loadNav, getTypeUser } from "./app.js";

$(function(){
    debugger;
    loadNav();

    if(getTypeUser() == 1){
        $(".btn-empresa").hide();
    }else if(getTypeUser() == 2){
        $(".btn-candidato").hide();
    }

});