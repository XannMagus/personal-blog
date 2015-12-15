/**
 * Created by Xan on 16/12/2015.
 */

'use strict';

angular.module('blog.index', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl'
    })
}])

.controller('listCtrl', ['$scope', '$resource', function ($scope, $resource) {
    var articleResource = $resource('articles/list.json');

    $scope.articles = articleResource.query();
}])
;