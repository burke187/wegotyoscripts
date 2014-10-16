angular
    .module('Wegotyoscripts', [
        'ngAnimate',
        'ui.router',
        'templates',
        'ui.bootstrap'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
 /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'user/layout.html'
        })
        .state('dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: 'dashboard/layout.html'
        })
            // the default route when someone hits dashboard
            .state('dashboard.one', {
                url: '',
                templateUrl: 'dashboard/one.html',
            })
            // this is /dashboard/two
            .state('dashboard.two', {
                url: '/two',
                templateUrl: 'dashboard/two.html'
            })
            // this is /dashboard/three
            .state('dashboard.three', {
                url: '/three',
                templateUrl: 'dashboard/three.html'
            })

            .state('dashboard.four', {
                url: '/four',
                templateUrl: 'dashboard/four.html'
            });


    $urlRouterProvider.otherwise('/');


    $locationProvider.html5Mode(true);
    });