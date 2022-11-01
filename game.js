$(function() {
  var scissors = $('#scissors');
  var paper = $('#paper');
  var rock = $('#rock');
  var lizard = $('#lizard');
  var spock = $('#spock');
  var win = $('.win');
  var lose = $('.lose');
  var tie = $('.tie');

  win.hide();
  lose.hide();
  tie.hide();

  //display selected player move

  $('.available-moves>span').on('click', function() {
    var playerMove = $(this).attr('id');

    $('.available-moves').fadeOut();

    $('.picked').delay(300).fadeIn();

    if (playerMove == 'scissors') {

      $('.player-move').html('<span id="scissors"><span><img  src="images/icon-scissors.svg" alt=""></span></span>');

    }
    else if (playerMove == 'paper') {

      $('.player-move').html('<span id="paper"><span><img  src="images/icon-paper.svg" alt=""></span></span>');

    } else if (playerMove == 'rock') {
      $('.player-move').html('<span id="rock"><span><img  src="images/icon-rock.svg" alt=""></span></span>');
    } else if (playerMove == 'lizard') {
      $('.player-move').html('<span id="lizard"><span><img  src="images/icon-lizard.svg" alt=""></span></span>');
    } else if (playerMove == 'spock') {
      $('.player-move').html('<span id="spock"><span><img  src="images/icon-spock.svg" alt=""></span></span>');
    }

    //determine computer move

    function computerMove() {
      var num = 1 + Math.random() * 4;

      num = Math.round(num);

      if (num == 1) {
        computerMove = "rock";
        $('.computer-move').html('<span id="rock"><span><img  src="images/icon-rock.svg" alt=""></span></span>');
      }
      if (num == 2) {
        computerMove = "paper";
        $('.computer-move').html('<span id="paper"><span><img  src="images/icon-paper.svg" alt=""></span></span>');
      }
      if (num == 3) {
        computerMove = "scissors";
        $('.computer-move').html('<span id="scissors"><span><img  src="images/icon-scissors.svg" alt=""></span></span>');
      }
      if (num == 4) {
        computerMove = "lizard";
        $('.computer-move').html('<span id="lizard"><span><img  src="images/icon-lizard.svg" alt=""></span></span>');
      }
      if (num == 5) {
        computerMove =
          "spock";
        $('.computer-move').html('<span id="spock"><span><img  src="images/icon-spock.svg" alt=""></span></span>');
      }

      //determine win, loss, or tie, 
      //and show message
      
      scoreBoard = $('#score');

      switch (computerMove) {
        case 'rock':
          if (playerMove == 'rock') {
            tie.show();
          }
          if (playerMove == 'paper') {
            $('.win').show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'scissors') {
            lose.show();
          }
          if (playerMove == 'lizard') {
            lose.show();
          }
          if (playerMove == 'spock') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          break;

        case 'paper':
          if (playerMove == 'rock') {
            lose.show();
          }
          if (playerMove == 'paper') {
            tie.show();
          }
          if (playerMove == 'scissors') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);

          }
          if (playerMove == 'lizard') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'spock') {
            lose.show();
          }
          break;

        case 'scissors':
          if (playerMove == 'rock') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'paper') {
            lose.show();
          }
          if (playerMove == 'scissors') {
            tie.show();
          }
          if (playerMove == 'lizard') {
            lose.show();
          }
          if (playerMove == 'spock') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          break;

        case 'lizard':
          if (playerMove == 'rock') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'paper') {
            lose.show();
          }
          if (playerMove == 'scissors') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'lizard') {
            tie.show();
          }
          if (playerMove == 'spock') {
            lose.show();
          }
          break;

        case 'spock':
          if (playerMove == 'rock') {
            lose.show();
          }
          if (playerMove == 'paper') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'scissors') {
            lose.show();
          }
          if (playerMove == 'lizard') {
            win.show();

            score++;
            scoreBoard.fadeOut();
            scoreBoard.delay(300).fadeIn().html(score);
          }
          if (playerMove == 'spock') {
            tie.show();
          }
      }

    }

    computerMove();

  });

  //to reset game

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

  //record player score



  var score = 0;
  
  localStorage.setItem('score', score);

  score = localStorage.getItem('score');

});
