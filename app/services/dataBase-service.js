app.service('db', function($rootScope) {
    var self = this;
    this.save = {
        company: function(data) {
            data = JSON.stringify(data);
            localStorage.setItem('company', data);
        },
        user: function(data) {
            data = JSON.stringify(data);
            localStorage.setItem('user', data);
        }
    };
    this.get = {
        company: function() {
            data = localStorage.getItem('company');
            return JSON.parse(data);
        },
        user: function() {
            data = localStorage.getItem('user');
            return JSON.parse(data);
        }
    };
    this.clear = function() {
        localStorage.removeItem('company');
        localStorage.removeItem('user');
    }
});
