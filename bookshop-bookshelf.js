// --------------------------------------------------------
// Initialize knex (the query builder)
// --------------------------------------------------------
var knex = require('knex')({
    client: 'postgresql',
    debug: true,
    connection: {
        host: 'localhost',
        user: '',
        password: '',
        database: 'demo',
        charset: 'utf8'
    }
});

// -----------------------------------------------------------------------------
// Initialize the ORM (knex and bookshelf)
// -----------------------------------------------------------------------------
var initializeBookshelf = require('bookshelf');
var bookshelf = initializeBookshelf(knex);

// -----------------------------------------------------------------------------
// Domain Model
// -----------------------------------------------------------------------------

// ----- Book -----
var Book = bookshelf.Model.extend({
    tableName: 'books',
    authors: function() {
        return this.belongsToMany(Author, 'books_authors');
    }
});

// ----- Author -----
var Author = bookshelf.Model.extend({
    tableName: 'authors',
    books: function() {
        return this.belongsToMany(Book, 'books_authors');
    }
});

// --------------------------------------------------------
// Get books with authors
// --------------------------------------------------------
/*
    This generates two queries:

    select books.* from books;

    select authors.*,
           books_authors.book_id as _pivot_book_id,
           books_authors.author_id as _pivot_author_id
    from authors
    inner join books_authors on books_authors.author_id = authors.id
    where books_authors.book_id in (1, 2, 3, 4);
 */
function getBooksWithAuthors() {
    return new Book()
        .fetchAll({
            withRelated: ['authors']
        });
}

// --------------------------------------------------------
// Main
// --------------------------------------------------------
getBooksWithAuthors().then(function(books) {

    console.log(JSON.stringify(books, null, 4));

    // close the connection
    return knex.destroy();
});
