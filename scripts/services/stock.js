'use strict';

/**
 * @ngdoc service
 * @name marketApp.Stock
 * @description
 * # Stock
 * Factory in the marketApp.
 */
angular.module('marketApp')
  .factory('Stock', function () {
    // Service logic
    // ...

    var stock = {
      name: '',
      buyPrice: '',
      bidPrice: '',
      symbol: ''
    };
    var showError = false;
    // Public API here
    return {
      getStockName: function () {
        return stock.name;
      },
      getStockBuyPrice: function () {
        return stock.buyPrice;
      },
      getStockBidPrice: function () {
        return stock.bidPrice;
      },
      getSymbol: function () {
        return stock.symbol;
      },
      setStockName: function (name) {
        stock.name = name;
      },
      setStockBuyPrice: function (price) {
        stock.buyPrice = price;
      },
      setStockBidPrice: function (price) {
        stock.bidPrice = price;
      },
      setSymbol: function (symbol) {
        stock.symbol = symbol;
      },
      getErrorMessage: function () {
        return showError;
      },
      setErrorMessage: function (bShowMessage) {
        showError = bShowMessage;
      }
    };
  });
