function credits() {
    window.location = "credits.html";
}

var viking = document.createElement("div");
var troll = document.createElement("div");


function play() {
    var options = document.getElementById("options");
    var name = document.getElementById("name");
    options.remove();
    name.remove();

    viking.className = "viking";
    document.body.appendChild(viking);

    vikingIdleId = setInterval(vikingIdleAnimation, 150);
}

var vikingIdle = 0;
var vikingIdleId = 0;

function vikingIdleAnimation() {
    vikingIdle = vikingIdle - 512.1;

    viking.style.backgroundPositionX = vikingIdle + "px";
}