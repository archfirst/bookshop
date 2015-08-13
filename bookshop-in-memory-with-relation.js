// --------------------------------------------------------
// Authors
// --------------------------------------------------------
var authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' },
    { id: 4, name: 'Author 4' }
];

// --------------------------------------------------------
// Books
// --------------------------------------------------------
var books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
    { id: 4, name: 'Book 4' }
];

// --------------------------------------------------------
// Create relationships
// --------------------------------------------------------
var bookAuthors = [
    { book: books[0], author: authors[0] },
    { book: books[1], author: authors[1] },
    { book: books[1], author: authors[2] },
    { book: books[2], author: authors[2] },
    { book: books[2], author: authors[3] },
    { book: books[3], author: authors[0] },
    { book: books[3], author: authors[1] },
    { book: books[3], author: authors[2] },
    { book: books[3], author: authors[3] }
];

// --------------------------------------------------------
// Create books with authors
// --------------------------------------------------------
var _ = require('lodash');

function getBooksWithAuthors() {

    // Create an empty list of books with nested authors
    var bookswithAuthors = [];

    _.each(bookAuthors, function(bookAuthor) {
        var bookWithAuthors = _.find(bookswithAuthors, 'id', bookAuthor.book.id);
        if (!bookWithAuthors) {
            bookWithAuthors = _.clone(bookAuthor.book);
            bookWithAuthors.authors = [];
            bookswithAuthors.push(bookWithAuthors);
        }
        bookWithAuthors.authors.push(bookAuthor.author);
    });

    return bookswithAuthors;
}

// --------------------------------------------------------
// Main
// --------------------------------------------------------
console.log(JSON.stringify(getBooksWithAuthors(), null, 4));
