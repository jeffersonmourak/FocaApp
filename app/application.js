var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('home', {
            url: "/main",
            views: {
                'main': {
                    templateUrl: 'app/views/main-view.html',
                },
            }
        })
        .state('login', {
            url: "/login",
            views: {
                'main': {
                    templateUrl: 'app/views/login-view.html',
                },
            }
        });

});
