/* unit-4-game game.js */

/* Global variables */

$(".init").hide();
var myC = "";
var myD = "";
var picSrc = "";
var img;
var name;
var aRealName;
var aChar;
var aHP;
var aAP;
var aCAP;
var dChar;
var dRealName;
var dHP;
var dAP;
var dCAP;
var yourC;
var yourD;
var attk;
var deff;
var i_enemy = 0
var wins = 0;
var dynamicClass_flag;
// var initial_aAP;



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
    myC = "";
    myD = "";

    console.log("INIT myC = " + myC);

    characters.OWKenobi.HP = 120;
    characters.LSkywalker.HP = 100;
    characters.DSidious.HP = 150;
    characters.DMaul.HP = 180;

    characters.OWKenobi.AP = 8;
    characters.LSkywalker.AP = 10;
    characters.DSidious.AP = 10;
    characters.DMaul.AP = 12;

    $(".You_Attacked").empty();
    $(".Attacked_Back").empty();
    $(".You_Been_Defeated").empty();
    $(".You_Won_GO").empty();
    $(".You_Have_Defeated_GO").empty();
    $(".No_Enemy_Here").empty();
    $("#defender-char").empty();
    $("#dynamicID").empty();

    $(".gridname0").html(characters.OWKenobi.realName);
    $(".gridname1").html(characters.LSkywalker.realName);
    $(".gridname2").html(characters.DSidious.realName);
    $(".gridname3").html(characters.DMaul.realName);

    $("#Char-Pick0").appendTo("#charPick");
    $("#Char-Pick1").appendTo("#charPick");
    $("#Char-Pick2").appendTo("#charPick");
    $("#Char-Pick3").appendTo("#charPick");

    $(".char0hp").html(characters.OWKenobi.HP);
    $(".char1hp").html(characters.LSkywalker.HP);
    $(".char2hp").html(characters.DSidious.HP);
    $(".char3hp").html(characters.DMaul.HP);

    $(".Row1").css({ "border-style": "solid", "border-width": "3px", "border-color": "#ffffff", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "white" });
};

console.log("OWKenobi HP = " + characters.OWKenobi.HP);
console.log("OWKenobi AP = " + characters.OWKenobi.AP);
console.log("LSkywalker HP = " + characters.LSkywalker.HP);
console.log("LSkywalker AP = " + characters.LSkywalker.AP);
console.log("DSidious HP = " + characters.DSidious.HP);
console.log("DSidious AP = " + characters.DSidious.AP);
console.log("DMaul HP = " + characters.DMaul.HP);
console.log("DMaul AP = " + characters.DMaul.AP);

