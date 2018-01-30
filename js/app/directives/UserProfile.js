function UserProfile() {
	return {
		transclude: true,
    template: [
      '<div class="ourDirective">',
        'The content of our directive is: <span ng-transclude></span>',
      '</div>'
    ].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
