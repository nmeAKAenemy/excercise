var d = new Date();
function time(){
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    document.getElementById("show").innerHTML = month + "/" + day + "/" + year;
}