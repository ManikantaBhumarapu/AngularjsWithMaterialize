app.controller('userslistController', function($scope, $routeParams, usersService){
	 $scope.userlistmessage = 'Users List Controller';
	 $scope.allUserslist =  usersService.allUsers();
	 

});
