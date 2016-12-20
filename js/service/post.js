app.factory('Post', ['$http', '$q', '$timeout', function($http, $q, $timeout){
	console.log('Post');

	var factory = {

		posts : false,

		getPosts : function(){
			console.log('getPosts');
			var deferred = $q.defer();

			if(factory.posts !== false){
				deferred.resolve(factory.posts);
			}else{
				$http.get('posts.json').then(function successCallback(response){
					factory.posts = response; 
					deferred.resolve(factory.posts);
				}, function errorCallback(response){
					deferred.reject('impossible')
				});
			}

			return deferred.promise;
		},

		getPost : function(id){

			var deferred = $q.defer();
			var post = {};

			var posts = factory.getPosts().then(function(posts){
				angular.forEach(posts.data, function(value, key){
					if(value.id == id){
						post = value;
					}
				});
				deferred.resolve(post);

			}, function(msg){
				deferred.reject(msg);
			})

			return deferred.promise;					
		},

		add : function(comment){
			//Ajouter en DB
			var deferred = $q.defer();
			deferred.resolve();
			return deferred.promise;
		}
	};

	return factory;

}]);