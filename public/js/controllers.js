var webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function() {

});

webctrl.controller('leftTabCtrl', function($scope, $state) {

    //this is the content located in the sidebar
    var leftTabContent = [{
        class: 'test',
        whichstate: 'intro',
        content: 'Introduction',
        //sub catagories
        subCats: ['test', 'testtyytesst']
    }, {
        class: 'test',
        content: 'HTML and CSS',
        whichstate: 'htmlcss'
        subCats: ['test', 'test again']
    }, {
        class: 'test2',
        whichstate: 'javascript',
        content: 'testw'
    }, {

    }];

    $scope.products = leftTabContent;

    do_i_show_sub_cats = function(requested_state) {

        //makes sure state isn't current state
        if ($state.is('leftTab.' + requested_state) == false) {

            var state = leftTabContent.whichstate;

            for (i = 0; i < leftTabContent.length; i++) {
                $scope.state = false;
                $scope.class_state = '';
            }
            $scope.class_requested_state = 'big';
            $scope.requested_state = true;
        }
    }

});