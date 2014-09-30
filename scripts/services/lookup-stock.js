'use strict';

/**
 * @ngdoc service
 * @name marketApp.lookupStock
 * @description
 * # lookupStock
 * Factory in the marketApp.
 */
angular.module('marketApp')
  .factory('LookupStock', ['$http', function ($http) {
    var url = 'http://data.benzinga.com/stock/';
    var stockData = {};

    stockData.searchSymbol = function (symbol) {
      return $http.get(url + symbol);
    };
    // Public API here
    return stockData;
  }]);
