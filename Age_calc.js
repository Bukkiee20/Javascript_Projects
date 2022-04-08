function ageinDays(){
var birthyear= prompt("Input your birth year");
var ageinDayss= (2022-birthyear) * 365;
var h1=document.createElement("h1");
var answer=document.createTextNode("You are "+ ageinDayss + " days old")
h1.setAttribute("id", "ageInDays");
h1.appendChild(answer);
document.getElementById("result").appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}