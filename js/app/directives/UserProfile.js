function UserProfile() {
	return {
    transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
        '<span ng-transclude></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);


// In this repo we have a UserProfile 
// directive, and we're using it in index.html. 
// However, our user info is getting overridden 
// by the directive's template.
// Using your knowledge of transclusion, make our 
// information display properly in the directive!