$(function() {
  var scissors = $('#scissors');
  var paper = $('#paper');
  var rock = $('#rock');
  var lizard = $('#lizard');
  var spock = $('#spock');
  var win = $('.win');
  var lose = $('.lose');
  var tie = $('.tie');
  var scoreBoard = $('#score span');
  var score = localStorage.getItem('score') || 0;
  win.hide();
  lose.hide();
  tie.hide();
  scoreBoard.text(score);

  function countScore() {
    score++;
    localStorage.setItem('score', score);
    scoreBoard.fadeOut(function() {
      scoreBoard.text(localStorage.getItem('score'));
    }).fadeIn();
  
  }
  
  function loseScore() {
    score--;
    localStorage.setItem('score', score);
    scoreBoard.fadeOut(function() {
      scoreBoard.text(localStorage.getItem('score'));
    }).fadeIn();
  
  }

  //display selected player move

  $('.available-moves>span').on('click', function() {
    var playerMove = $(this).attr('id');

    $('.available-moves').fadeOut();

    $('.picked').delay(300).fadeIn();

    function setPlayerMove() {
      $('.player-move').html('<span id="' + playerMove + '"><span><img  src="images/icon-' + playerMove + '.svg" alt=""></span></span>')
    }

    setPlayerMove()

    //determine computer move

    function computerMove() {
      var num = 1 + Math.random() * 4;

      num = Math.round(num);

      function setComputerMove() {
        $('.computer-move').html('<span id="' + computerMove + '"><span><img  src="images/icon-' + computerMove + '.svg" alt=""></span></span>');
      }

      if (num == 1) {
        computerMove = "rock";
        setComputerMove();
      }
      if (num == 2) {
        computerMove = "paper";
        setComputerMove();
      }
      if (num == 3) {
        computerMove = "scissors";
        setComputerMove();
      }
      if (num == 4) {
        computerMove = "lizard";
        setComputerMove();
      }
      if (num == 5) {
        computerMove =
          "spock";
        setComputerMove();
      }

      //determine win, loss, or tie, 
      //and show message


      switch (computerMove) {
        case 'rock':
          if (playerMove == 'rock') {
            tie.show();
          }
          if (playerMove == 'paper') {
            $('.win').show();

            countScore();
          }
          if (playerMove == 'scissors') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'lizard') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'spock') {
            win.show();

            countScore();
          }
          break;

        case 'paper':
          if (playerMove == 'rock') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'paper') {
            tie.show();
          }
          if (playerMove == 'scissors') {
            win.show();

            countScore();

          }
          if (playerMove == 'lizard') {
            win.show();

            countScore();
          }
          if (playerMove == 'spock') {
            lose.show();
            
            loseScore();
          }
          break;

        case 'scissors':
          if (playerMove == 'rock') {
            win.show();

            countScore();
          }
          if (playerMove == 'paper') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'scissors') {
            tie.show();
          }
          if (playerMove == 'lizard') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'spock') {
            win.show();

            countScore();
          }
          break;

        case 'lizard':
          if (playerMove == 'rock') {
            win.show();

            countScore();
          }
          if (playerMove == 'paper') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'scissors') {
            win.show();

            countScore();
          }
          if (playerMove == 'lizard') {
            tie.show();
          }
          if (playerMove == 'spock') {
            lose.show();
            
            loseScore();
          }
          break;

        case 'spock':
          if (playerMove == 'rock') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'paper') {
            win.show();

            countScore();
          }
          if (playerMove == 'scissors') {
            lose.show();
            
            loseScore();
          }
          if (playerMove == 'lizard') {
            win.show();

            countScore();
          }
          if (playerMove == 'spock') {
            tie.show();
          }
      }

    }

    computerMove();

  });

  //reset game

  $('.play-again').on('click', function() {

    win.fadeOut();
    lose.fadeOut();
    tie.fadeOut();
    $('.player-move>span').fadeOut();
    $('.computer-move>span').fadeOut();
    $('.picked').fadeOut();
    $('.available-moves').delay(300).fadeIn();

  });

  //display rules

  $('#rules').on('click', function() {

    $('#rules-image').fadeToggle();

  });

  //hide rules

  $('#close').on('click', function() {

    $('#rules-image').fadeToggle();

  });


});
