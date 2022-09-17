function validateNumber(){
    //given number goes to num
    var num = document.getElementById("number-input").value;

    //length of number goes to len
    var len= num.length;

    //if spaces are given on right places then spaces don't count in len
    if(num.slice(-5,-4)==" " && num.slice(-9,-8)==" " && num.slice(-13,-12)==" "){
        len-=3;
    }
    //init3 init4 init5 are initial 3 4 and 5 digits
    var init3 = num.slice(0,3);
    var init4 = num.slice(0,4);
    var init5 = num.slice(0,5);

    //if number has appropriate length and initial digits then it'll be shown as valid
    if(init5=="(234)" && len==15){
        document.getElementById("display-msg").innerText = "Valid";
    }
    else if(init4=="+234" && len==14){
        document.getElementById("display-msg").innerText = "Valid";
    }
    else if(init3=="234" && len==13){
        document.getElementById("display-msg").innerText = "Valid";
    }
    else{
        document.getElementById("display-msg").innerText = "Invalid";
    }
}