var expressAngular = angular.module('expressAngular', []);

function mainController($scope, $http) {
	$scope.loading = false;
	$scope.status = "";
	
	// send form data
	$scope.contactSend = function() {
		$scope.loading = true;
		$http.post('/api/contact', {form_data:this.data}).
		success(function(data, status, headers, config) {
			$scope.loading = false;	
			$scope.status = data.status;
			$scope.status_class = "bg-info";
		}).
		error(function(data, status, headers, config) {
		    $scope.loading = false;
		    $scope.status = "Error";
		    $scope.status_class = "bg-danger";
		});
	};

}
