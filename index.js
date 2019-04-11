(function () {

 	var app = angular.module("wcSignup",[]);

	app.component("signup", {
		templateUrl: "signup.html",
		controllerAs: "cntl",
		bindings: {

		},
		controller: "SignupController"
	});

	app.controller("SignupController", SignupControllerFn);

	SignupControllerFn.$inject = ["$scope"];

	function SignupControllerFn($scope) {
	}

})();
