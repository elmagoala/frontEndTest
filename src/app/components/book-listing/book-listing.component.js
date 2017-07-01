var template = require('./book-listing.component.html');

function BookListingController() {

    this.books = [
        {
            title: 'AngularJS Web Application Development Blueprints',
            image: 'book1.png',
            author: 'Vinci Rufus',
            price: 18.99,
            publishedDate: new Date(2014, 8, 1),
            description: 'A practical guide to developing powerful web applications with AngularJS',
            comments: [
                {
                    stars: 5,
                    email: 'jose.lopez@gmail.com',
                    text: 'Excelente libro'
                }, {
                    stars: 4,
                    email: 'maria.lopez@gmail.com',
                    text: 'Excelente libro, pero algunos ejemplos no estan muy claros'
                }
            ]
        }, {
            title: 'Mastering Web Application Development with AngularJS',
            image: 'book2.png',
            author: 'Peter Bacon Darwin, Pawel Kozlowski',
            price: 16.99,
            publishedDate: new Date(2013, 8, 1),
            description: 'Streamline your web applications with this hands-on course. From initial structuring to full deployment, you’ll learn everything you need to know about AngularJS DOM based frameworks.',
            comments: [
                {
                    stars: 5,
                    email: 'luis.lopez@gmail.com',
                    text: 'Este libro contiene excelentes ejemplos'
                }
            ]
        }, {
            title: 'Mastering AngularJS Directives',
            image: 'book3.png',
            author: 'Josh Kurz',
            price: 15.99,
            publishedDate: new Date(2014, 6, 1),
            description: 'Develop, maintain, and test production-ready directives for any AngularJS-based application.',
            comments: [
                {
                    stars: 3,
                    email: 'carla.lopez@gmail.com',
                    text: 'Deben mejorar los ejemplos'
                }
            ]
        }, {
            title: 'Instant AngularJS Starter',
            image: 'book4.png',
            author: 'Dan Menard',
            price: 7.99,
            publishedDate: new Date(2013, 2, 1),
            description: 'A concise guide to start building dynamic web applications with AngularJS, one of the Web\'s most innovative JavaScript frameworks.',
            comments: []
        }, {
            title: 'AngularJS UI Development',
            image: 'book5.png',
            author: 'Amit Gharat, Matthias Nehlsen',
            price: 16.99,
            publishedDate: new Date(2014, 10, 1),
            description: 'Follow this AngularJS tutorial and learn to create dynamic user interfaces with AngularJS and discover a modern front end web application development solution.',
            comments: []
        }
    ];

}

module.exports = {
    controller: BookListingController,
    template: template
}