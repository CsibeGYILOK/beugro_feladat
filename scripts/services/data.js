angular.module("userEditorApp")
	.service('dataService', function($http){

		this.getUsers = function(usersList) { 
			return $http.get("https://jsonplaceholder.typicode.com/users")
				.then(usersList);
		};

		this.createUser = function(user) {
			return $http.post("http://jsonplaceholder.typicode.com/posts", JSON.stringify(user))
				.then(function (response) {
					return response;
				}, function() {return "";});
		};

		this.updateUser = function(user) {
			return $http.put("http://jsonplaceholder.typicode.com/posts/1", JSON.stringify(user))
				.then( function (response) {
					response.data.id = user.id; //kiküszöböli, hogy a service mindig 1-es id-t ad vissza
					return response;
				}, function() {return "";});
		};	

		this.deleteUser = function(user) {
			return $http.delete("http://jsonplaceholder.typicode.com/posts/1", JSON.stringify(user))
				.then( function (response) {
					return response;
				}, function() {return "";});

		};

	});
