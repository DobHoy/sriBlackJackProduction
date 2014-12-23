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
    $scope.canHitOrStay = false;

    $scope.canRestart = false;

    $scope.player = {Score:0, Cards:[]};
    $scope.dealer = {Score:0, Cards:[]};


    $scope.finishGame = function(gameState){

          if (gameState >= 0 )
          {
            mvDealer.alertStatus(gameState);
            $scope.canRestart = true;
            $scope.canHitOrStay = false;
          }
    }

    $scope.gameStart = function(){
      $scope.playerReady = true;
      $scope.gameinProgress = true;
      $scope.canRestart = false;
    };

    $scope.reStart = function(){
        $scope.player = {Score:0, Cards:[]};
        $scope.dealer = {Score:0, Cards:[]};
        $(".playing-card").remove();
        $scope.gameStart();
        $scope.canHitOrStay = false;
    }

    $scope.deal = function(){
      
      mvGame.Deal($scope.player);
      mvGame.Deal($scope.dealer);

      var gameState = mvGame.isGameOver($scope);
      $scope.finishGame(gameState);
      $scope.canHitOrStay = true;
      
    };

    $scope.hit = function(){
      
      mvGame.DealSingleCard($scope.player);
      var gameState = mvGame.isGameOver($scope);


      if (gameState >= 0 )
      {
        $scope.canRestart = true;
        mvDealer.alertStatus(gameState);
        $scope.canHitOrStay = false;
      }
      else{

          //dealers turn
           gameState = mvGame.dealersTurn($scope);
           $scope.finishGame(gameState);
      }

    };

    $scope.stay = function(){
 
      var gameState = mvGame.dealersTurn($scope);
      $scope.finishGame(gameState);
    };
  
});

