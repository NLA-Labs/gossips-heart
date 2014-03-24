
var GossipsMain = angular.module('GossipsMain', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when submitting the add form, send the text to the node API
	$scope.getAllGossips = function() {
		$http.get('/gossip')
		.success(function(data) {
			$scope.gossips = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	$scope.getAllGossips();

	// when submitting the add form, send the text to the node API
	$scope.createGossip = function() {
		$http.post('/gossip', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.getAllGossips();
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a gossip after checking it
	$scope.deleteGossip = function(id) {
		$http.delete('/gossip/' + id)
			.success(function(data) {
				$scope.getAllGossips();
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}