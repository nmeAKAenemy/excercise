function check(){
    var numbers = document.getElementsByClassName("numbers");
    var number1 = numbers[0].value;
    var number2 = numbers[1].value;
    if ( number1 == number2 ) {
        document.getElementById("result").innerHTML = "result: " + "Both numbers you've entered are similar to each other";
    } else {
        document.getElementById("result").innerHTML = "result: " + "Numbers are different";
    }
}