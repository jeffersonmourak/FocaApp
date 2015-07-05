app.controller('base', function($scope, $rootScope, $state, $timeout, viewsData) {
    $rootScope.$on("$locationChangeSuccess", function() {
        $timeout(function() {
            var currentState = $state.$current.name;
            if (currentState == "") {
                $timeout(function() {
                    currentState = $state.$current.name;
                    $scope.uiTheme = viewsData.barStyles[currentState];
                    $scope.pageTitle = viewsData.pageTitle[currentState];
                }, 500);
            }
            $scope.uiTheme = viewsData.barStyles[currentState];
            $scope.pageTitle = viewsData.pageTitle[currentState];

        }, 200);
    })
});
