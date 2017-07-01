var template = require('./admin-book.component.html');
var URL = 'https://lit-citadel-36705.herokuapp.com/api/Books';

AdminBookController.$inject = ['$http', '$location', '$routeParams']

function AdminBookController($http, $location, $routeParams) {
    var self = this;
    var bookId = $routeParams.bookId;
    this.book = {};


    if (bookId) {
        $http.get(URL + '/' + bookId).then(function(res) {
            self.book = res.data;
            self.book.publishedDate = new Date(self.book.publishedDate);
        });
    }

    this.createBook = function() {
        if (bookId) {
            return this.updateBook();
        }
        var req = $http.post(URL, this.book);
        req.then(function(res) {
            $location.url('/Books');
        });
        req.catch(function(error) {
            console.log(error);
        });
    };


}

module.exports = {
    controller: AdminBookController,
    template: template
};