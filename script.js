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

    troll.className = "troll";
    document.body.appendChild(troll);

    vikingIdleId = setInterval(vikingIdleAnimation, 150);
    trollIdleId = setInterval(trollIdleAnimation, 150);
}

var vikingIdle = 0;
var vikingIdleId = 0;

function vikingIdleAnimation() {
    vikingIdle = vikingIdle - 512.1;

    viking.style.backgroundPositionX = vikingIdle + "px";
}

var trollIdle = 0;
var trollIdleId = 0;

function trollIdleAnimation() {
    trollIdle = trollIdle + 420;

    troll.style.backgroundPositionX = trollIdle + "px";
}

function keypress(event) {
    var key = event.which;
    // alert(key);
    if (key == 68) {
        vikingWalkAnimation();
        vikingWalkId = setInterval(vikingWalkMarginLeft, 150)
    }
    if (key == 37) {
        trollWalkAnimation();
        trollWalkId = setInterval(trollWalkMarginLeft, 150)
    }
}

var vikingPositionY = 0;
var vikingMarginLeft = 0;
var vikingWalkId;
var vikingWalkStatus = false;

function vikingWalkAnimation() {
    vikingPositionY = -512;
    viking.style.backgroundPositionY = vikingPositionY + "px";
}

function vikingWalkMarginLeft() {
    vikingMarginLeft = vikingMarginLeft + 3;
    viking.style.marginLeft = vikingWalkMarginLeft + "px";
}

var trollPositionY = 0;
var trollMarginLeft = 1000;
var trollWalkId;

function trollWalkAnimation() {
    trollPositionY = -262.8;
    troll.style.backgroundPositionY = trollPositionY + "px";

}

function trollWalkMarginLeft() {
    trollMarginLeft = trollMarginLeft - 3;
    troll.style.marginLeft = trollWalkMarginLeft + "px";
}