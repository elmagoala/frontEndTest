var template = require('./admin-books.component.html');
var URL = 'https://lit-citadel-36705.herokuapp.com/api/Books';

AdminBooksController.$inject = ['$http']

function AdminBooksController($http) {
    var ctrl = this;
    ctrl.books = [];
    var req = $http.get(URL);
    req.then(function(res) {
        ctrl.books = res.data;
    });

    this.updateBook = function() {
        var req = $http.put(URL + '/' + bookId, this.book);
        req.then(function(res) {
            $location.url('/Books');
        });
        req.catch(function(error) {
            console.log(error);
        });
    };

    this.deleteBook = function() {
        var req = $http.put(URL + '/' + bookId, this.book);
        req.then(function(res) {
            $location.url('/Books');
        });
        req.catch(function(error) {
            console.log(error);
        });
    };

}

module.exports = {
    controller: AdminBooksController,
    template: template
};