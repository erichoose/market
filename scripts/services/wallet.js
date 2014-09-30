'use strict';

/**
 * @ngdoc service
 * @name marketApp.Wallet
 * @description
 * # Wallet
 * Factory in the marketApp.
 */
angular.module('marketApp')
  .factory('Wallet', function () {
    // Service logic
    // ...
    var currentMoney = 100000;
    var changeAmount = function (amount) {      
      if(currentMoney + amount > 0) {
        currentMoney += amount;
        return currentMoney; 
      } else {
        return '';
      }      
    };

    // Public API here
    return {
      setAmount: function (amount) {
        return changeAmount(-amount);
      },
      getAmount: function () {
        return currentMoney;
      }
    };
  });

