export function setLoggedUser(loggedUserId, userType){
    if(!loggedUserId){
        document.cookie = "loggedUserId=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        document.cookie = "userType=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        return;
    }else{
        document.cookie = `loggedUserId=${loggedUserId}`;
        document.cookie = `userType=${userType}`;
    }
    
   
}

export function getLoggedUser(){
    
    if (!document.cookie || !document.cookie.length){
        return null;
    }

    return document.cookie.split(";")[0].split("loggedUserId=")[1];
}

export function getTypeUser(){
    
    if (!document.cookie || !document.cookie.length){
        return null;
    }

    return document.cookie.split(";")[1].split("userType=")[1];
}

export function loadNav(){
    debugger;
    let loggedUser = getLoggedUser();

    if(loggedUser?.length){
        $(".not-logged").remove();
        $(".logged").removeClass("d-none");

        $("#btn-sair").click(ev => {
            setLoggedUser(null);
            location.reload();
        });
    }else{
        window.location = "login.html";
    }
}