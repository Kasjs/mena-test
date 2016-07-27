angular.module('rss_test',['add_ctrl','add_service','ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
                url : '/home',
                templateUrl : 'partials/home.html',
                controller : 'MainCtrl'
            })
            .state('add',{
                url:'/add',
                templateUrl : 'partials/add.html',
                controller : 'AddCtrl'
            })
    })
    .controller('MainCtrl',['add_feed_service','$scope',function($scope,add_feed_service){
       //$scope.feeds = [{'feed':'sport',"rating": 1},{'feed':'news',"rating": 4},{'feed':'music',"rating": 2}];
        //$scope.groups = [{item : 'Sport'},{item:'IT'},{item : 'Music'}];
        //console.log($scope.groups);


    }]);