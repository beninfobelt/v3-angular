'use strict';

var app = angular.module('myapp');

app.controller('projectsCtrl', ['$scope', 'Reddit',
        function ($scope, Reddit) {

    $scope.reddit = new Reddit();

	$scope.projectList = [
		{
			name: "Fixed Income",
			serialNumber: "82930048327"
		}, {
			name: "Student Loan",
			serialNumber: "82930048327"
		}, {
			name: "Mortgage",
			serialNumber: "82930048327"
		}, {
			name: "Human Resources",
			serialNumber: "82930048327"
		}, {
			name: "Estate Planning",
			serialNumber: "82930048327"
		}, {
			name: "Account Agreement",
			serialNumber: "82930048327"
		}, {
			name: "Bank Examination",
			serialNumber: "82930048327"
		}, {
			name: "Foreign Transaction Fees",
			serialNumber: "82930048327"
		}, {
			name: "Payday Loans",
			serialNumber: "82930048327"
		}, {
			name: "Money Market Fund",
			serialNumber: "82930048327"
		}, {
			name: "Home Equity Loan",
			serialNumber: "82930048327"
		}, {
			name: "Uncollected Funds",
			serialNumber: "82930048327"
		}, {
			name: "National Bank Examiner",
			serialNumber: "82930048327"
		}, {
			name: "Account History",
			serialNumber: "82930048327"
		}, {
			name: "Revolving Credit",
			serialNumber: "82930048327"
		}, {
			name: "Credit Application",
			serialNumber: "82930048327"
		}, {
			name: "Canceled Checks",
			serialNumber: "82930048327"
		}, {
			name: "Federal Reserve System",
			serialNumber: "82930048327"
		}, {
			name: "Loan Contract",
			serialNumber: "82930048327"
		}
	];

    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
		for(var i = 1; i <= 8; i++) {
		  $scope.images.push(last + i);
		}
	};
	
  }]);

