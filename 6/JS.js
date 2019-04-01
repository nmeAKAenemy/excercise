
var number = document.getElementsByClassName("numbers");

function smaller(){

    function check(){
    var x = number[0];
    var y = number[1];
    var value1 = Boolean(x==50);
    var value2 = Boolean(y==50);
    if (value1 == Boolean(true) || value2 == Boolean(true)) {
        return Boolean(true);
    } else if (x + y == 50){
        return Boolean(true);
    }
    return Boolean(false);
}

document.getElementById("result").innerHTML = check();
}