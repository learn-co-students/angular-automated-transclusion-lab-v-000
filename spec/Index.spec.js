var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should use transclusion', function() {
		var directive = element.all(by.css('[ng-transclude]'));
		debugger
		expect(directive.get(0).getText()).toContain('Bill Gates');
	})
});
