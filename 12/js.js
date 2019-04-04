function search(){
    var text = document.getElementById("text").value;
    if (isNaN(text)) {
        var len = text.length;
        if ( len >= 6 ) {
            var check = text.search("script");
            // var exist = Boolean(exist);
            if ( check == -1 ) {
                document.getElementById("result").innerHTML = "The text you've entered doesn't have 'script' word";
            }else{
                document.getElementById("result").innerHTML = "The text you've entered has 'script' word in it";
                document.getElementsByClassName("btn")[1].style.display = "inline";
                document.getElementById("form1").style.display = "block";
                
            }
        }else{
            document.getElementById("result").innerHTML = "you should put a text with 6 or more characters";
        }
    }else{
        document.getElementById("result").innerHTML = "what you've entered is a number, please input a text!";
    }
    document.getElementsByClassName("btn")[2].style.display = "inline";
    document.getElementsByClassName("btn")[0].disabled = true;
}

function detail(){
    var text = document.getElementById("text").value;
    var len = text.length;
    var location = text.search("script");
    document.getElementById("detail").innerHTML = "'script' starts at " + location + " character";
    if ( len - location == 6) {
        document.getElementById("detail").innerHTML = "It ends with 'script' word";
    }else{
        document.getElementById("detail").innerHTML = "It doesn't end with 'script' word";
    }
    
}