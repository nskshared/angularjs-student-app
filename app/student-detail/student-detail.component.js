'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', '$scope', 'Student',
      function PhoneDetailController($routeParams, $scope, Student) {
        var self = this;
        $scope.updatedStudent = {};
        self.student = Student.get({studentId: $routeParams.studentId}, function(student) {
          
        });

        $scope.reset = function(student) {
          $scope.updatedStudent = {};
        };

        $scope.update = function(student) {
          $scope.updatedStudent = angular.copy(student);
        };
      }
    ]
  });
