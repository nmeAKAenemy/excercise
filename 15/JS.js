function compare(){
    var inp1 = document.getElementsByClassName("arr")[0].value;
    var inp2 = document.getElementsByClassName("arr")[0].value;
    var arr1 = inp1.split(",");
    var arr2 = inp2.split(",");
    var len1 = arr1.length;
    var len2 = arr1.length;
    if ( len1 != len2) {
        document.getElementById("result").innerHTML = "length of arrays you've entered are not same, please input same length!";
        break;
    }
        for (let i = 0; i < len1; i++) {
            if ( isNaN(arr1[i]) ) {
                document.getElementById("result").innerHTML = "you've entered a text or a character between your numbers, please omit it!";
                break;
        }//checkArray1
        for (let i = 0; i < len2; i++) {
            if ( isNaN(arr2[i]) ) {
                document.getElementById("result").innerHTML = "you've entered a text or a character between your numbers, please omit it!";
                break;
        }//checkArray2
    for (let i = 0; i < len1 ; i++) {
        if ( arr1[i] == arr2[i] ) {
            var arr3[i] = arr1[i];
        } else {
            document.getElementById("result").innerHTML = "arrays are not same!";
            break;
        }
        document.getElementById("result").innerHTML = arr3;
    }
}