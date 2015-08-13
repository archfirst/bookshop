SELECT   b.id   AS book_id,
         b.name AS book_name,
         a.id   AS author_id,
         a.name AS author_name
FROM     books b
         LEFT OUTER JOIN books_authors ba
                      ON ba.book_id = b.id
         LEFT OUTER JOIN authors a
                      ON ba.author_id = a.id;