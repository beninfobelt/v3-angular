
// Controller for the No-Frills Orion UI

app.controller('noFrillsController', function ($scope,usersService) {
    $scope.users = usersService.get();
} );
