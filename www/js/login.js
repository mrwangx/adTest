angular.module('myApp.doLogin', ['ngResource'])

  .controller('doLogin', function($scope, $ionicModal, $timeout,$http,$resource,$state) {

    $scope.loginData = {};

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);
      var userName=$scope.loginData.userName;
      var password=$scope.loginData.password;
      console.log(userName+","+password);

      var obj=$resource('http://192.168.1.124/rwgl/login',{},{charge:{method: 'post', params: {charge: true}, isArray: false}});
      $scope.data=obj.charge({userName:'wangx',password:"111111"});
      console.log($scope.data);
      if($scope.data!=null)
      {
       // alert(1);
        $state.go("app.playlists");

      }


    };
  });


