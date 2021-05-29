'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', 'Student',
      function PhoneDetailController($routeParams, Student) {
        var self = this;
        self.student = Student.get({studentId: $routeParams.studentId}, function(student) {
          
        });
      }
    ]
  });
