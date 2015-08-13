-- -----------------------------------------------------------------------------
-- authors
-- -----------------------------------------------------------------------------
INSERT INTO authors (id, name) VALUES (1, 'Author 1');
INSERT INTO authors (id, name) VALUES (2, 'Author 2');
INSERT INTO authors (id, name) VALUES (3, 'Author 3');
INSERT INTO authors (id, name) VALUES (4, 'Author 4');

SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors));

-- -----------------------------------------------------------------------------
-- books
-- -----------------------------------------------------------------------------
INSERT INTO books (id, name) VALUES (1, 'Book 1');
INSERT INTO books (id, name) VALUES (2, 'Book 2');
INSERT INTO books (id, name) VALUES (3, 'Book 3');
INSERT INTO books (id, name) VALUES (4, 'Book 4');

SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors));

-- -----------------------------------------------------------------------------
-- books_authors
-- -----------------------------------------------------------------------------
-- Book 1
INSERT INTO books_authors (book_id, author_id) VALUES (1, 1);

-- Book 2
INSERT INTO books_authors (book_id, author_id) VALUES (2, 2);
INSERT INTO books_authors (book_id, author_id) VALUES (2, 3);

-- Book 3
INSERT INTO books_authors (book_id, author_id) VALUES (3, 3);
INSERT INTO books_authors (book_id, author_id) VALUES (3, 4);

-- Book 4
INSERT INTO books_authors (book_id, author_id) VALUES (4, 1);
INSERT INTO books_authors (book_id, author_id) VALUES (4, 2);
INSERT INTO books_authors (book_id, author_id) VALUES (4, 3);
INSERT INTO books_authors (book_id, author_id) VALUES (4, 4);
