app.controller('CommentsCtrl',['$scope', 'Post', '$routeParams', '$rootScope', function($scope, Post, $routeParams, $rootScope){
	console.log('CommentsCtrl');
	
	$rootScope.loading = true;
	$scope.newComment = {};

	var post = Post.getPost($routeParams.id).then(function(post){
		
		$rootScope.loading = false;
		
		$scope.title = post.name;
		$scope.comments = post.comments;

	}, function(msg){
		alert(msg);
	});

	$scope.addComment = function(){
		$scope.comments.push($scope.newComment);
		Post.add($scope.newComment).then(function(){

		}, function(){
			alert('Votre message n\'a pas pu être sauvegardé');
		})
		$scope.newComment = {};
	}
}]);