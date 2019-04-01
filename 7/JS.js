function create(){
    var text = document.getElementById("text").value;
    if (isNaN(text)) {
        if (text.length >= 4) {
            var array = text.split("");
            var newText = array[0] + array[1] + array[2];
            document.getElementById("result").innerHTML = newText.toLowerCase();
        }else{
            document.getElementById("result").innerHTML = text.toUpperCase();
        }
    }else{
        document.getElementById("result").innerHTML = "what you've entered is not a string!";
    }
}