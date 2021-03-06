(function () {

 	var app = angular.module("main",['wcSignup']);

	app.component("app", {
		template: '<div class="container">'+
					'<div class="row"> '+
						'<div class="col-12 col-md-4 offset-sm-4"> '+
							'<signup on-submit="onSubmit(name,email,password,agreed)"></signup>'+
						'</div>'+
					'</div>'+
				  '</div>',
		controllerAs: "cntl",
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {
		
		$scope.onSubmit = function(name,email,password,agreed) {
		}
	}

})();
