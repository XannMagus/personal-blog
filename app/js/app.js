'use strict';

// Declare app level module which depends on views, and components
angular.module('blog', [
  'ngRoute',
  'blog.read',
  'blog.index',
  'hc.marked'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/read/le-feminisme-et-moi-1'});
}]);
