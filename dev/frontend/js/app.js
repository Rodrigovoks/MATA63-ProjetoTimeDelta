export function setLoggedUser(loggedUserId){
    if(!loggedUserId){
        document.cookie = "loggedUserId=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        return;
    }else{
        document.cookie = `loggedUserId=${loggedUserId}`;
    }
    
   
}

export function getLoggedUser(){
    
    if (!document.cookie || !document.cookie.length){
        return null;
    }

    return document.cookie.split("loggedUserId=")[1];
}

export function loadNav(){
    debugger;
    let loggedUser = getLoggedUser();

    if(loggedUser?.length){
        $(".not-logged").remove();
        $("#btn-sair").removeClass("d-none");

        $("#btn-sair").click(ev => {
            setLoggedUser(null);
            location.reload();
        });
    }
}