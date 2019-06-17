/* unit-4-game game.js */

/* Global variables */

$(".init").hide();
var name, aChar, aHP, aAP, aCAP, dChar, dHP, dAP, dCAP, yourC, yourD, myC, myD, attk, deff;
var characters = {
    OWKenobi: {
        name: "OWKenobi",
        realName: "Obi-Wan Kenobi",
        HP: 120,
        AP: 8,
        CAP: 24,
        pic: "assets/images/obiwankenobi.png"
    },
    LSkywalker: {
        name: "LSkywalker",
        realName: "Luke Skywalker",
        HP: 100,
        AP: 10,
        CAP: 5,
        pic: "assets/images/lukeskywalker.png"
    },
    DSidious: {
        name: "DSidious",
        realName: "Darth Sidious",
        HP: 150,
        AP: 10,
        CAP: 20,
        pic: "assets/images/darthsidious.png"
    },
    DMaul: {
        name: "DMaul",
        realName: "Darth Maul",
        HP: 180,
        AP: 12,
        CAP: 25,
        pic: "assets/images/darthmaul.png"
    }
};

/* Game reset */

function initialize() {
    $("#charPick").show();
    $(".attkbtn").show();
    $(".init").hide();
    myC, myD = "";

    characters.OWKenobi.HP = 120;
    characters.LSkywalker.HP = 100;
    characters.DSidious.HP = 150;
    characters.DMaul.HP = 180;

    characters.OWKenobi.AP = 8;
    characters.LSkywalker.AP = 10;
    characters.DSidious.AP = 10;
    characters.DMaul.AP = 12;

}

console.log("OWKenobi HP = " + characters.OWKenobi.HP);
console.log("OWKenobi AP = " + characters.OWKenobi.AP);
console.log("LSkywalker HP = " + characters.LSkywalker.HP);
console.log("LSkywalker AP = " + characters.LSkywalker.AP);
console.log("DSidious HP = " + characters.DSidious.HP);
console.log("DSidious AP = " + characters.DSidious.AP);
console.log("DMaul HP = " + characters.DMaul.HP);
console.log("DMaul AP = " + characters.DMaul.AP);



/* Pick your character (attacker) */

/* Move the rest of the characters in the "Enemies available to attack" row */

/* Pick your character (attacker) */

/* Pick enemy (defender) */

/* Attack */

$(document).ready(function(){


initialize ();

/* New Game */

});


