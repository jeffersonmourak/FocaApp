app.service('checkout', function($rootScope,$http,server) {
    var self = this,
        userLocationData = {
            "latitude": 0,
            "longitude": 0,
            "erro": false,
        };
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
        enableHighAccuracy: true
    });

    this.getCoords = userLocationData;

    function locationSuccess(position) {
        userLocationData.position = position;
        userLocationData.latitude = position.coords.latitude;
        userLocationData.longitude = position.coords.longitude;
    }

    function locationError(error) {
        userLocationData.error = {
            "code": error.code,
            "message": error.message
        }
    }
    this.getSSID = function() {
        return window.wifi.lan.SSID;
    }

    this.match = function() {
        var ssid_server = $rootScope.company.networkSSID;
        var serverLocationData = {
            "latitude": $rootScope.company.location.latitude,
            "longitude": $rootScope.company.location.longitude
        }
        console.log($rootScope.company.location.latitude);
        return {
            "latitudeReazon": serverLocationData.latitude / userLocationData.latitude,
            "longitudeReazon": serverLocationData.longitude / userLocationData.longitude,
            "SSIDMatch": ssid_server == self.getSSID(),
        }
    }
    this.commit = function() {
        var user = $rootScope.user;
        var serverData = $http.get(server.url + "api/commit/" + user.id + "/" + self.getSSID() + "/" + userLocationData.latitude + "/" + userLocationData.longitude).
        then(function(response) {
            return response.data;
        });
        return serverData;
    }

});
