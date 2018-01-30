function UserProfile() {
	return {
    transclude: true,
		template: [
			'<div class="UserProfile">',
				'<h3>User Profile <span ng-transclude></span></h3>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);