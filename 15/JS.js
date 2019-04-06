function compare(){
    var input = document.getElementsByClassName("arr");
    var inp1 = input[0].value;
    var inp2 = input[1].value;
    var arr1 = inp1.split(",");
    var arr2 = inp2.split(",");
    var len1 = arr1.length;
    var len2 = arr1.length;
    var sw = 0;
    if ( len1 >= 3 && len2 >= 3) {
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
        for (let i = 0; i < len1 || sw == 2; i++) {
            if ( arr1[i] == arr2[i] ) {
                sw ++;
            }
        }
        if ( sw == 2 ) {
            document.getElementById("result").innerHTML = "arrays are similar together!";
        } else {
            document.getElementById("result").innerHTML = "arrays are not similar together!";
        }
        } else {
            document.getElementById("result").innerHTML = "length of arrays are not similar, plaese input same length!";
        }
        
    } else {
        document.getElementById("result").innerHTML = "you entered less than 3, please input more than 3 numbers!"
    }
}