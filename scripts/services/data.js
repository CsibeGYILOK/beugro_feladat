angular.module("userEditorApp")
	.service('dataService', function($http){
		
		this.getUsers = function(callback) { 
			$http.get("https://jsonplaceholder.typicode.com/users")
				.then(callback)
		};	

		this.createUser = function(user) {
			$http.post("http://jsonplaceholder.typicode.com/posts", JSON.stringify(user))
				.then(
					function (response) {
						if (response.data) {
							console.log("Új felhasználó sikeresen létrehozva: " + response.data.name);
							//Kérdés: itt mi a jobb, váratni a usert amíg visszajön a válasz?
						}
					});
		};

		this.updateUser = function(user) {
			$http.put("http://jsonplaceholder.typicode.com/posts/1", JSON.stringify(user))
				.then(
					function (response) {
						if (response.data) {
							console.log("Az adatok szerkesztése sikeres: " + response.data.name);
							//Kérdés: itt mi a jobb, váratni a usert amíg visszajön a válasz?
						}
					});
		};	

		this.deleteUser = function(user) {
			$http.delete("http://jsonplaceholder.typicode.com/posts/1", JSON.stringify(user))
				.then(
					function (response) {
						if (response.status == 200) {
							console.log("User törlése sikeres: " + user.name);
						}
					});
		};


	});
