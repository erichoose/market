'use strict';

/**
 * @ngdoc function
 * @name marketApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the marketApp
 */
angular.module('marketApp')
  .controller('PortfolioCtrl', function ($scope, MyStock, Stock, LookupStock, Wallet) {
    $scope.$watch(function () { 
    	return Wallet.getAmount(); 
    }, function (newValue) {
        if (newValue) {        	
        	$scope.currentMoney = newValue;
     	}
    });
    $scope.$watch(function () { 
    	return MyStock.getStock(); 
    }, function (newValue) {
        if (newValue) {
        	$scope.stocks = newValue;
     	}
    });

    $scope.loadStock = function (symbol) {
    	var stock = LookupStock.searchSymbol(symbol)
    	.success(function (data) {
            if(!data.status) {
				Stock.setStockName(data.name);
				Stock.setStockBuyPrice(data.ask);
				Stock.setStockBidPrice(data.bid);  
				Stock.setErrorMessage('false');   			
			}
        });
    };
  });