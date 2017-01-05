function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<ul ng-transclude></ul>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
