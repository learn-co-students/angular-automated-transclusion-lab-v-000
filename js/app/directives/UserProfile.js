function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile<span ng-transclude></span></h3>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);