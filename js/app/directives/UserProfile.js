function UserProfile() {
	return {
		transclude: true,
		template: '<div ng-transclude></div>'
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);