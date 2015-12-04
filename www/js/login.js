angular.module('myApp.doLogin', ['ngResource'])

  .controller('doLogin', function($scope, $ionicModal, $timeout,$http,$resource,$state) {

    $scope.loginData = {};

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);
      var userName=$scope.loginData.userName;
      var password=$scope.loginData.password;
      console.log(userName+","+password);

     /* var obj=$resource('http://192.168.1.124/rwgl/login',{},{charge:{method: 'post', params: {charge: true}, isArray: true}});
      $scope.data=obj.save({userName:'wangx',password:"111111"});
      var dd=obj.save({userName:'wangx',password:"111111"});*/




      var obj = $resource('http://192.168.1.124/rwgl/login',

        {userName:'@userName',password:'@password'},{denglu:{method: 'POST', isArray: false}});
      //$scope.data=
      obj.denglu({userName:userName,password:password},function(data){
      //  console.log(data.error);
      //  console.log(data.list._id);

        if(data.error==null)
        {
          $scope.user=data.list;
          user=data.list;
          $state.go('app.renwu');
        }
        else
        {
          $scope.error=data.error;
        }


      });
      //console.log($scope.data.isArray);
     // console.log($scope.data);
    //  var data=$scope.data;
     // console.log(data.error);
      //console.log(dd.error);
     // console.log("id:"+$scope.data._id);

     /* if($scope.data.error==null)
      {
       // alert(1);
       console.log($scope.data.error);
        console.log("data:"+JSON.stringify($scope.data.list));

        $state.go("app.playlists");

      }*/


    };
  });


