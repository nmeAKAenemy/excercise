var d = new Date();
function main(){
    var day = d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").innerHTML = "Today is: " + dow[day];
    document.getElementById("detail").innerHTML = "current time is: " + hour + ":" + min + ":" + sec ;
}