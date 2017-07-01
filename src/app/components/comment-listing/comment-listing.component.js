var template = require('./comment-listing.component.html');

function CommentListingController() {
    //npm run build
    //cd dist
    //npm install -g http-server
    //http-server
}

module.exports = {
    bindings: {
        comments: '='
    },
    controller: CommentListingController,
    template: template
};