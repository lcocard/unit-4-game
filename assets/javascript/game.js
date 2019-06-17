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


}

/* Pick your character (attacker) */

/* Move the rest of the characters in the "Enemies available to attack" row */

/* Pick your character (attacker) */

/* Pick enemy (defender) */

/* Attack */

/* New Game */




