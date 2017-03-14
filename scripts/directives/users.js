angular.module("userEditorApp")
	.directive("users", function() {
		return {
			templateUrl: "templates/users.html",
			controller: "mainCtrl"
		};
	})
	.directive("editorModal", function() {
		return {
			templateUrl: "templates/editorModal.html",
			controller: "modalCtrl"
		};
	});