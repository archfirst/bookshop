// --------------------------------------------------------
// Authors
// --------------------------------------------------------
var authors = [
    { id: 1, name: 'Author 1', books: [] },
    { id: 2, name: 'Author 2', books: [] },
    { id: 3, name: 'Author 3', books: [] },
    { id: 4, name: 'Author 4', books: [] }
];

// --------------------------------------------------------
// Books
// --------------------------------------------------------
var books = [
    { id: 1, name: 'Book 1', authors: [] },
    { id: 2, name: 'Book 2', authors: [] },
    { id: 3, name: 'Book 3', authors: [] },
    { id: 4, name: 'Book 4', authors: [] }
];

// --------------------------------------------------------
// Create relationships
// --------------------------------------------------------
// books to authors
books[0].authors.push(authors[0]);

books[1].authors.push(authors[1]);
books[1].authors.push(authors[2]);

books[2].authors.push(authors[2]);
books[2].authors.push(authors[3]);

books[3].authors.push(authors[0]);
books[3].authors.push(authors[1]);
books[3].authors.push(authors[2]);
books[3].authors.push(authors[3]);

// authors to books
authors[0].books.push(books[0]);
authors[0].books.push(books[3]);

authors[1].books.push(books[1]);
authors[1].books.push(books[3]);

authors[2].books.push(books[1]);
authors[2].books.push(books[2]);
authors[2].books.push(books[3]);

authors[3].books.push(books[2]);
authors[3].books.push(books[3]);

// --------------------------------------------------------
// Main
// --------------------------------------------------------
// Can't use JSON.stringify - it gives "TypeError: Converting circular structure to JSON"
// console.log(JSON.stringify(books, null, 4));
var i, j;
var numBooks = books.length;
for (i=0; i<numBooks; i++) {
    var book = books[i];
    console.log('Book: id=' + book.id + ', name=' + book.name);

    var authors = book.authors;
    var numAuthors = authors.length;
    for (j=0; j<numAuthors; j++) {
        var author = authors[j];
        console.log('  Author: id=' + author.id + ', name=' + author.name);
    }
}