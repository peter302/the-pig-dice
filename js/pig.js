
var big = {
  player1totalScore: 0,
  player2totalScore: 0,
  currentplayer: 1,
  totalscore: 0,
};

function roll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}

var play = function() {
  var die = roll();
  if(die ===1){die=0
    big.totalscore += die;
    end();
    switchr();
  } else {
    big.totalscore +=die;
    if (big.currentplayer === 1) {
      if (big.totalscore + big.player1totalScore >= 100) {
        winner(1);
      }
    } else if (big.totalscore + big.player2totalScore >= 100) {
      winner(2);
  }
  }
  return die;
}

function hold() {
  var active = big.currentplayer;
  if (active ===1) {
    big.player1totalScore += big.totalscore;
  } else {
    big.player2totalScore += big.totalscore;
  }
  big.totalscore = big.totalscore;
  switchr();
}


function switchr () {
  if (big.currentplayer === 1) {
    $("#area1").hide();
    $("#area2").show();
    big.currentplayer = 2;

  } else if(big.currentplayer ===2){
    $("#area2").hide();
    $("#area1").show();
    big.currentplayer = 1;

  }
}

function reset() {
  big.player1totalScore = 0;
  big.player2totalScore = 0;
  big.currentplayer = 1;
  big.totalscore = 0;
}




function end(){
  alert("game over.you hit a one");
  $(".playerStatus").text(big.currentplayer);
}

function winner(playerNumber) {
  alert("Player " + playerNumber + " won");
  resetGame();
}

$(document).ready(function() {

  $("form#pigForm").submit(function(event){
    var player1Name = $("input#name1").val();
    var player2Name = $("input#name2").val();
      $("span#attach1").text(player1Name);
      $("span#attach2").text(player2Name);
      $("#area2").hide();
      $("#area").show();
      $(".the").text(big.currentplayer);
      event.preventDefault();
  })


  $(".roll").click(function() {
    result = play();
    $("#turn").text(result);
    $("#result").text(big.totalscore);

  });
  $(".roll2").click(function() {
    result = play();
    $("#turn2").text(result);
    $("#result2").text(big.totalscore);

  });

  $(".hold").click(function(){
    hold();
    $("rollResult").text("");
    $(".player1Score").text(big.player1totalScore);
  });
  $(".hold2").click(function(){
    hold();
    $("rollResult").text("");
    $(".player1Score").text(big.player1totalScore);
    $(".player2Score").text(big.player2totalScore);
    $(".playerStatus").text(big.currentplayer);
  });
});
