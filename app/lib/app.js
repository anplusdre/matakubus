var mataApp = angular.module('mataApp', ["ngRoute", "ngAnimate", "angular-loading-bar"]);


mataApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html"
        })
        .when("/works", {
            templateUrl: "partials/works.html"
        })
        .when("/kit", {
            templateUrl: "partials/kit.html"
        })
        .when("/service", {
            templateUrl: "partials/service.html"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html"
        })
        .when("/details", {
            templateUrl: "partials/details.html"
        })
        .when("/details/:title", {
            templateUrl: "partials/details.html",
            controller: "detailsCtrl"
        })
        .otherwise({
            controller: '404Controller',
            templateUrl: 'partials/404.html'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

mataApp.controller("homeController", function ($http, $route) {

    var vm = this;
    vm.reloadData = function () {
        $route.reload();
    }

});

mataApp.controller("worksController", function ($scope, $http, $route) {
    var vm = this;
    vm.reloadData = function () {
        $route.reload();
    }


    $http.get("api/works.json")
        .then(function (response) {
            $scope.works = response.data;



        });

});

mataApp.controller("headerCtrl", function ($scope, cfpLoadingBar) {

    $scope.start = function () {
        cfpLoadingBar.start();
    };
});

mataApp.controller("serviceCtrl", function ($http, $route) {
    var vm = this;
    vm.reloadData = function () {
        $route.reload();
    }
});

mataApp.controller("kitController", function ($http, $route) {
    var vm = this;
    vm.reloadData = function () {
        $route.reload();
    }
});

mataApp.controller("contactController", function ($http, $route) {
    var vm = this;
    vm.reloadData = function () {
        $route.reload();
    }
});

mataApp.controller("detailsCtrl", function ($route, $http, $location, $scope, $routeParams) {

    $http.get("api/works.json")
        .then(function (response) {
            $scope.works = response.data

            var works = $scope.works

            //            var palette = works.palette

            $scope.notFound = true
            angular.forEach(works, function (work) {
                if (work.title == $routeParams.title) {
                    $scope.notFound = false
                    $scope.work = work
                }

                //            console.log(work)

            })

            if ($scope.notFound) {

                $location.path("/404")
            }

            //CSS Tags JSON


        });

    //    var workDetails = respones.data;

});

mataApp.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]);



mataApp.controller('404Controller', function ($scope, $location) {
    $scope.path = $location.path();
    $scope.back = function () {
        //        history.back();
    };
});
