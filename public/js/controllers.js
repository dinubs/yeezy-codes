var webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function() {

});

webctrl.controller('leftTabCtrl', function() {
    //this is the content located in the sidebar

    var leftabcontent = [{
        class: 'test',
        content: 'test'
    }, {
        class: 'test2',
        content: 'testw'
    }];
    $scope.products = leftabcontent;

});