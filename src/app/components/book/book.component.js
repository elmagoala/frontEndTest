var template = require('./book.component.html');

function BookController () {
}

module.exports = {
    bindings: {
        book: '='
    },
    template: template,
    controller: BookController
};