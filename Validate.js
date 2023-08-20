validateCabbage=(cabbage)=>{
    const regexp=/^[0-9\-]{0,3}$/
    const ok=regexp.test(cabbage);
    if(!ok){
        $("#wrongCabbage").html("it should be number")
        return false;
    }else{
        $("#wrongCabbage").html("")
        return true;
    }
}


