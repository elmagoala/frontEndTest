var template = require('./admin-book.component.html');

AdminBookController.$inject = ['bookService', '$location', '$routeParams']

function AdminBookController(bookService, $location, $routeParams) {
    var self = this;
    var bookId = $routeParams.bookId;
    this.book = {};


    if (bookId) {
        bookService.getBook(bookId).then(setBook).catch(handleError);
    }

    this.createBook = function() {
        if (bookId) {
            return this.updateBook();
        }
        var req = bookService.createBook(this.book);
        req.then(redirectToBooks);
        req.catch(handleError);
    };

    this.updateBook = function() {
        var req = bookService.updateBook(bookId, this.book);
        req.then(redirectToBooks);
        req.catch(handleError);
    };

    function setBook(book) {
        self.book = book;
    }

    function redirectToBooks() {
        $location.url('/Books');
    }

    function handleError(error) {
        console.log(error);
    }

}

module.exports = {
    controller: AdminBookController,
    template: template
};