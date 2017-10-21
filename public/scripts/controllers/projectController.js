angular.module('ProjectList')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'ProjectIndexCtrl'
      })
      .when('/project/:id', { 
        templateUrl: 'templates/showTemplate.html',
        controller: 'ProjectShowCtrl'
      })
      .when('/project', { 
        templateUrl: 'templates/indexTemplate.html',
        controller: 'ProjectCreateCtrl'
      });
});

angular.module('ProjectList')
 .factory('ProjectService', function($resource){
    return $resource('http://localhost:3000/api/project/:id') ;
});

angular.module('ProjectList')
  .controller('ProjectIndexCtrl', function($scope, ProjectService){
    $scope.project= ProjectService.query();
    console.log($scope.project);
});

angular.module('ProjectList')
.controller('ProjectShowCtrl', function ($scope, ProjectService, $routeParams) {
   $scope.project = ProjectService.get({id: $routeParams.id});
   console.log($scope.project);
});

