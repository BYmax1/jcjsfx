app.controller("checkCtrl", function($scope,$http) 
{   

    $http.get("/cache")
      .success(function(response) 
        {$scope.checkList = response;
        angular.forEach($scope.checkList, function(x) {
            x.flag=false;
            //console.log($scope.checkList[0].flag);
        });     
    $scope.approve=function()
    {
        if(confirm('确定通过审核?')==false)return false;
        var oldList=$scope.checkList;
        var approvedList=[];
        $scope.checkList=[];
        angular.forEach(oldList, function(x) {
            if(!x.flag)
            {
              $scope.checkList.push(x);
            }
            else
            {
               approvedList.push(x);
            }
        }); 
       // console.log(approvedList[0].teachername+" "+approvedList[0].schoolname);

        $http.post("./cache",{checkList:approvedList}).success(function()
        {
           console.log("123");
        })           
        $http.post("./mteacher",{checkList:approvedList}).success(function()
        {
           console.log("123");
        })
           
        
    };
    $scope.disapprove=function()
    {
        if(confirm('确定删除?')==false)return false;
        var oldList=$scope.checkList;
        var disapprovedList=[];
        $scope.checkList=[];
        angular.forEach(oldList, function(x) {
            if(!x.flag)
            {
              $scope.checkList.push(x);
            }
            else
            {
               disapprovedList.push(x);
            }
        }); 
       // console.log(approvedList[0].teachername+" "+approvedList[0].schoolname);

        $http.post("./cache",{checkList:disapprovedList}).success(function()
        {
           console.log("123");
        })           
    }
 });
});    