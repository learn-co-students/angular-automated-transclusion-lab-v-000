function UserProfile() {
	return {
		template: [
			'<div>',
				'<h3>User Profile</h3>',
        '<div ng-transclude></div>',
			'</div>'
		].join(''),
    transclude: true
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);