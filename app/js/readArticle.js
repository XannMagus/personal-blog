/**
 * Created by Xan on 03/12/2015.
 */

'use strict';

angular.module('blog.read', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/read/:slug', {
        templateUrl: 'partials/read.html',
        controller: 'readCtrl'
    })
}])

.controller('readCtrl', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams){
    var articleResource = $resource('articles/:slug.json', {}, {
        query: {method:'GET', params:{slug:'le-feminisme-et-moi-1'}, isArray:false}
    });

    $scope.article = articleResource.get({slug: $routeParams.slug});
}])
;


