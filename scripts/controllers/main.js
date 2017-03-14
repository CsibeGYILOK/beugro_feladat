angular.module("userEditorApp")
	.controller('mainCtrl', function($scope, dataService){
		
		dataService.getUsers( function(response){
			console.log(response.data);
			$scope.users = response.data;
		});

		//szerkesztő modal betöltése a választott userrel / új üres userrel
		$scope.editUser = function(user, index) {
			if (user) {
				$scope.selectedUserIndex = index;
				$scope.formUser = angular.copy(user);
			} else {
				$scope.selectedUserIndex = "-1";
				$scope.formUser = {name: "Maci Laci", username: "macilaci", email: "macilaci@maci.hu"};
			}
			$('#userEditorModal').modal("show");
		};

		$scope.refreshUserList = function() {
			dataService.getUsers().then( function(response){
				var data = response.data;
				var users = $scope.users;

				for(var i=0; i<data.length; ++i) {
			        var exists = false;
			        for(var j=0; j<users.length; ++j) {
			            //console.log(data[i].id +" - " + users[j].id)
			            if(data[i].id == users[j].id) {
			                exists = true;
			                users[j] = data[i];
			            	break;
			            }
			        }
			        if (!exists) {
				        $scope.users.push(data[i]);
			        }
			    }
			});
		};
	})