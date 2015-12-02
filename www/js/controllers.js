angular.module('content.controllers', ['ngResource'])

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '测试1', id: 1 },
    { title: '测试2', id: 2 },
    { title: '测试3', id: 3 },
    { title: '测试4', id: 4 },
    { title: '测试5', id: 5 },
    { title: '测试6', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
