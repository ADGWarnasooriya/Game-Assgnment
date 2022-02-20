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
var vikingIdleStatus = false;

function vikingIdleAnimation() {
    vikingIdleStatus = true;
    vikingIdle = vikingIdle - 512.1;

    viking.style.backgroundPositionX = vikingIdle + "px";
}

var trollIdle = 0;
var trollIdleId = 0;
var trollIdleStatus = false;

function trollIdleAnimation() {
    trollIdleStatus = true;
    trollIdle = trollIdle + 420;

    troll.style.backgroundPositionX = trollIdle + "px";
}

function keypress(event) {
    var key = event.which;
    // alert(key);
    if (key == 68) {
        if (vikingWalkStatus == false) {
            vikingWalkAnimation();
            vikingWalkId = setInterval(vikingWalkMarginLeft, 150);
            vikingWalkStatus = true;
        }
    }
    if (key == 37) {
        if (trollWalkStatus == false) {
            trollWalkAnimation();
            trollWalkId = setInterval(trollWalkMarginLeft, 150);
            trollWalkStatus = true;
        }

    }
}

var vikingPositionY = 0;
var vikingMarginLeft = 0;
var vikingWalkId;
var vikingWalkStatus = false;
var vikingAttackStatus = false;

function vikingWalkAnimation() {
    vikingPositionY = -512;
    viking.style.backgroundPositionY = vikingPositionY + "px";
}

function vikingWalkMarginLeft() {
    vikingMarginLeft = vikingMarginLeft + 3;
    viking.style.marginLeft = vikingMarginLeft + "px";
    // alert(trollMarginLeft - vikingMarginLeft);
    if (trollMarginLeft - vikingMarginLeft < 270) {
        clearInterval(vikingWalkId);
        vikingPositionY = 0;
        viking.style.backgroundPositionY = vikingPositionY + "px";


    }
}

var trollPositionY = 0;
var trollMarginLeft = 1000;
var trollWalkId;
var trollWalkStatus = false;
var trollAttackStatus = false;

function trollWalkAnimation() {
    trollPositionY = -262.8;
    troll.style.backgroundPositionY = trollPositionY + "px";

}

function trollWalkMarginLeft() {
    trollMarginLeft = trollMarginLeft - 3;
    troll.style.marginLeft = trollMarginLeft + "px";
    // alert(trollMarginLeft - vikingMarginLeft);
    if (trollMarginLeft - vikingMarginLeft < 270) {
        clearInterval(trollWalkId);
        trollPositionY = 0;
        troll.style.backgroundPositionY = trollPositionY + "px";


    }
}

function vikingWalkAn