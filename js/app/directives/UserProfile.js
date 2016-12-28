function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3 ng-transclude>User Profile</h3>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
