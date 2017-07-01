routeConfig.$inject = ['$routeProvider'];

function routeConfig($routeProvider) {
    $routeProvider
        .when('/Home', {
            template: '<book-listing></book-listing>'
        })
        .when('/Books', {
            template: '<admin-books></admin-books>'
        })
        .when('/Book', {
            template: '<admin-book></admin-book>'
        })
        .when('/Book/:bookId', {
            template: '<admin-book></admin-book>'
        })
        .when('/SingUp', {
            template: '<sing-up></sing-up>'
        })
        .otherwise({
            redirectTo: '/Home'
        });
}

module.exports = routeConfig;