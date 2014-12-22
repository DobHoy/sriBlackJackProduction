'use strict';

/**
 * @ngdoc service
 * @name sritry1App.mvDealer
 * @description
 * # mvDealer
 * Factory in the sritry1App.
 */
angular.module('sritry1App')
  .factory('mvDealer', function () {


    


    // Public API here
    return {





      checkGameStateBJ: function(gameState){

        var playerScore = gameState.player.Score;
        var dealerScore = gameState.dealer.Score;

        if(playerScore === 21 && dealerScore === 21){
          return 0;
          } //tie
        else if(playerScore === 21 || dealerScore > 21 || ( (playerScore > dealerScore) && ((playerScore < 21) && (dealerScore < 21) ))){
          return 1; //player won
        }
        else if(  (dealerScore === 21) || (playerScore > 21)  || (( (playerScore < dealerScore) && ((playerScore < 21) && (dealerScore < 21) )) )){
          return 2; //dealer won
        }
        else{
          return -1; //game continues
        }
      }, 
      alertStatus: function(gameState){
        if(gameState === 0){
          swal('Its a tie!', 'The game is in Push', 'warning');
        }
        else if (gameState === 1){
          swal('Player won!', 'You won!', "success");
        }
        else if (gameState === 2){
          swal('Dealer won!', 'Dealer won!', 'info');
        }
        else{
          swal('some went wrong', 'oops', 'error');
        }

      },
      dealersTurn: function(gameState){
        var dealerScore = gameState.dealer.Score;

        if(dealerScore < 17)
        {
          //if dealer has less than 17, he must hit

          mvGame.DealSingleCard(gameState.dealer);
          //bust, ,blackjack or stay
          dealerScore = gameState.dealer.Score;
          if(dealerScore > 21)
          {
            //you won!
            swal("Player won!", "Dealer busted!", "success");
            return 1;
          }
          else if(dealerScore === 21){
            //dealerbackjack
            swal("Dealer won!", "Dealer balackjack!", "success");
            return 2;
          }
          else {
            return -1; //game continues
          }

        }


      }


    };


  });
