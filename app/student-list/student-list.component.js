'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: ['$scope', '$location', 'Student',
      function PhoneListController($scope, $location, Student) {
        this.students = Student.query()
        $scope.selectedStudentId = undefined;
        $scope.checkbox_status = false;
        $scope.checkboxes = [false, false, false]
        $scope.selectStudent = function(student) {
          $scope.selectedStudentId = student.studentId;
          console.log("student is ", $scope.selectedStudentId)
          console.log("checkbox_status is ", $scope.checkbox_status)
          // $scope.apply();
        }

        $scope.submitSelection = function() {
          console.log('submitSelection')
          $location.path("students/" + $scope.selectedStudentId)
        }

        $scope.anySelected = function() {
          return $scope.checkboxes.some(c => c);
        }
      }
    ]
  });
