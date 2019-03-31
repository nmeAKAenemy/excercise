function find(){
    var first = document.getElementsByClassName("value")[0].value;
    var second = document.getElementsByClassName("value")[1].value;
    var third = document.getElementsByClassName("value")[2].value;
    var numbers = [first, second, third];
    numbers.sort(function (a, b) { return a - b });
    console.log(numbers[0]);
}