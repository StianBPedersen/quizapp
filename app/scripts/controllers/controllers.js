angular.module('quizApp.controllers', [])
	.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		$scope.counter = 12;
		$scope.percent = 100;
		$scope.points = 10000;

		var percentDecline = ($scope.percent / $scope.counter) / 10;
		var pointsDecline = ($scope.points / $scope.counter) / 10;
		
		$scope.onTimeOut = function() {
			$scope.counter -= 0.10;
			$scope.percent -= percentDecline;
			$scope.points -= pointsDecline;
			
			if($scope.counter > 0.10) {
				timeout = $timeout($scope.onTimeOut,100);
			}
		};

		var timeout = $timeout($scope.onTimeOut, 100);

		$scope.answerGiven = function() {
			console.warn($scope.counter + "\n" + $scope.percent + "\n" + $scope.points);
			$timeout.cancel(timeout);
		};

	}]);