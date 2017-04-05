function UserProfile() {
	return {
		template: [
			'<div>',
				'<h3 ng-transclude>User Profile</h3>',
			'</div>'
		].join(''),
    transclude: true,
	};
}

angular
	.module('app')
	.directive('userProfile', UserProfile);