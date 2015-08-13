SELECT   a.id   AS author_id,
         a.name AS author_name,
         b.id   AS book_id,
         b.name AS book_name
FROM     authors a
         LEFT OUTER JOIN books_authors ba
                      ON ba.author_id = a.id
         LEFT OUTER JOIN books b
                      ON ba.book_id = b.id
ORDER BY a.id,
         b.id