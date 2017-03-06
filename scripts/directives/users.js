angular.module("userEditorApp")
	.directive("users", function() {
		return {
			templateUrl: "templates/users.html"
		};
	})
	.directive("editormodal", function() {
		return {
			templateUrl: "templates/editorModal.html"
		};
	});
