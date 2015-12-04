var renwu=new Array();

angular.module('content.controllers', ['ngResource'])

.controller('renwu', function($scope,$resource) {
    //console.log(111111111111111111111111);
   // console.log(user._id);
    $scope.user=user;
    var obj = $resource('http://192.168.1.124/rwgl/renwu',

      {userId:'@userId'},{renwu:{method: 'POST', isArray: false}});
    //$scope.data=

    obj.renwu({userId:user._id},function(data){
      //  console.log(data.error);
      //console.log(data.list);

     // var renwu=new Array();
      if(data.error==null)
      {
        //$scope.user=data.list;
       // $state.go('app.playlists');
       /* $scope.playlists = [
          { title: '测试1', id: 1 },
          { title: '测试2', id: 2 },
          { title: '测试3', id: 3 },
          { title: '测试4', id: 4 },
          { title: '测试5', id: 5 },
          { title: '测试6', id: 6 }
        ];*/

        data.list.forEach(function(v)
        {
          renwu.push(v);
        });
        $scope.renwu=renwu;
      }
      else
      {
       // $scope.error=data.error;
        $scope.renwu = [
          { title: '获取信息失败', id: 1 }
        ];
       // var mes= { title: '获取信息时报', id: 1 };
       // renwu.push({ title: '获取信息时报', id: 1 });
      }
      //$scope.playlists =renwu;

    });




})

.controller('grxx', function($scope, $stateParams) {
    $scope.user=user;
})
  .controller('grewm', function($scope, $stateParams) {
    //var str = "钓鱼岛是中国的！";
    //$('#code').qrcode(str);
   // $ionicView.loaded=aa();
    console.log(user);
    var ewm=user;
    delete ewm.password;
    delete ewm.userName;
    console.log(JSON.stringify(ewm));
  //  $scope.ewm=ewm;
    $scope.$on('$ionicView.loaded',  test(JSON.stringify(ewm)));


  })
  .controller('gsygxx', function($scope, $stateParams,$resource) {
   // $scope.gsyg=[user];
    var gsyg=new Array();
    var obj = $resource('http://192.168.1.124/rwgl/gsyg',
      {userId:'@userId'},{gsyg:{method: 'POST', isArray: false}});
    obj.gsyg({userId:user._id},function(data){
      //console.log(data.list);
      if(data.error==null)
      {
        data.list.forEach(function(v)
        {
          gsyg.push(v);
        });
        $scope.gsyg=gsyg;


      }
      else
      {
        // $scope.error=data.error;
        $scope.gsyg = [
          { name: '获取信息失败', id: 1 }
        ];

      }

    })

  })
.controller('renwuxq', function($scope, $stateParams) {
  //console.log("rwid:"+$stateParams.rwId);

    renwu.forEach(function(v){
     // console.log(v);
      if(v._id==$stateParams.rwId){
        $scope.rw=v;
        //console.log(v);
      }
    })


});
