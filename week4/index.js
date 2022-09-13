var favLan=document.getElementsByName('fav_language');
var c = document.getElementsByName("market");
function validateForm() {
    var firstName= document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var facilitator = document.getElementById("facilitator").value;

   let validRadio = isvalidRadio(favLan);
   if(validRadio ===false){
       document.getElementById("reminder1").innerHTML="Please choose one language"
       return false;
   }
    const STORE_REQUIRED="Please choose a  grocery store"
    let validbox = isSelectedOne(c);
    if(validbox===false){
        document.getElementById("box").innerHTML=STORE_REQUIRED;
        return false;
    }
    return true;

}

function isvalidRadio(favLan){
    var isSel=false;
    for(var i=0;i<favLan.length;i++){
        if(favLan[i].checked){
            var lan =favLan[i].value;
            isSel=true;
        }
    }
    if(isSel===false){
        return false;
    }
    return true;
}



//check if we have choose on  checkbox

function isSelectedOne(c) {
    var flag = false;
    if (c && c.length > 0) {
        for (var i = 0; i < c.length; i++) {
            if (c[i].checked) {
                flag = true;
                break;
            }
        }
    }

    if (!flag) {
        return false;
    }
    return true;
}

