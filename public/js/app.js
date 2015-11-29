var website = angular.module('app', ['app.controllers', 'ui.router']);

angular.module('directives', []).
    directive('gist', function() {
        return function(scope, elm, attrs) {
            var gistId = scope.gistId;

            var iframe = document.createElement('iframe');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('frameborder', '0');
            iframe.id = "gist-" + gistId;
            elm[0].appendChild(iframe);

            var iframeHtml = '<html><head><base target="_parent"><style>table{font-size:12px;}</style></head><body onload="parent.document.getElementById(\'' + iframe.id + '\').style.height=document.body.scrollHeight + \'px\'"><scr' + 'ipt type="text/javascript" src="https://gist.github.com/' + gistId + '.js"></sc'+'ript></body></html>';

            var doc = iframe.document;
            if (iframe.contentDocument) doc = iframe.contentDocument;
            else if (iframe.contentWindow) doc = iframe.contentWindow.document;

            doc.open();
            doc.writeln(iframeHtml);
            doc.close();
        };
    });

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