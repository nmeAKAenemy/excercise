
var adad = document.getElementsByClassName("numbers");

function multi(){
    var x = adad[0].value;
    var y = adad[1].value;
    if (isNaN(x))
        var z = "'x' is not a number";
    else if(isNaN(y))
        var z = "'y' is not number";
    else
        var z = x**y;
    console.log(z);
}

function divide(){
    var x = adad[0].value;
    var y = adad[1].value;
    if (isNaN(x))
        var z = "'x' is not a number";
    else if(isNaN(y))
        var z = "'y' is not number";
    else
        var z = x/y;
    console.log(z);
}