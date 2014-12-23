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



    return {



      checkGameStateBJ: function(gameState){

        var playerScore = gameState.player.Score;
        var dealerScore = gameState.dealer.Score;

        if(playerScore === 21 && dealerScore === 21){
          return 0;
          } //tie
        else if( (playerScore === 21) || (dealerScore > 21) || ( (playerScore > dealerScore) && ((playerScore < 21) && (dealerScore < 21) && (dealerScore > 16)  ))){
          return 1; //player won
        }
        else if(  (dealerScore === 21) || (playerScore > 21)) {     
          return 2; //dealer won
        }
        else{
          return -1; //game continues
        }
      }, 
      alertStatus: function(gameState){
        if(gameState === 0){
          swal({title:'Its a tie!', text:'The game is in Push', type:'warning', confirmButtonText: "Cool"});
        }
        else if (gameState === 1){
          swal({title:'Player won!', text:'You won!', type:"success",confirmButtonText: "Cool"} );
        }
        else if (gameState === 2){
          swal('Dealer won!', 'Dealer won!', 'info');
        }
        else{
          swal('some went wrong', 'oops', 'error');
        }

      }


    };


  });
