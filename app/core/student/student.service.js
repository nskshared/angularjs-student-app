'use strict';

angular.
  module('core.student').
  factory('Student', ['$resource',
    function($resource) {
      return $resource('data/:studentId.json', {}, {
        query: {
          method: 'GET',
          params: {studentId: 'students'},
          isArray: true
        }
      });
    }
  ]);
