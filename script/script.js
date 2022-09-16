function validateNumber(){
    var num = document.getElementById("number-input").value;
    var len= num.length;
    var init3 = num.slice(0,3);
    var init4 = num.slice(0,4);
    var init5 = num.slice(0,5);
    if(init5=="(234)" && len==15){
        document.getElementById("display-msg").innerHTML = "Valid";
    }
    else if(init4=="+234" && len==14){
        document.getElementById("display-msg").innerHTML = "Valid";
    }
    else if(init3=="234" && len==13){
        document.getElementById("display-msg").innerHTML = "Valid";
    }
    else{
        document.getElementById("display-msg").innerHTML = "Invalid";
        document.getElementById("display-msg").style.borderColor = "red";
    }
}