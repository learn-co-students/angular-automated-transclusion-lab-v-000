function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div ng-transclude>',
				'<h3>User Profile</h3>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);