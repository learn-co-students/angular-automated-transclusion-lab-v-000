function UserProfile() {
	return {
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span ng-transclude></span>',
			'</div>'
		].join(''),
		transclude: true,
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
