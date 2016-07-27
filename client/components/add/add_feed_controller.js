angular.module('add_ctrl',[])
    .controller('AddCtrl',['add_feed_service','$scope',function($scope,add_feed_service){
        $scope.feeds = [];
        $scope.addFeed = function(){
            $scope.feed = {
                url : $scope.url,
                description : $scope.description
            };
            $scope.feeds.push($scope.feed);
            console.log($scope.feeds);
        };

    }]);
