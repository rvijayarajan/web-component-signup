angular.module('wcSignupTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('signup.html',
    "<div class=\"card\">\r" +
    "\n" +
    "  <div class=\"card-body\">\r" +
    "\n" +
    "    <form>\r" +
    "\n" +
    "    	<div class=\"form-group row\">\r" +
    "\n" +
    "    		<label for=\"userName\" class=\"d-none col-md-4 d-md-block col-form-label\">Name</label>\r" +
    "\n" +
    "		    <div class=\"input-group mb-3 col-12 col-md-8\">\r" +
    "\n" +
    "			  <div class=\"input-group-prepend\">\r" +
    "\n" +
    "			    <i class=\"ion-md-person input-group-text\"></i>\r" +
    "\n" +
    "			  </div>\r" +
    "\n" +
    "			  <input type=\"text\" class=\"form-control\" id=\"userName\" placeholder=\"Name\" ng-model=\"$ctrl.name\">\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "    	</div>\r" +
    "\n" +
    "    	<div class=\"form-group row\">\r" +
    "\n" +
    "    		<label for=\"userEmail\" class=\"d-none col-md-4 d-md-block col-form-label\">Email</label>\r" +
    "\n" +
    "		    <div class=\"input-group mb-3 col-12 col-md-8\">\r" +
    "\n" +
    "			  <div class=\"input-group-prepend\">\r" +
    "\n" +
    "			    <i class=\"ion-md-mail input-group-text\"></i>\r" +
    "\n" +
    "			  </div>\r" +
    "\n" +
    "			  <input type=\"email\" class=\"form-control\" id=\"userEmail\" placeholder=\"Email\" ng-model=\"$ctrl.email\">\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "    	</div>\r" +
    "\n" +
    "    	<div class=\"form-group row\">\r" +
    "\n" +
    "    		<label for=\"userPassword\" class=\"d-none col-md-4 d-md-block col-form-label\">Password</label>\r" +
    "\n" +
    "		    <div class=\"input-group mb-3 col-12 col-md-8\">\r" +
    "\n" +
    "			  <div class=\"input-group-prepend\">\r" +
    "\n" +
    "			    <i class=\"ion-md-lock input-group-text\"></i>\r" +
    "\n" +
    "			  </div>\r" +
    "\n" +
    "			  <input type=\"password\" class=\"form-control\" id=\"userPassword\" placeholder=\"Password\" ng-model=\"$ctrl.password\">\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "    	</div>\r" +
    "\n" +
    "    	<div class=\"form-group row justify-content-md-center justify-content-start\">\r" +
    "\n" +
    "		    <div class=\"col-4\">\r" +
    "\n" +
    "		      <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"$ctrl.submit()\">Sign Up</button>\r" +
    "\n" +
    "		    </div>\r" +
    "\n" +
    "		    <div class=\"w-100\"></div>\r" +
    "\n" +
    "		    <div class=\"col-12 col-md-9 custom-control custom-checkbox text-center\">\r" +
    "\n" +
    "			  <input type=\"checkbox\" class=\"custom-control-input\" id=\"terms\" ng-model=\"$ctrl.agreed\">\r" +
    "\n" +
    "			  <label class=\"custom-control-label\" for=\"terms\">I agree to the terms and conditions.</label>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		  </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

}]);

(function () {

 	var app = angular.module("wcSignup",["wcSignupTemplates"]);

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
