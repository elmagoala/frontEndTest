var template = require('./comment-form.component.html');


function CommentFormController() {
    this.init = function() {
        this.comment = {
            stars: "5"
        };
    };

    this.addComment = function(commentForm) {
        if (commentForm.$valid) {
            this.book.comments.push(this.comment);
            this.init();
            commentForm.$setPristine();
        }

    };

    this.init();
}

module.exports = {
    bindings: {
        book: '='
    },
    controller: CommentFormController,
    template: template
};