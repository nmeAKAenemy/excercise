
function displayCel(){
    document.getElementById("preview").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementsByClassName("btn")[2].style.display = "none";
}

function displayFah(){
    document.getElementById("preview").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementsByClassName("btn")[3].style.display = "none";
}

function toFahrenheit(){
    var value = document.getElementById("temp").value;
    if(isNaN(value)){
        document.getElementById("result").innerHTML = "the temp you've entered is not a number";
        document.getElementsByClassName("btn")[3].disabled = true;
    }else{
        let result = (value*9/5)+32;
        document.getElementById("result").innerHTML = "the result is: " + result + "F";
        document.getElementsByClassName("btn")[3].disabled = true;
    }
    document.getElementsByClassName("btn")[4].disabled = false;
}

function toCelsius(){
    var value = document.getElementById("temp").value;
    if(isNaN(value)){
        document.getElementById("result").innerHTML = "the temp you've entered is not a number";
        document.getElementsByClassName("btn")[2].disabled = true;
    }else{
        let result = (value-32)*5/9;
        document.getElementById("result").innerHTML = "the result is: " + result + "C";
        document.getElementsByClassName("btn")[2].disabled = true;
    }
    document.getElementsByClassName("btn")[4].disabled = false;
}

// function refresh(){
//     location.reload();
// }