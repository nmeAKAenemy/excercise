function reverse(){
    var text = document.getElementById("text").value;
    var array = text.split("");
    var len = array.length;
    var t;
    var result = "";
    for (let i = 0; i < len/2; i++) {
        t = array[i];
        array[i] = array[len-i-1];
        array[len-i-1] = t;
    }
    for (let i = 0; i < len; i++) {
        result = result + array[i];
    }
    document.getElementsByClassName("result")[1].innerHTML = result;
}