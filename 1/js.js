var d = new Date();
function main(){
    var day = d.getDay();
    var hours = d.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").innerHTML = "Today is: " + dow[day];
    document.getElementById("detail").innerHTML = "current time is: " + hours + " " + ampm + ":" + min + ":" + sec ;
}
