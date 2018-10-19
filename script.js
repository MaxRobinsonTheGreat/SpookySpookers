/**
 * 1. We have added a directive with the name 'avatar' and handler of
 * avatarDirective to our angular app module
 */

angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
  
    $scope.spookers = spookers;
    
    $scope.selected_right = spookers[0];
    $scope.selected_left = spookers[1];
    
    $scope.select = function(spooker) {
      if(!$scope.selected_left){
        $scope.selected_left = spooker;
      }
      else if(!$scope.selected_right && $scope.selected_left != spooker){
        $scope.selected_right = spooker;
      }
    }
    
    $scope.getImageSrc = function(spooker){
      if(spooker)
        return spooker.imgsrc;
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVt4oTRlwPU_uBh4tcZ3vJDFg94ciR9T5f2H4CDnCLqCixxw6"
    }
    
    $scope.getWinner = function(){
      var right = $scope.selected_right;
      var left = $scope.selected_left;
      if(right && left){
        var right_h = right.health - left.power;
        var left_h = left.health - right.power;
        if(right_h > left_h){
          return right.name + " wins!";
        }
        else if(right_h < left_h){
          return left.name + " wins!";
        }
        else{
          return "Its a tie!";
        }
      }
      return "Select a spooker!";
    }
    
}