function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div class="userProfile">',
				'<h3>User Profile</h3>',
				'<span ng-transclude />',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
