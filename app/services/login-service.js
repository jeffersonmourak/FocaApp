app.service('login',function ($rootScope,$http,server) {
	var self = this;
	this.getCompany = function(companyName){
		var serverData = $http.get(server.url+"api/company/"+companyName).
		then(function(response){
            return response.data;
        });
        return serverData;
	}
	this.getUser = function(user,companyId){
		var serverData = $http.get(server.url+"api/login/"+user.email+"/"+user.password+"/"+companyId).
		then(function(response){
            return response.data;
        });
        return serverData;
	}
});