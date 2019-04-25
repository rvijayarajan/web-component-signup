(function () {

 	var app = angular.module("wcSignup",[]);

	app.component("signup", {
		templateUrl: "signup.html",
		bindings: {
			onSubmit: '&'
		},
		controller: "SignupController"
	});

	app.controller("SignupController", SignupControllerFn);

	SignupControllerFn.$inject = ["$scope"];

	function SignupControllerFn($scope) {
		
		var vm = $scope.$ctrl;

		vm.submit = function() {
			vm.onSubmit({
				name: vm.name,
				email: vm.email,
				password: vm.password,
				agreed: vm.agreed
			});
		};
	}

})();
