function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile: </h3>',
				'<span ng-transclude></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
