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

// --------------------------------------------------------
// Get books with authors
// --------------------------------------------------------
var joinjs = require('join-js');

var resultMaps = [
    {
        mapId: 'bookMap',
        properties: ['name'],
        collections: [
            {name: 'authors', mapId: 'authorMap', columnPrefix: 'author_'}
        ]
    },
    {
        mapId: 'authorMap',
        properties: ['name']
    }
];

function getBooksWithAuthors() {
    return knex
        .select(
            'b.id as book_id',
            'b.name as book_name',
            'a.id as author_id',
            'a.name as author_name')
        .from('books as b')
        .leftOuterJoin('books_authors as ba', 'ba.book_id', 'b.id')
        .leftOuterJoin('authors as a', 'ba.author_id', 'a.id')
        .then(function(resultSet) {
            return joinjs.map(resultSet, resultMaps, 'bookMap', 'book_');
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
