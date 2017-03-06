angular.module("userEditorApp")
	.controller('mainCtrl', function($scope, dataService){

		//szerkesztő modal betöltése a választott userrel / új üres userrel
		$scope.editUser = function(user) {
			if (user) {
				$scope.selectedUser = user;
				$scope.formUser = angular.copy($scope.selectedUser);
			} else {
				$scope.selectedUser = "";
				$scope.formUser = {name: "", username: "", email: ""};
			}
			$('#userEditorModal').modal("show");
		};

		//elmenti a usert / létrehozza az új usert
		$scope.saveUser = function(formUser) {
			if ($scope.selectedUser == "") {
				//create user
				dataService.createUser(formUser);
				$scope.users.unshift(formUser);//.push(formUser);
				console.log("Új felhasználó hozzáadva a listához");
			} else {
				angular.copy(formUser, $scope.selectedUser);
				//update user
				dataService.updateUser($scope.selectedUser)
				console.log("A felhasználó módosítva a listában");
			}
			$('#userEditorModal').modal("hide");
		}

		$scope.deleteUser = function(user) {
			dataService.deleteUser(user);
			var index = $scope.users.indexOf(user);
			$scope.users.splice(index, 1);
			$('#userEditorModal').modal("hide");
		}

		dataService.getUsers( function(response){
			console.log(response.data);
			$scope.users = response.data;
		});
	})