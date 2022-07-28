"use strict";

let login = prompt("whose this? ");

    if (login=="Admin") {
     let pass = prompt("enter your password"); 
        if (pass==="master")
        { 
            alert("you are welcome ");
        }
        else if (pass==' '|| pass== null ){
            alert("Canceled,");
        } else { alert ("wrong password ") 
        }
    }
    else if (login==" " || login == null){
        alert("canceled ");
    }
    else { alert ("i dont know who are you ")}