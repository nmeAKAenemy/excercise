function specify(){
    var angel = document.getElementById("text").value;
    if (isNaN(angel)) {
        document.getElementById("result").innerHTML = "what you've entered is not a number, please input a number!";
    } else {
        // var dividend = angel / 180;
        // var real = angel - dividend * 180;
        if (0 < angel && angel < 90) {
            document.getElementById("result").innerHTML = "Acute angel";
        } else if (angel == 90) {
            document.getElementById("result").innerHTML = "Right angel";
        } else if (90 < angel && angel < 180) {
            document.getElementById("result").innerHTML = "Obtuse angel";
        } else if (angel == 180) {
            document.getElementById("result").innerHTML = "Straight angel";
        }
    }
}