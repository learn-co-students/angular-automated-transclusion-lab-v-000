function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<strong ng-transclude>User Profile</h2>',
			'</strong>'
		].join('')
	};
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
