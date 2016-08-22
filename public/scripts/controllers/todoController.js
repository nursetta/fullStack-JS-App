angular.module('TodoList')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'TodoIndexCtrl'
      })
      .when('/todo/:id', { 
        templateUrl: 'templates/showTemplate.html',
        controller: 'TodoShowCtrl'
      })
      .when('/todo', { 
        templateUrl: 'templates/indexTemplate.html',
        controller: 'TodoCreateCtrl'
      });
});

angular.module('TodoList')
 .factory('TodoService', function($resource){
    return $resource('http://localhost:3000/api/todo/:id') ;
});

angular.module('TodoList')
  .controller('TodoIndexCtrl', function($scope, TodoService){
    $scope.todo= TodoService.query();
    console.log($scope.todo);
});

angular.module('TodoList')
.controller('TodoShowCtrl', function ($scope, TodoService, $routeParams) {
   $scope.todo = TodoService.get({id: $routeParams.id});
   console.log($scope.todo);
});

angular.module('TodoList')
.controller('TodoCreateCtrl', function($scope, TodoService) {
      $scope.submit = {};
      $scope.submit = function() {
        console.log($scope.newTodo);
        TodoService.save($scope.newTodo);
        window.location.assign('/');
        };
});

