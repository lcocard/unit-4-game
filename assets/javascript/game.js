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
var dHP;
var dAP;
var dCAP;
var yourC;
var yourD;
var attk;
var deff;


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

/* ************************ Append Image *********************************** */

function appendImage(imageSource, containerId, imageId) {
    img = document.createElement("IMG");
    img.src = imageSource;
    img.setAttribute('id', imageId);
    document.getElementById(containerId).appendChild(img);
    return imageId;
}

/* ************************ Remove Image *********************************** */
function removeImage(imageId) {
    elementToBeRemoved = document.getElementById(imageId);
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
}

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

/* ************************************************************************* */
/* ************************ Append Image *********************************** */

/* function appendImage(imageSource, containerId, imageId) {
    img = document.createElement("IMG");
    img.src = imageSource;
    img.setAttribute('id', imageId);
    document.getElementById(containerId).appendChild(img);
    return imageId;
} */

/* ************************ Remove Image *********************************** */
/* function removeImage(imageId) {
    elementToBeRemoved = document.getElementById(imageId);
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
} */
/* ************************************************************************** */

$(document).ready(function () {
    initialize();

    /* Pick your character (attacker) */
    $(".Row1").click(function () {
        if (myC === "") {
            console.log(this);
            // $("#grid_row_yourChar").text($(this));
            // $(this).appendTo("#grid_row_yourChar");
            // $("#grid_row_yourChar").append($(this));

            myC = $(this);
            console.log("myC = " + myC);
            yourC = $(myC).attr("value");
            console.log("yourC = " + yourC);
            //console.log("yourCharPick = " + yourCharPick)

            if (yourC == characters.OWKenobi.name) {
                aHP = characters.OWKenobi.HP;
                aAP = characters.OWKenobi.AP;
                aCAP = characters.OWKenobi.CAP;
                aRealName = characters.OWKenobi.realName;
                attk = characters.OWKenobi;
                picSrc = characters.OWKenobi.pic;
                myImage = appendImage("assets/images/obiwankenobi.png", "grid_char_pick", "pic_yourCharPick");
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');
                $(".Row2").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#ffffff", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "white"
                });
                $(".Row3").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                 });
                $("img").css({
                    "height": "95%", "width": "95%", "padding-left": "10px", "padding-bottom": "0", "margin-bottom": "0"
                });
                $(".gridname_yourCharPick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                $(".hp_char_pick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                myImage = appendImage("assets/images/lukeskywalker.png", "grid_enemy0", "pic_yourCharPick");
                myImage = appendImage("assets/images/darthsidious.png", "grid_enemy1", "pic_yourCharPick");
                myImage = appendImage("assets/images/darthmaul.png", "grid_enemy2", "pic_yourCharPick");

            }



            else if (yourC == characters.LSkywalker.name) {
                aHP = characters.LSkywalker.HP;
                aAP = characters.LSkywalker.AP;
                aCAP = characters.LSkywalker.CAP;
                aRealName = characters.LSkywalker.realName;
                attk = characters.LSkywalker;
                picSrc = characters.LSkywalker.pic;
                myImage = appendImage(picSrc, "grid_char_pick", "pic_yourCharPick");
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');
                $(".Row2").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#ffffff", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "white"
                });
                $(".Row3").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                 });
                $("img").css({
                    "height": "95%", "width": "95%", "padding-left": "10px", "padding-bottom": "0", "margin-bottom": "0"
                });
                $(".gridname_yourCharPick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                $(".hp_char_pick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                myImage = appendImage("assets/images/obiwankenobi.png", "grid_enemy0", "pic_yourCharPick");
                myImage = appendImage("assets/images/darthsidious.png", "grid_enemy1", "pic_yourCharPick");
                myImage = appendImage("assets/images/darthmaul.png", "grid_enemy2", "pic_yourCharPick");
            }

            else if (yourC == characters.DSidious.name) {
                aHP = characters.DSidious.HP;
                aAP = characters.DSidious.AP;
                aCAP = characters.DSidious.CAP;
                aRealName = characters.DSidious.realName;
                attk = characters.DSidious;
                picSrc = characters.DSidious.pic;
                myImage = appendImage(picSrc, "grid_char_pick", "pic_yourCharPick");
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');                
                $(".Row2").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#ffffff", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "white"
                });
                $(".Row3").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                 });
                $("img").css({
                    "height": "95%", "width": "95%", "padding-left": "10px", "padding-bottom": "0", "margin-bottom": "0"
                });
                $(".gridname_yourCharPick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                $(".hp_char_pick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                myImage = appendImage("assets/images/obiwankenobi.png", "grid_enemy0", "pic_yourCharPick");
                myImage = appendImage("assets/images/lukeskywalker.png", "grid_enemy1", "pic_yourCharPick");
                myImage = appendImage("assets/images/darthmaul.png", "grid_enemy2", "pic_yourCharPick");
            }

            else if (yourC == characters.DMaul.name) {
                aHP = characters.DMaul.HP;
                aAP = characters.DMaul.AP;
                aCAP = characters.DMaul.CAP;
                aRealName = characters.DMaul.realName;
                attk = characters.DMaul;
                picSrc = characters.DMaul.pic;
                myImage = appendImage(picSrc, "grid_char_pick", "pic_yourCharPick");
                $(".gridname_yourCharPick").append('<span>' + aRealName + '</span>');
                $(".hp_char_pick").append('<span>' + aHP + '</span>');              
                $(".Row2").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#ffffff", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#1f8212", "outline-width": "3px", "align-items": "center", "background-color": "white"
                });
                $(".Row3").css({
                    "border-style": "solid", "border-width": "3px", "border-color": "#cc3300", "box-sizing": "border-box", "outline-style": "solid", "outline-color": "#000000", "outline-width": "3px", "align-items": "center", "background-color": "#cc3300"
                 });
                $("img").css({
                    "height": "95%", "width": "95%", "padding-left": "10px", "padding-bottom": "0", "margin-bottom": "0"
                });
                $(".gridname_yourCharPick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                $(".hp_char_pick").css({
                    "font-size": "0.6em",
                    "text-align": "center",
                    "font-family": "'Orbitron', sans-serif",
                    "margin-bottom": "0px"
                });
                myImage = appendImage("assets/images/obiwankenobi.png", "grid_enemy0", "pic_yourCharPick");
                myImage = appendImage("assets/images/lukeskywalker.png", "grid_enemy1", "pic_yourCharPick");
                myImage = appendImage("assets/images/darthsidious.png", "grid_enemy2", "pic_yourCharPick");
            }
            console.log("aHP = " + aHP);
            console.log("aAP = " + aAP);
            console.log("aCAP = " + aCAP);
            console.log("aRealName = " + aRealName);
            console.log("attk = " + attk);
            console.log("picSrc = " + picSrc);
            //  console.log("this characters.this.realName = " + characters.this.realName);
        }


        /* Move the rest of the characters in the "Enemies available to attack" row */

       // for (var i = 0; i < 4; i++) {

        //   myImage = appendImage(picSrc, "grid_enemy0", "pic_yourCharPick");

        /* $(".move" + [i]).not(myC).appendTo("#enemy" + [i]); */
         //  $("#enemy" + [i]).append($(".move" + [i]).clone());

       // } 

        $(".Row1").hide();

    });



    /* Pick your character (attacker) */

    /* Pick enemy (defender) */

    /* Attack */

    /* New Game */
    /* initialize(); */
});


