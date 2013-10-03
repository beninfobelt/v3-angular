'use strict';

var app = angular.module('myapp');

app.controller('projectsCtrl', ['$scope', 'Reddit',
        function ($scope, Reddit) {



  
    $scope.reddit = new Reddit();

	$scope.projectList = [
		'Fixed Income',
		'Student Loan',
		'Mortgage',
		'Human Resources',
		'Estate Planning',
		'Account Agreement',
		'Bank Examination',
		'Foreign Transaction Fees',
		'Payday Loans',
		'Money Market Fund',
		'Home Equity Loan',
		'Uncollected Funds',
		'National Bank Examiner',
		'Account History',
		'Revolving Credit',
		'Credit Application',
		'Canceled Checks',
		'Federal Reserve System',
		'Loan Contract'
	];

    //watch out for duplicate data causing issues with the displaying

    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
		for(var i = 1; i <= 8; i++) {
		  $scope.images.push(last + i);
		}
	};


  }]);

