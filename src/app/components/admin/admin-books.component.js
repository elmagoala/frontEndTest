var template = require('./admin-books.component.html');
var URL = 'https://lit-citadel-36705.herokuapp.com/api/Books';

AdminBooksController.$inject = ['$http', '$location', '$routeParams']

function AdminBooksController($http, $location, $routeParams) {
    var ctrl = this;
    var bookId = $routeParams.bookId;
    ctrl.books = [];

    function init() {
        var req = $http.get(URL);
        req.then(function(res) {
            ctrl.books = res.data;
        });
    }

    this.updateBook = function() {
        var req = $http.put(URL + '/' + bookId, this.book);
        req.then(function(res) {
            $location.url('/Books');
        });
        req.catch(function(error) {
            console.log(error);
        });
    };

    this.deleteBook = function(bookId) {
        var req = $http.delete(URL + '/' + bookId);
        req.then(function(res) {
            init();
        });
        req.catch(function(error) {
            console.log(error);
        });
    };

    init();

}

module.exports = {
    controller: AdminBooksController,
    template: template
};