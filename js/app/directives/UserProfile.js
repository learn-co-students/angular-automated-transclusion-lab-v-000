function UserProfile() {
	return {
    transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
        '<p ng-transclude>User Profile<p>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);