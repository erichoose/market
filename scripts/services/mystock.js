'use strict';

/**
 * @ngdoc service
 * @name marketApp.MyStock
 * @description
 * # MyStock
 * Factory in the marketApp.
 */
angular.module('marketApp')
  .factory('MyStock', function () {
    // Service logic
    // ...
    var stocks = [];

    var addStock = function (name, quantity, total, symbol) {
      var stockInfo = {
        company: name,
        quantity: quantity,
        pricePaid: total,
        symbol: symbol
      };
      stocks.push(stockInfo);
    };
    var checkIfOwnded = function (symbol) {
      var bRepeat  = false;
      stocks.forEach( function (stock) {
        if(stock.symbol === symbol) {
          bRepeat = true;
        }
      });
      return bRepeat;
    };
    var updateStock = function (name, quantity, amount) {
      for (var i = 0; i < stocks.length; i++) {
        if(stocks[i].company == name) {
          if(parseInt(stocks[i].quantity) + Number(quantity) >= 0) {
            stocks[i].quantity = parseInt(stocks[i].quantity) + Number(quantity);
            stocks[i].pricePaid = Number(stocks[i].pricePaid) + Number(amount);
            if(stocks[i].quantity == 0) {
              stocks.splice(i--, 1);
            }
          } else {
              return "You don't have that amount of stocks to sell!";
            }
        }
      };
    };

    // Public API here
    return {
      newStock: function (name, quantity, total, symbol) {
        addStock(name, quantity, total, symbol);
      },
      updateStock: function (stock, quantity, amount) {
        updateStock(stock, quantity, amount);
      }, 
      bAlreadyPurchased: function (symbol) {
        return checkIfOwnded(symbol);
      }, 
      getStock: function () {
        return stocks;
      }
    };
  });
