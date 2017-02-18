function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div class="UserProfile">',
				'<span ng-transclude></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
