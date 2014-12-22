'use strict';

/**
 * @ngdoc service
 * @name sritry1App.mvCard
 * @description
 * # mvCard
 * Factory in the sritry1App.
 */
angular.module('sritry1App')
  .factory('mvCard', function (lodash) {
 
  var suits = [ 'heart', 'diamond', 'spade', 'club' ];
  var ranks = [ 'ace', 'two', 'three', 
  'four', 'five', 'six', 'seven', 'eight', 
  'nine', 'ten', 'jack', 'queen', 'king' ];

  var cardDeck = [];

   angular.forEach(suits, function(suit) {
            angular.forEach(ranks, function(rank) {
                cardDeck.push(
                        {
                            suit: suit,
                            rank: rank
                        });
            });
        });


    return {
      giveRandomCard: function () {
        var randomSuit = suits[lodash.random(suits.length - 1)];

        var randomRank = ranks[lodash.random(ranks.length - 1)];

        var randomCard = { suit: randomSuit, rank: randomRank};

        return randomCard;
      },
      
      checkDeck: function(cardtoCheckAgainst)
      {
        var removedCardArray = lodash.remove(cardDeck, function(cardToCheck) { 

          return ((cardToCheck.suit === cardtoCheckAgainst.suit) && (cardToCheck.rank === cardtoCheckAgainst.rank) ); 
        });
        return removedCardArray;
      },
      returnRightCard:function(){

        var randomCard = this.giveRandomCard();
        var removedCard = this.checkDeck(randomCard);

        //is it in card deck?
        if(removedCard.length != 0){
          //card was in Deck
          return randomCard;
        }
        else
        {
          return this.returnRightCard();
        }
        //There would be a edge case of the deck being empty when all the cards are 
        //drawn, but lets assume this woun't happen as it's impossible this would happen in 
        //this current form of blackjack
      }, 
      getScore: function(rankCheck){
         var index = ranks.indexOf(rankCheck);

         if ((index == 0) || (index == 10) || (index == 11) || (index == 12))
         {
            if (index === 0){
              return 11; //Ace returns 11 not 10
            }
            else{
              return 10;
            }
         }
         else{
          return (index+1);
        }
      }
      
    };
  });

