'use strict';

angular.
  module('studentsApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/students', {
          template: '<student-list></student-list>'
        }).
        when('/students/:studentId', {
          template: '<student-detail></student-detail>'
        }).
        otherwise('/students');
    }
  ]);
