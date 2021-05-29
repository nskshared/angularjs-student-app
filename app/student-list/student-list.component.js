'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: ['Student',
      function PhoneListController(Student) {
        this.students = Student.query()
      }
    ]
  });
