// Kevin Lee ITC 370 Final Project 12/6/2021

// My variables

var redDiv = document.getElementById('red_car');
var blackDiv = document.getElementById('black_car');
var posB;
var posG;
var redImage = document.getElementById('redImg');
var blackImage = document.getElementById('blackImg');

// Refreshes Images
function setUp(){
  posB = 0;
  posG = 0;
  blackDiv.style.left = posB + 'px';
  redDiv.style.left = posG + 'px';
  redImage.src = "redcar.png";
  blackImage.src = "blackcar.png";
  redImage.style.display = "block";
  blackImage.style.display = "block";
  document.getElementById('redWinsImg').style.display = "none";
  document.getElementById('BlackWinsImg').style.display = "none";
  document.getElementById('startButton').style.display = "block";
  document.getElementById('startButtonTwo').style.display = "none";
}

// Makes the race start
function race() {
    setUp();
  document.getElementById('startButton').style.display = "none";
  document.getElementById('startButtonTwo').style.display = "block";
  var timer = setInterval(frame, 100);
// Makes the images move by picking a number between 1-30
  function frame() {
    if (posB > 500 || posG > 500 ){
      clearInterval(timer);
      posB > posG ? blackWins() : redWins();
    } else {
      var randomB = Math.floor(Math.random() * 30);
      var randomG = Math.floor(Math.random() * 30);
      posB += randomB;
      posG += randomG;
      blackDiv.style.left = posB + 'px';
      redDiv.style.left = posG + 'px';

    }
  }
}

// Makes the winning image text come up
function redWins(){
    blackImage.style.display = "block";
    document.getElementById('redWinsImg').style.display = "block";
      window.alert("Red Wins! Please Click on Checkered flag to replay.");
  }
// Makes the winning text come up
function blackWins(){
    redImage.style.display = "block";
  document.getElementById('BlackWinsImg').style.display = "block";
    window.alert("Black wins! Please Click on Checkered flag to replay.");
}