function UserProfile() {
	return {
		template: [

			'<div>',
      '<h4> ng-transclude',
      '</h4>',
      '<h6 ng-transclude>',
      '</h6>',
				'<h3>User Profile</h3>',
			'</div>'
		].join(''),
    transclude: true
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);