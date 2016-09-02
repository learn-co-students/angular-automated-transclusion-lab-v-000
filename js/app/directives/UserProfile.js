function UserProfile() {
	return {
		transclude: true,
    template: [
      //at each <user-profile> element this template is inserted
			'<div>',
				'<h3>User Profile</h3>',
        //use ng-transclude to insert the existing HTML
        '<span ng-transclude></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);