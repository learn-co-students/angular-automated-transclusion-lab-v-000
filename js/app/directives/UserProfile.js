function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div class="userProfile">',
				'<span ng-transclude><h3>User Profile</h3></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
