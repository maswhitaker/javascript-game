/* Use strict */

var infolog = $("#info").html();
$("#monster-health").append(_.template(infolog,monster1));

// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.
// e.g. function Monster(){};
// e.g. function Player(){};

function Player(options){
  this.name = options.name;
  this.health = options.health;
  this.attack = function(monsta){
    return monsta.health = monsta.health - (Math.random() * 20);
  };
};
function Monster(options){
  this.health = options.health;
  this.name = options.name;
}

// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };
//
var dino1 = new Player({
  health: 100,
  name: "cartoon Rex"
});
var dino2 = new Player({
  health: 100,
  name: "T-rex"
});
var dino3 = new Player({
  health: 100,
  name: "Brontasaurus"
});
var monster1 = new Monster({
  name: "Ugly",
  health: 100
});


// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };
$header = $('header');
$ACS = $('#after-char-select');
image1 = "images/images.duckduckgo.gif"
image2 = "images/images.duckduckgo.jpg"
image3 = "images/images.duckduckgo-1.jpg"

$('#img1').click(function(){
  $('#character').css('background-image','url('+ image1 +')');
  $('header').css('display', 'none');
  $('#after-char-select').css('display','initial');
  $('#char-name').html(dino1.name);
});
$('#img2').click(function(){
  $('#character').css('background-image','url('+ image2 +')');
  $('header').css('display', 'none');
  $('#after-char-select').css('display','initial');
  $('#char-name').html(dino2.name);
});
$('#img3').click(function(){
  $('#character').css('background-image','url('+ image3 +')');
  $('header').css('display', 'none');
  $('#after-char-select').css('display','initial');
  $('#char-name').html(dino3.name);
});
$('#after-char-select').click(function(){
  $('#after-char-select').css('display','none');
  $('#battle').css('display','initial');
});

$('#fightFunction').click(function(){
  dino1.attack(monster1);
});
$('#fightFunction').click(function(){
  dino2.attack(monster1);
});
$('#fightFunction').click(function(){
  dino3.attack(monster1);
});
