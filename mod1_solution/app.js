(function(){
'use strict';

angular.module("LunchCheck", [])

.controller("LunchCheckController", Func);

Func.$inject = ['$scope'];

function Func($scope){
  $scope.Text = "";
  $scope.Message = "";
  $scope.CheckIfTooMuch = function(){
    var text = $scope.Text;
    var arrStr = text.split(",");
    if (text.length == 0){
        $scope.Message = "Please enter data first";
    }
    else{
      if (arrStr.length < 4) {
         $scope.Message = "Enjoy!";
      }
      else{
          $scope.Message = "Too much!";
      }
    }

  };
};

})();
