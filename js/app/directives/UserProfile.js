angular
	.module('app')
	.directive('userProfile', UserProfile);
	
function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div class="details" ng-transclude></div>',
			'</div>'
		].join('')
	};
}

