// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.
// e.g. function Monster(){};
// e.g. function Player(){};
//
// function Player(options){
//   this.name = options.name
//   this.health = options.health || 100;
//   this.attack = function(Monster){
//     return attackFunct;
//   }
// }
//
// function Monster(options){
//   this.health = options.health
// }
// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };
//
// var dino1 = new Player();
// var dino2 = new Player();
// var dino3 = new Player();
//
// var attackFunct = function(Monster){
//   return Monster.health =(Monster.health - (math.random * 20));
// }


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
});
$('#img2').click(function(){
  $('#character').css('background-image','url('+ image2 +')');
  $('header').css('display', 'none');
  $('#after-char-select').css('display','initial');
});
$('#img3').click(function(){
  $('#character').css('background-image','url('+ image3 +')');
  $('header').css('display', 'none');
  $('#after-char-select').css('display','inital');
});
$('#after-char-select').click(function(){
  $('#after-char-select').css('display','none');
  $('#battle').css('display','initial');
});
