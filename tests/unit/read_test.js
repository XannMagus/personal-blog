/**
 * Created by Xan on 06/12/2015.
 */

'use strict';

// jasmine specs for controllers go here
describe('blog.read module', function () {

    beforeEach(module('blog.read'));

    describe('read controller', function () {
        var scope, $httpBackend, ctrl,
            testArticleData = function() {
                return {
                    author: 'Test Author',
                    title: 'Test Title',
                    content: 'Test content'
                };
            };

        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('articles/test.json').respond(testArticleData());

            $routeParams.slug = 'test';
            scope = $rootScope.$new();
            ctrl = $controller('readCtrl', {$scope: scope});
        }));

        it('should load an article', function () {
            $httpBackend.flush();

            expect(scope.article.title).toBe('Test Title');
            expect(scope.article.author).toBe('Test Author');
            expect(scope.article.content).toBe('Test content');
        });
    });
});