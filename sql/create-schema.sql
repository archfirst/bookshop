-- Drop join table first
DROP TABLE IF EXISTS books_authors;

-- Drop other tables
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

-- Create tables
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL
);

CREATE TABLE books_authors (
  book_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  PRIMARY KEY (book_id, author_id)
);
ALTER TABLE books_authors
  ADD CONSTRAINT books_authors_book_id_foreign FOREIGN KEY (book_id)
  REFERENCES books (id);
ALTER TABLE books_authors
  ADD CONSTRAINT books_authors_author_id_foreign FOREIGN KEY (author_id)
  REFERENCES authors (id);
