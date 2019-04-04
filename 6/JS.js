// function bigFunc () {


function check(){
        var x = document.getElementsByClassName("numbers")[0];
        var y = document.getElementsByClassName("numbers")[1];
        // var x = number[0];
        // var y = number[1];
        var z = x + y;
        if ( x = 50 || y == 50 || z == 50 ){
            document.getElementById("result").innerHTML = "True";
        } else {
            document.getElementById("result").innerHTML = "False";
        }
    }
    // var value1 = Boolean ( x==50 );
    // var value2 = Boolean ( y==50 );
    // if (value1 == true || value2 == true) {
    //     return Boolean ( true );
    // } else if (x + y == 50){
    //     return Boolean ( true );
    // }
    // return Boolean ( false );

// document.getElementById("result").innerHTML = check ();
// }