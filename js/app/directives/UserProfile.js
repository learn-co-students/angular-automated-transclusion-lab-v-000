function UserProfile() {
	return {
		template: [
			'<div>',
				'<h3>User Profile: <span ng-transclude></span></h3>',
			'</div>'
		].join(''),
    transclude: true
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);