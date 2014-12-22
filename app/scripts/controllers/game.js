'use strict';

/**
 * @ngdoc function
 * @name sritry1App.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the sritry1App
 */
angular.module('sritry1App')
  .controller('GameCtrl', function ($scope, mvGame, mvDealer) {

    $scope.playerReady = false;
    $scope.gameinProgress = false;

    console.log("the thing is " + $scope.playerReady);
    

    // $scope.gameStart = mvGame.gameStart($scope);

    $scope.gameStart = function(){
      $scope.playerReady = true;
      $scope.gameinProgress = true;
      console.log('i got called');

        $(".playing-card").remove();
          


          $scope.player = {Score:0, Cards:[]};
          $scope.dealer = {Score:0, Cards:[]};

    };

    $scope.deal = function(){
      
      mvGame.Deal($scope.player);

      mvGame.Deal($scope.dealer);

      mvGame.isGameOver($scope);

                  // if (statusOfGame >= 0 )
            // {
            //   mvDealer.alertStatus(statusOfGame);
            //   // $scope.gameStart();
            //   this.gameStart(gameState);
            // }
            // return statusOfGame;
      // if (check === -1) //game continues
      // {
      //   //player turn 
      // }

      // var gameState = mvDealer.checkGameStateBJ($scope);



      // if (gameState >= 0 )
      // {
      //   mvDealer.alertStatus(gameState);
      //   $scope.gameStart();
      // }

      //checkGameStateBJ($scope) -> return 0,1,2
      //alert status 
      //newgame
      //if not -> nothing -> hit/stay


    };

    $scope.hit = function(){
      
      mvGame.DealSingleCard($scope.player);
      mvGame.isGameOver($scope);

      //dealers turn
      var gameState = mvDealer.dealersTurn($scope);


      // var gameState = mvDealer.checkGameStateBJ($scope);



      if (gameState >= 0 )
      {
        mvDealer.alertStatus(gameState);
        $scope.gameStart();
      }

      // //dealer turn
      // gameState = mvDealer.dealersTurn($scope);
      // if (gameState >= 0 )
      // {
      //   mvDealer.alertStatus(gameState);
      //   $scope.gameStart();
      // }




    };



    $scope.stay = function(){
 
      //dealer stack
      var gameState = mvGame.dealersTurn($scope);


      // var gameState = mvDealer.checkGameStateBJ($scope);



      if (gameState >= 0 )
      {
        mvDealer.alertStatus(gameState);
        $scope.gameStart();
      }

    };

    
   //how game would go 
   //deal 2 random cards 1st 





});

//some game logic 
// 

