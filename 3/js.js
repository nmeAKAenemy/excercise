
var adad = document.getElementsByClassName("numbers");

function multi(){
    var x = adad[0].value;
    var y = adad[1].value;
    if (isNaN(x))
        var z = "'First Number Field' is not a number";
    else if(isNaN(y))
        var z = "'Second Number Field' is not number";
    else
        var z = x**y;
    document.getElementById("result").innerHTML = "result: " + z;
}

function divide(){
    var x = adad[0].value;
    var y = adad[1].value;
    if (isNaN(x))
    var z = "'First Number Field' is not a number";
    else if(isNaN(y))
    var z = "'Second Number Field' is not number";
    else
    var z = x/y;
    document.getElementById("result").innerHTML = "result: " + z;
}