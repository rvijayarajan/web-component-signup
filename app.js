(function () {

 	var app = angular.module("main",['wcSignup']);

	app.component("app", {
		template: '<div class="row"> '+
						'<div class="col-sm-4"> '+
							'<signup></signup>'+
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
		
		
	}

})();
