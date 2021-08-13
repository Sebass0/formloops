let i = 0
let x= 0
function formLoop(){
    document.getElementById("fieldSetContainer").innerHTML =""
    i = document.getElementById("myRange").value
    x = 0
while (i > 0)
{
 x++
    document.getElementById("fieldSetContainer").innerHTML +=
    '<p><fieldset value="Entrant1" name="Entrant">' +
    '<legend>Entrant#'+x+'</legend>' +
    '<input type="text" value="Name:">' +
    '<input type="text" value="Address:">' +
    '</fieldset></p>';


    console.log(i);
    i--;
    console.log("Form loop executed");
}
}

function changeButtonLabel(){
    var rangeValue = document.getElementById("myRange").value
    document.getElementById("createFormButton").value = 
    "Create form for " + rangeValue + " entrant(s)"
    console.log("Changed button label")
}
changeButtonLabel()