var website = angular.module('app', ['app.controllers', 'ui.router', 'btford.markdown']);


website.run(function ($state, $rootScope, $stateParams) {
    //makes states work with html5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('home');
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
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .state('leftTab', {
            abstract: true,
            templateUrl: 'templates/leftTab.html',
            controller: 'leftTabCtrl',
            url: '/tut'
        })
        .state('leftTab.intro', {
            templateUrl: 'templates/intro.html',
            url: '/intro'
        })
        .state('leftTab.htmlcss', {
            templateUrl: 'templates/htmlcss.html',
            url: '/htmlcss'
        })
        .state('leftTab.javascript', {
            template: '<p>test</p>',
            url: '/javascript'
        });
});