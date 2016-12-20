app.controller('PostsCtrl', ['$scope', 'Post', '$rootScope', function($scope, Post, $rootScope){
	console.log('PostsCtrl');

	$rootScope.loading = true;
	$scope.posts = Post.getPosts().then(function(posts){
		$rootScope.loading = false;
		$scope.posts = posts;
	}, function(msg){
		alert('test');
	});

}]);