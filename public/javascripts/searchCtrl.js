app.controller("searchCtrl", function($scope,$http) 
{   

    $http.get("/mteacher")
      .success(function(response) 
        {$scope.names = response;
    $scope.test="";
    $scope.myVar=true;
    $scope.fun=function()
    {
      if($scope.test)
        $scope.myVar=false;
      else
        $scope.myVar=true;
    };
 });
});    