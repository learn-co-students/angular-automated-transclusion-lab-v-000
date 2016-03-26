function UserProfile() {
  return {
    template: [
      '<div>',
        '<h3>User Profile</h3>',
        '<p ng-transclude></p>',
      '</div>'
    ].join(''),
    transclude: true
  }
}

angular
  .module('app')
  .directive('userProfile', UserProfile);
