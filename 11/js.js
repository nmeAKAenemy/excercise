function count(){
    var count = 0;
    var text = document.getElementById("text").value;
    var array = text.split("");
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[i] == "a" || array[i] == "e" || array[i] == "i" || array[i] == "o" || array[i] == "u" || array[i] == "y") {
            count++;
        }
    }
    document.getElementById("result").innerHTML = "It has " + count + " vowels";
}