'use strict';

/**
 * @ngdoc function
 * @name marketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marketApp
 */
angular.module('marketApp')
  .controller('MainCtrl', function ($scope, MyStock, Stock, Wallet) {
  	var symbol = '';
    $scope.$watch(function () { 
    	return Stock.getStockName(); 
    }, function (newValue) {
        if (newValue) {
        	$scope.stockName = newValue;
        	$scope.stockBidPrice = Stock.getStockBuyPrice();
        	$scope.stockAskPrice = Stock.getStockBidPrice();
        	$scope.bShowError = Stock.getErrorMessage();        	
        	symbol = Stock.getSymbol();
     	}
    });
    $scope.$watch(function () { 
    	return MyStock.bAlreadyPurchased(symbol); 
    }, function (newValue) {
        if (newValue) {
        	$scope.bHasStock = newValue;
     	}
    });
    $scope.buyStock = function() {
    	var total =  $scope.stock.quantity * $scope.stockAskPrice;
    	var newTotal = Wallet.setAmount(total);
    	if(newTotal) {
    		if(MyStock.bAlreadyPurchased(symbol)) {
    			MyStock.updateStock($scope.stockName, $scope.stock.quantity, total);
    		} else {
    			MyStock.newStock($scope.stockName, $scope.stock.quantity, total, symbol);
    		}
    		
    	}
    	$scope.stock.quantity = "";
    };
    $scope.sellStock = function() {
    	var total = $scope.stock.quantity * $scope.stockBidPrice;
    	MyStock.updateStock($scope.stockName, -$scope.stock.quantity, -total);
    	$scope.stock.quantity = "";
    };
  });