$(document).ready(function () {
    initialize();

    $(".attkbtn").click(function () {

        if ($("#dynamicID").length > 0) {
           // alert("HI12");
            console.log("#dynamicID exists!!!");
        } else {
            // alert("HI13");
            $(".No_Enemy_Here").html("<p> No Enemy Here!!! </p>");
        }
    });

    /* Pick your character (attacker) */
    $(".Row1").click(function () {
        if (myC === "") {
            console.log(this);
            $("div", this).clone().appendTo("#grid_row_yourChar");
            myC = $("div", this).clone();
            for (var i = 0; i < 4; i++) {
                $("#Char-Pick" + [i]).not(this).appendTo(".enemy" + [i]);
            }

            //myC = $("div", this).clone();
            myC = $("div", this).clone();
            console.log("myC = " + myC);
            yourC = $(this).attr("value");
            console.log("yourC = " + yourC);


            if (yourC == characters.OWKenobi.name) {
                aHP = characters.OWKenobi.HP;
                aAP = characters.OWKenobi.AP;
                aCAP = characters.OWKenobi.CAP;
                aRealName = characters.OWKenobi.realName;
                picSrc = characters.OWKenobi.pic;
                attk = characters.OWKenobi;
                //initial_aAP = aAP;
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');
                $(".Row1").not(this).css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                });
            }

            else if (yourC == characters.LSkywalker.name) {
                aHP = characters.LSkywalker.HP;
                aAP = characters.LSkywalker.AP;
                aCAP = characters.LSkywalker.CAP;
                aRealName = characters.LSkywalker.realName;
                picSrc = characters.LSkywalker.pic;
                attk = characters.LSkywalker;
                //initial_aAP = aAP;
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');
                $(".Row1").not(this).css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                });
            }

            else if (yourC == characters.DSidious.name) {
                aHP = characters.DSidious.HP;
                aAP = characters.DSidious.AP;
                aCAP = characters.DSidious.CAP;
                aRealName = characters.DSidious.realName;
                picSrc = characters.DSidious.pic;
                attk = characters.DSidious;
                //initial_aAP = aAP;
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');
                $(".Row1").not(this).css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                });
            }

            else if (yourC == characters.DMaul.name) {
                aHP = characters.DMaul.HP;
                aAP = characters.DMaul.AP;
                aCAP = characters.DMaul.CAP;
                aRealName = characters.DMaul.realName;
                picSrc = characters.DMaul.pic;
                attk = characters.DMaul;
                //initial_aAP = aAP;
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');
                $(".Row1").not(this).css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                });
            }
            console.log("aHP = " + aHP);
            console.log("aAP = " + aAP);
            console.log("aCAP = " + aCAP);
            console.log("aRealName = " + aRealName);
            console.log("picSrc = " + picSrc);
        }

        $("#grid_row_yourChar").hide();

    });

    /* Pick enemy (defender) */

    var defender_flag = $("#defender-char").children().length;

    console.log("defender_flag = " + defender_flag);

    $(".grid_deff").click(function () {
        $(".No_Enemy_Here").empty();
        i_enemy++;
        $(".attkbtn").show();
        if (myD === "") {
            $(".You_Have_Defeated_GO").empty();
            console.log(this);
            $(this).clone().appendTo("#defender-char").attr("id", "dynamicClass");
            myD = $("div", this).clone();
            $(this).hide();
            $(".No_Enemy_Here").empty();
            console.log("myD = " + myD);
            yourD = $(this).children().attr("value");
            console.log("yourD = " + yourD);

            if (yourD == characters.OWKenobi.name) {
                dHP = characters.OWKenobi.HP;
                dAP = characters.OWKenobi.AP;
                dCAP = characters.OWKenobi.CAP;
                dRealName = characters.OWKenobi.realName;
                deff = characters.OWKenobi;
                $(".gridname_yourCharPick").append('<span>' + dRealName + '</span>');
                $(".hp_char_pick").append('<span>' + dHP + '</span>');
                $(".Row1", "#defender-char").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#000000", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "#000000"
                });
                $(".name", "#defender-char").css({ "color": "#ffffff" });
                $(".HP", "#defender-char").css({ "color": "#ffffff" });
                console.log("dHP = " + dHP);
                console.log("dAP = " + dAP);
                console.log("dCAP = " + dCAP);
                console.log("Defender RealName = " + dRealName);
            }

            else if (yourD == characters.LSkywalker.name) {
                dHP = characters.LSkywalker.HP;
                dAP = characters.LSkywalker.AP;
                dCAP = characters.LSkywalker.CAP;
                dRealName = characters.LSkywalker.realName;
                deff = characters.LSkywalker;
                $(".gridname_yourCharPick").append('<span>' + dRealName + '</span>');
                $(".hp_char_pick").append('<span>' + dHP + '</span>');
                $(".Row1", "#defender-char").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#000000", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "#000000"
                });
                $(".name", "#defender-char").css({ "color": "#ffffff" });
                $(".HP", "#defender-char").css({ "color": "#ffffff" });
                console.log("dHP = " + dHP);
                console.log("dAP = " + dAP);
                console.log("dCAP = " + dCAP);
                console.log("Defender RealName = " + dRealName);

            }

            else if (yourD == characters.DSidious.name) {
                dHP = characters.DSidious.HP;
                dAP = characters.DSidious.AP;
                dCAP = characters.DSidious.CAP;
                dRealName = characters.DSidious.realName;
                deff = characters.DSidious;
                $(".gridname_yourCharPick").append('<span>' + dRealName + '</span>');
                $(".hp_char_pick").append('<span>' + dHP + '</span>');
                $(".Row1", "#defender-char").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#000000", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "#000000"
                });
                $(".name", "#defender-char").css({ "color": "#ffffff" });
                $(".HP", "#defender-char").css({ "color": "#ffffff" });
                console.log("dHP = " + dHP);
                console.log("dAP = " + dAP);
                console.log("dCAP = " + dCAP);
                console.log("Defender RealName = " + dRealName);
            }

            else if (yourD == characters.DMaul.name) {
                dHP = characters.DMaul.HP;
                dAP = characters.DMaul.AP;
                dCAP = characters.DMaul.CAP;
                dRealName = characters.DMaul.realName;
                deff = characters.DMaul;
                $(".gridname_yourCharPick").append('<span>' + dRealName + '</span>');
                $(".hp_char_pick").append('<span>' + dHP + '</span>');
                $(".Row1", "#defender-char").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#000000", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "#000000"
                });
                $(".name", "#defender-char").css({ "color": "#ffffff" });
                $(".HP", "#defender-char").css({ "color": "#ffffff" });
                console.log("dHP = " + dHP);
                console.log("dAP = " + dAP);
                console.log("dCAP = " + dCAP);
                console.log("Defender RealName = " + dRealName);
            }
        }

        /* Attack */

        defender_flag = $("#defender-char").children().length;
        console.log("defender_flag = " + defender_flag);
        dynamicClass_flag = $("#dynamicClass").length;
        //alert(dynamicClass_flag);
        console.log("dynamic_Class flag = " + dynamicClass_flag);
        // initial_aAP = aAP;
        $(".attkbtn").click(function () {
            $(".No_Enemy_Here").empty();

            if (!(aHP < 1) || (dHP < 1)) {

                dHP = (dHP - aAP);
                $(".You_Attacked").html(("You attacked " + dRealName + " for " + aAP + " damage."))
                $("." + yourD).html('<span>' + dHP + '</span>')
                aHP = (aHP - dCAP);
                $(".Attacked_You_Back").html(dRealName + " attacked you back for " + dCAP + " damage. ")
                $("." + yourC).html('<span>' + aHP + '</span>');

                attk.aAP = aAP;
                aAP = (aAP + aAP);

                console.log("aAP = " + aAP);
            }
            if (dHP < 0) {
                $(".You_Attacked").empty();
                $(".Attacked_You_Back").empty();

                $(".You_Have_Defeated_GO").html("You have defeated " + dRealName + ", you can chose to fight another enemy.");
                $("#defender-char").empty();
                $("#dynamicID").empty();
                $(".attkbtn").hide();
                $(".No_Enemy_Here").empty();
                wins++;
                myD = "";
                console.log("after defeating, aAP = " + aAP);
                console.log("after defeating, wins = " + wins);
            }
            console.log("i_enemy = " + i_enemy)
            if (i_enemy === 3) {

                console.log("if YOU WON, wins = " + wins);
                $(".You_Attacked").empty();
                $(".Attacked_You_Back").empty();
                $(".You_Been_Defeated").empty();
                $(".You_Won_GO").empty();
                $(".You_Have_Defeated_GO").empty();
                $(".No_Enemy_Here").empty();
                $(".You_Attacked").html("You Won !!! GAME OVER !!!");
                $(".attkbtn").hide();
                $(".init").show();
                $(".init").click(function () {
                    window.location.reload();
                })
            }

            if (aHP <= 0) {
                $(".attkbtn").hide();
                $(".init").show();
                $(".You_Attacked").empty();
                $(".Attacked_You_Back").empty();
                $(".You_Won_GO").empty();
                $(".You_Have_Defeated_GO").empty();
                $(".You_Attacked").empty();
                $(".No_Enemy_Here").empty();
                $(".You_Been_Defeated").html("You've been defetead... GAME OVER!!!");
                $(".init").click(function () {
                    window.location.reload();
                })
            }

        })

    });
});


