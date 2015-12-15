/**
 * Created by Xan on 15/12/2015.
 */

'use strict';

describe('blog.index module', function () {

    beforeEach(module('blog.index'));

    describe('list controller', function () {
        var scope, $httpBackend, ctrl,
            articles = function () {
                return [
                    {title:'osef1', author:'toto', content:'TG'},
                    {title:'osef2', author:'toto2', content:'TG2'},
                    {title:'osef3', author:'toto3', content:'TG3'}
                ];
            };

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('articles/list.json').respond(articles());

            scope = $rootScope.$new();
            ctrl = $controller('listCtrl', {$scope: scope});
        }));

        it('should load latest articles', function () {
            $httpBackend.flush();

            expect(scope.articles.length).toBe(3);
        });

    });

});