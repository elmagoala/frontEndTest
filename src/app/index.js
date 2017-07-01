require('bootstrap/dist/css/bootstrap.css');


var angular = require('angular');
var angularMessage = require('angular-messages');
var angularRoute = require('angular-route');
var routeConfig = require('./config/route.config');

var root = require('./components/root/root.component');
var bookListing = require('./components/book-listing/book-listing.component');
var book = require('./components/book/book.component');
var bookDetail = require('./components/book-detail/book-detail.component');
var commentListing = require('./components/comment-listing/comment-listing.component');
var commentForm = require('./components/comment-form/comment-form.component');
var tabContainer = require('./components/ui/tab-container/tab-container.component');
var tab = require('./components/ui/tab/tab.component');
var navbar = require('./components/navbar/navbar.component');
var adminBooks = require('./components/admin/admin-books.component');
var adminBook = require('./components/admin/admin-book.component');


var app = angular.module('app', [angularMessage, angularRoute]);
app.config(routeConfig);
app.component('root', root); // <root>
app.component('bookListing', bookListing); //<book-listing>
app.component('book', book); //<book>
app.component('bookDetail', bookDetail);
app.component('commentListing', commentListing);
app.component('commentForm', commentForm);
app.component('tabContainer', tabContainer);
app.component('tab', tab);
app.component('navbar', navbar);
app.component('adminBooks', adminBooks);
app.component('adminBook', adminBook);