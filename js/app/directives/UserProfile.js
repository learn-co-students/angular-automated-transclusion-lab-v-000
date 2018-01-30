function UserProfile() {
	return {
    transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
        '<h4 ng-transclude></h4>',
        '<h6 ng-transclude></h6>',
			'</div>'
		].join('')
	};
}

angular
	.module('app')
	.directive('userProfile', UserProfile);