function credits() {
    window.location = "credits.html";
}

var viking = document.createElement("div");
var menu = document.getElementById("menu");

function play() {
    var options = document.getElementById("options");
    var name = document.getElementById("name");
    options.remove();
    name.remove();

    viking.className = "viking";
    document.body.appendChild(viking);
}