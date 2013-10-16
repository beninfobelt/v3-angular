
// interface to the Skye /users API

app.service('usersService', function ($http) {

    this.get = function () {
        return $http.get('/api/1/users')
    };

} );
