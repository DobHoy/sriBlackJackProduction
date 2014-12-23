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


    $scope.canRestart = false;
    $scope.canHitOrStay = false;
//canRestart = false
//canDeal = false

    $scope.player = {Score:0, Cards:[]};
    $scope.dealer = {Score:0, Cards:[]};

    console.log("the thing is " + $scope.playerReady);
    

    // $scope.gameStart = mvGame.gameStart($scope);

    $scope.finishGame = function(gameState){

          if (gameState >= 0 )
          {
            mvDealer.alertStatus(gameState);
            $scope.canRestart = true;
            // $scope.gameStart();

          }


    }

    $scope.gameStart = function(){
      $scope.playerReady = true;
      $scope.gameinProgress = true;
      $scope.canRestart = false;
      console.log('i got called');

        
          


          // $scope.player = {Score:0, Cards:[]};
          // $scope.dealer = {Score:0, Cards:[]};
          // $(".playing-card").remove();
          

    };

    $scope.reStart = function(){

        $scope.player = {Score:0, Cards:[]};
          $scope.dealer = {Score:0, Cards:[]};
          $(".playing-card").remove();
          $scope.gameStart();
    }

    $scope.deal = function(){
      
      $scope.gameStart();

      mvGame.Deal($scope.player);

      mvGame.Deal($scope.dealer);

      

      var gameState = mvGame.isGameOver($scope);


      // var gameState = mvDealer.checkGameStateBJ($scope);


      $scope.finishGame(gameState);
      // if (gameState >= 0 )
      // {
      //   mvDealer.alertStatus(gameState);
      //   $scope.gameStart();

      // }


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
      var gameState = mvGame.isGameOver($scope);


      if (gameState >= 0 )
      {
        $scope.canRestart = true;
        mvDealer.alertStatus(gameState);
        // $scope.gameStart();
      }
      else{


          //dealers turn
           gameState = mvGame.dealersTurn($scope);
           $scope.finishGame(gameState);

          // var gameState = mvDealer.checkGameStateBJ($scope);



          // if (gameState >= 0 )
          // {
          //   mvDealer.alertStatus(gameState);
          //   $scope.gameStart();
          // }
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
      $scope.finishGame(gameState);

      // var gameState = mvDealer.checkGameStateBJ($scope);



      // if (gameState >= 0 )
      // {
      //   mvDealer.alertStatus(gameState);
      //   $scope.gameStart();
      // }

    };

    
   //how game would go 
   //deal 2 random cards 1st 





});

//some game logic 
// 

//when dealing I can't press hit, stay or restart
//hit stay , can't deal
//restart, all 3 buttons disabled
//when b1 on , restartDisabled

//canRestart = false
//canDeal = false

//move it all to another function