function create(){
    var text = document.getElementById("text").value;
    if (isNaN(text)) {
        var array = text.split("");
        var firstChar = array[0];
        array.push(firstChar);
        array.unshift(firstChar);
        var len = array.length;
        var res = ""
        for (let i = 0; i < len; i++) {
            res = res + array[i];
        }
        document.getElementById("result").innerHTML = res;
    }else{
        document.getElementById("result").innerHTML = "what you've entered is not a string!";
    }
}