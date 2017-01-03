function UserProfile() {
	return {
    transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
        '<h5><span ng-transclude></span>',
        '</h5>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);