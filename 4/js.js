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
        console.log("the temp that you've entered is not a number");
    }else{
        let result = (value*9/5)+32;
        document.getElementById("result").innerHTML = "the result is: " + result + "F";
    }
}

function toCelsius(){
    var value = document.getElementById("temp").value;
    if(isNaN(value)){
        console.log("the temp that you've entered is not a number");
    }else{
        let result = (value-32)*5/9;
        document.getElementById("result").innerHTML = "the result is: " + result + "C";
    }
}
