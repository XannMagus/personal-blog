'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('My blog', function() {

    describe('Read article view', function() {
        beforeEach(function () {
            browser.get('#/read/le-feminisme-et-moi-1');
        });

        it('should display Le feminisme et moi article', function() {
            expect(element(by.binding('article.title')).getText()).toBe('Le féminisme et moi');
        });
    });

    it('should automatically redirect to /read/le-feminisme-et-moi-1 when location hash/fragment is empty', function() {
        browser.get('');
        expect(browser.getLocationAbsUrl()).toMatch("/read/le-feminisme-et-moi-1");
    });

});
