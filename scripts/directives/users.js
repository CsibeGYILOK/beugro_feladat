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
	})
	.directive('uniqueUserName', function() {
	  return {
	    require: 'ngModel',
	    link: function(scope, element, attr, mCtrl) {
	      function uniqueNameCheck(value) {
	      	var alreadyExists = false;
	      	for (var i = 0; i < scope.users.length; i++) {
	        	if (scope.users[i].name === value && scope.users[i].id !== scope.formUser.id) {
	        		alreadyExists = true;
	        		break;
	        	}
	      	}
	      	if (!alreadyExists) {
	          mCtrl.$setValidity('unique', true);
	        } else {
	          mCtrl.$setValidity('unique', false);
	        }
	        return value;
	      }
	      mCtrl.$parsers.push(uniqueNameCheck);
	    }
	  };
	});