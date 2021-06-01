import {getLoggedUser} from './app.js';

$(function(){
    let user = getLoggedUser();

    if(!user){
        window.location = "login.html";
    }

});