'use strict';

/**
 * @ngdoc function
 * @name marketApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the marketApp
 */
angular.module('marketApp')
  .controller('HeaderCtrl', function ($scope, Stock, LookupStock) {
  	
  	$scope.stockName = '';
    $scope.searchSymbol = function() {   
    	var stock = LookupStock.searchSymbol($scope.stock.symbol)
    	.success(function (data) {
            if(!data.status) {
				Stock.setStockName(data.name);
				Stock.setStockBuyPrice(data.ask);
				Stock.setStockBidPrice(data.bid); 
				Stock.setSymbol(data.symbol); 
				Stock.setErrorMessage('false');   			
			} else {
				Stock.setStockName('  ');
				Stock.setErrorMessage('true'); 
			}
        });
		$scope.stock.symbol = '';
    };
  });
