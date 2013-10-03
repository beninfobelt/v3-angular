'use strict';

var app = angular.module('myapp');

app.controller('projectDetailCtrl', ['$scope',
        function ($scope) {

          // data
          $scope.head = {
              a: "File Name",
              b: "Size",
              c: "Type",
              d: "Status"
          };

          $scope.body = [{
              a: "2394820",
              b: "55KB",
              c: "PDF",
              d: "HOLD"
          }, {
              a: "2384023",
              b: "83KB",
              c: "PDF",
              d: ""
          }, {
              a: "30293849",
              b: "13KB",
              c: "PDF",
              d: "DESTROY"
          }, {
              a: "2394820",
              b: "47KB",
              c: "PDF",
              d: "HOLD"
          }, {
              a: "2384023",
              b: "34KB",
              c: "PDF",
              d: ""
          }, {
              a: "30293849",
              b: "13KB",
              c: "PDF",
              d: "DESTROY"
          }, {
              a: "2394820",
              b: "47KB",
              c: "PDF",
              d: "HOLD"
          }, {
              a: "2384023",
              b: "34KB",
              c: "PDF",
              d: ""
          }];
          
          $scope.sort = {
              column: 'b',
              descending: false
          };

/*
          $scope.selectedCls = function(column) {
              return column == scope.sort.column && 'sort-' + scope.sort.descending;
          };
          
          $scope.changeSorting = function(column) {
              var sort = scope.sort;
              if (sort.column == column) {
                  sort.descending = !sort.descending;
              } else {
                  sort.column = column;
                  sort.descending = false;
              }
          };*/
          

  }]);