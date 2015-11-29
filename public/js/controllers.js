var webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function() {

});

webctrl.controller('leftTabCtrl', function() {

    //this is the content located in the sidebar
    var leftabcontent = [{
        class: 'test',
        whichstate: 'intro',
        content: 'Introduction'
    }, {
        class: 'test2',
        whichstate: 'javascript',
        content: 'testw'
    }, {

    }];

    $scope.products = leftabcontent;

});