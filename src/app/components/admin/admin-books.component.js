var template = require('./admin-books.component.html');

AdminBooksController.$inject = ['bookService']

function AdminBooksController(bookService) {
    var self = this;

    function setToBooks(books) {
        self.books = books;
    }

    function handleError(error) {
        console.log(error);
    }

    function init() {
        var req = bookService.getBooks();
        req.then(setToBooks);
        req.catch(handleError);
    }

    this.deleteBook = function(bookId) {
        var req = bookService.deleteBook(bookId);
        req.then(init);
        req.catch(handleError);
    };

    init();

}

module.exports = {
    controller: AdminBooksController,
    template: template
};