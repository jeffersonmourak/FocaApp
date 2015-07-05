app.controller('login', function($scope, $rootScope, login,db,$state) {
    $scope.hide = true;

    $scope.checkIsSaved = function(){
        if(db.get.user() !== null){
            $rootScope.user = db.get.user();
            $rootScope.company = db.get.company();
            $state.go("home");
        }
    }

    $scope.checkCompany = function(slug) {
        login.getCompany(slug).then(function(data) {
            if (data.error === undefined) {
                $rootScope.company = {
                    "networkSSID": data.networkSSID,
                    "location": data.location,
                    "name": data.name,
                    "slug": slug,
                    "id": data.id,
                };
                $scope.company = $rootScope.company;
                $scope.hide = false;
                $scope.error = "";
            } else {
                var errorMessage = "";
                switch (data.error) {
                    case "404":
                        errorMessage = "Empresa não encontrada"
                }
                $scope.error = errorMessage;
            }
        });
    }
    $scope.checkUser = function(user, companyId) {
        $scope.error = "";
        login.getUser(user, companyId).then(function(data) {
            if (data.error === undefined) {
                $rootScope.user = {
                    id: data.id,
                    companyId: data.companyId,
                    name: data.name,
                    email: data.email,
                    turns : data.turns,
                }
                if($scope.keep){
                    db.save.company($scope.company);
                    db.save.user($rootScope.user);
                }
                else{
                    db.clear();   
                }
                $state.go("home");
            } else {
                var errorMessage = "";
                console.log(data.error);
                switch (data.error) {
                    case "pass":
                        errorMessage = "Senha Incorreta"; break;
                    case "usr":
                        errorMessage = "Usuário não encontrado"; break;
                    case "usr-comp":
                        errorMessage = "Usuário não encontrado"; break;
                }
                $scope.error = errorMessage;
            }
        });
    }
});
