function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div class="userProfile">',
				'<h3><span ng-transclude></span></h3>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
