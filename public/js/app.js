var website = angular.module('app', ['app.controllers', 'ui.router']);


website.run(function ($state, $rootScope, $stateParams) {
    //makes states work with html5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('home')
});

website.config(function($locationProvider, $stateProvider) {
//enables html5 mode
    $locationProvider
        .html5Mode(
            {
                enabled: true,
                requireBase: false
            })
        .hashPrefix('!');

    //states
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: 'homeCtrl'
        })
        .state('leftTab', {
            url: '/tutorials',
            templateUrl: '/templates/leftTab.html',
            controller: 'leftTabCtrl'
        })
        .state('leftTab.intro', {
            url: '/intro',
            templateUrl: '/templates/intro.html'
        })
        .state('leftTab.css', {
            url: '/css',
            templateUrl: '/templates/htmlcss.html'
        })
        .state('leftTab.javascript', {
            url: '/javascript',
            templateUrl: '/templates/javascript.html'
        });
});