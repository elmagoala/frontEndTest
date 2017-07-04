BookService.$inject = ['$http'];
var URL = 'https://lit-citadel-36705.herokuapp.com/api/Books';

function BookService($http) {

    function convertDate(book) {
        book.publishedDate = new Date(book.publishedDate);
        return book;
    }

    function getData(res) {
        return res.data;
    }

    function handlerError(error) {
        return {
            errorCode: 'E100',
            errorMessage: error.message || 'Unknown Error'
        }
    }

    function getBooks() {
        //--validaciones
        //--errors / catch
        return $http.get(URL).then(getData).catch(handlerError);
    }

    function getBook(id) {
        return $http.get(URL + '/' + id).then(getData).then(convertDate).catch(handlerError);
    }

    function deleteBook(id) {
        return $http.delete(URL + '/' + id).then(getData).catch(handlerError);
    }

    function createBook(book) {
        return $http.post(URL, book).then(getData).catch(handlerError);
    }

    function updateBook(id, book) {
        return $http.put(URL + '/' + id, book).then(getData).catch(handlerError);
    }

    this.getBooks = getBooks;
    this.getBook = getBook;
    this.deleteBook = deleteBook;
    this.createBook = createBook;
    this.updateBook = updateBook;

}

module.exports = BookService;