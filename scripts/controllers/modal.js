angular.module("userEditorApp")
	.controller('modalCtrl', function($scope, dataService){

	//elmenti a usert / létrehozza az új usert
		$scope.saveUser = function(formUser) {
			if ($scope.selectedUserIndex == "-1") {
				//create user
				dataService.createUser(formUser).then(function (response){
					if (response.data) {
						$scope.users.unshift(response.data);
						console.log("Sikeresen hozzáadtuk az új felhasználót: " + response.data.name + "(" + response.data.id + ")");
					}
					else { console.log("Hiba történt! A felhaszáló létrehozása sikertelen.")};
				});
			} else {
				//update user
				dataService.updateUser($scope.formUser).then(function (response){
					if (response.data) {
						angular.copy(response.data, $scope.users[$scope.selectedUserIndex]);
						console.log("Sikeresen módosítottuk a felhasználó adatait:" + response.data.name);
					}
					else { console.log("Hiba történt! Az adatok módosítása sikertelen.")};
				});
			}
			$('#userEditorModal').modal("hide");
		}

		$scope.deleteUser = function(user) {
			dataService.deleteUser(user).then(function(response){
				if (response.status == 200) {
					$scope.users.splice($scope.selectedUserIndex, 1);
					console.log("Sikeres törlés!");
					$('#userEditorModal').modal("hide");
				}
				else { console.log("Hiba történt! A törlés sikertelen.")};
			});
		}

	})