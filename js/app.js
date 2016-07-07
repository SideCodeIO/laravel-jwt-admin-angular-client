var bookWishlistApp = angular.module('bookWishlistApp', [
  'ngRoute',
  'bookWishlistAppControllers'
]);

bookWishlistApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('bookWishlistApp')
    .setStorageType('localStorage');
});

bookWishlistApp.constant('urls', {
  // BASE: 'http://devtestco.nfcs.co.il/'
  // BASE: 'http://localhost:8000/'
  BASE: 'http://admin.dev/'


});

bookWishlistApp.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.
	when('/login', {
	    templateUrl: 'partials/login.html',
	    controller: 'LoginController'
	}).
	when('/signup', {
	    templateUrl: 'partials/signup.html',
	    controller: 'SignupController'
	}).
	when('/', {
	    templateUrl: 'partials/index.html',
	    controller: 'MainController'
	}).
	otherwise({
	    redirectTo: '/'
	});

}]);

bookWishlistApp.config(function(RestangularProvider) {
  // RestangularProvider.setBaseUrl('http://devtestco.nfcs.co.il/');
  // RestangularProvider.setBaseUrl('http://localhost:8000/');
  RestangularProvider.setBaseUrl('http://admin.dev/');

	// RestangularProvider.setResponseExtractor(function(response, operation) {
    //     return response.data;
    // });

});
