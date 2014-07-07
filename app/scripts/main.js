/* Use strict */

// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.
// e.g. function Monster(){};
// e.g. function Player(){};

function Player(options){
  this.name = options.name;
  this.health = options.health;
  this.attack = function(monsta){
    return monsta.health = monsta.health - (Math.floor(Math.random() * 10));
  };
  this.select = function(dino,image, backgroundimage){
    $('#character').css('background-image','url('+ image +')');
    $('header').css('display', 'none');
    $('#after-char-select').css('display','initial');
    $('#char-name').html(dino.name);
    $('#background').css('background-image','url('+ backgroundimage +')');
  };
  this.startBattle = function(dino,monster){
    dino.attack(monster);
    $('#monster-health').html(monster.health);
    setInterval(function(){
      monster.fight(dino);
    },100);
    $('#dino-health').html(dino.health);
    if(monster.health < 0){
      $('#battle').css('display','none');
      $('#victoryPage').css('display','initial');
      $('#score').html(dino.health);
    }
    if(dino.health < 0){
      $('#battle').css('display','none');
      $('#lostPage').css('display','intial');
    }
  };
};

function Monster(options){
  this.health = options.health;
  this.name = options.name;
  this.fight = function(player){
    return player.health = player.health - (Math.floor(Math.random() * 8));
  };
};

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
var monster2 = new Monster({
  name: "Even Uglier",
  health: 200
});


// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };

//jQuery Variables
$header = $('header');
$ACS = $('#after-char-select');
image1 = "images/images.duckduckgo.gif"
image2 = "images/images.duckduckgo.jpg"
image3 = "images/images.duckduckgo-1.jpg"
backgroundImage1 = "images/dino-background-1.jpg"
backgroundImage2 = "images/dino-background-2.jpg"
backgroundImage3 = "images/dino-background-3.jpg"

// After selecting character message
$('#after-char-select').click(function(){
  $('#after-char-select').css('display','none');
  $('#battle').css('display','initial');
});

// Adding health remaining to battle scene
$('#dino-health').html(dino1.health);
$('#dino-health').html(dino2.health);
$('#dino-health').html(dino3.health);


//Fighting function for dino1
$('#fightFunction').click(function(){
  dino1.attack(monster1);
  $('#monster-health').html(monster1.health);
  setInterval(function(){
    monster1.fight(dino1);
  },100);
  $('#dino-health').html(dino1.health);
  if(monster1.health < 0){
    $('#battle').css('display','none');
    $('#victoryPage').css('display','initial');
    $('#score').html(dino1.health);
  }
  if(dino3.health < 0){
    $('#battle').css('display','none');
    $('#lostPage').css('display','intial');
  }
});

// Fighting function for dino2
$('#fightFunction').click(function(){
  dino2.attack(monster1);
  $('#monster-health').html(monster1.health);
  setInterval(function(){
    monster1.fight(dino2);
  },100);
  $('#dino-health').html(dino2.health);
  if(monster1.health < 0){
    $('#battle').css('display','none');
    $('#victoryPage').css('display','initial');
    $('#score').html(dino2.health);
  }
  if(dino3.health < 0){
    $('#battle').css('display','none');
    $('#lostPage').css('display','intial');
  }
});

//Fighting function for dino3
$('#fightFunction').click(function(){
  dino3.attack(monster1);
  $('#monster-health').html(monster1.health);
  setInterval(function(){
    monster1.fight(dino3);
  },100);
  $('#dino-health').html(dino3.health);
  if(monster1.health < 0){
    $('#battle').css('display','none');
    $('#victoryPage').css('display','initial');
    $('#score').html(dino3.health);
  }
  if(dino3.health < 0){
    $('#battle').css('display','none');
    $('#lostPage').css('display','initial');
  }
});

$('#newCharSelect').click(function(){
 open('http://localhost:9000')
});

$('#img1').click(function(){
  dino1.select(dino1,image1,backgroundImage1);
});
$('#img2').click(function(){
  dino2.select(dino2,image2,backgroundImage2);
});
$('#img3').click(function(){
  dino3.select(dino3,image3,backgroundImage3);
});
