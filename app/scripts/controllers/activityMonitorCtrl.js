'use strict';

var app = angular.module('myapp');

app.controller('activityMonitorCtrl', ['$scope', 'Reddit',
        function ($scope, Reddit) {

    $scope.reddit = new Reddit();

	$scope.activityLogList = [
		{
			title: "Ingested 452 files...",
			body: "",
			projectName: "Fixed Income",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .pdf files...",
			body: "",
			projectName: "Student Loan",
			serialNumber: "82930048327"
		}, {
			title: "Ingested 7892 files...",
			body: "",
			projectName: "Mortgage",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .shx files...",
			body: "",
			projectName: "Human Resources",
			serialNumber: "82930048327"
		}, {
			title: "Created destruction set...",
			body: "",
			projectName: "Estate Planning",
			serialNumber: "82930048327"
		}, {
			title: "Created destruction set...",
			body: "",
			projectName: "Account Agreement",
			serialNumber: "82930048327"
		}, {
			title: "Created hold set...",
			body: "",
			projectName: "Bank Examination",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .doc files...",
			body: "",
			projectName: "Foreign Transaction Fees",
			serialNumber: "82930048327"
		}, {
			title: "Completed destruction set...",
			body: "",
			projectName: "Payday Loans",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .png files...",
			body: "",
			projectName: "Money Market Fund",
			serialNumber: "82930048327"
		}, {
			title: "Ingested 3044 files...",
			body: "",
			projectName: "Home Equity Loan",
			serialNumber: "82930048327"
		}, {
			title: "Ingested 452 files...",
			body: "",
			projectName: "Uncollected Funds",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .pdf files...",
			body: "",
			projectName: "National Bank Examiner",
			serialNumber: "82930048327"
		}, {
			title: "Ingested 7892 files...",
			body: "",
			projectName: "Account History",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .shx files...",
			body: "",
			projectName: "Revolving Credit",
			serialNumber: "82930048327"
		}, {
			title: "Created destruction set...",
			body: "",
			projectName: "Credit Application",
			serialNumber: "82930048327"
		}, {
			title: "Created destruction set...",
			body: "",
			projectName: "Canceled Checks",
			serialNumber: "82930048327"
		}, {
			title: "Created hold set...",
			body: "",
			projectName: "Federal Reserve System...",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .pdf files...",
			body: "",
			projectName: "Loan Contract",
			serialNumber: "82930048327"
		}, {
			title: "Ingested 7892 files...",
			body: "",
			projectName: "Account History",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .shx files...",
			body: "",
			projectName: "Revolving Credit",
			serialNumber: "82930048327"
		}, {
			title: "Created destruction set...",
			body: "",
			projectName: "Credit Application",
			serialNumber: "82930048327"
		}, {
			title: "Created destruction set...",
			body: "",
			projectName: "Canceled Checks",
			serialNumber: "82930048327"
		}, {
			title: "Created hold set...",
			body: "",
			projectName: "Federal Reserve System...",
			serialNumber: "82930048327"
		}, {
			title: "Searched for .pdf files...",
			body: "",
			projectName: "Loan Contract",
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

