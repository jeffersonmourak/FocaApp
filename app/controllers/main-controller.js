app.controller('main', function($scope,$rootScope, checkout,db,$state) {
    $scope.company = $rootScope.company;
    $scope.user = $rootScope.user;
    $scope.checkout = function() {
        var done = false;
        var data = checkout.match();
        if (data.latitudeReazon > 0 && data.latitudeReazon < 2) {
            if (data.longitudeReazon > 0 && data.longitudeReazon < 2) {
                if (data.SSIDMatch) {
                    checkout.commit();
                    done = true;
                }
            }
        }
        if (!done) {
            alert("Não Salvo");
        }

    };
    $scope.logout = function(){
        db.clear();
        $state.go("login");
    }
});
