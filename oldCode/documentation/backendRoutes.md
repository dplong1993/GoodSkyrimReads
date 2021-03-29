# Backend Routes

## **_API Endpoints_**
* Will be updated in the future to add routes for reviews, ratings, haveRead, currentlyRead, and wantToRead

### users
* _GET api/users_
    - Returns all users.
* _GET api/users/:id_
    - Returns a user based on wildcard id.
* _POST api/users_
    - Sign-up for an account
* _DELETE api/users/:id_
    - Deletes a user based on wildcard id.


### session
* _POST api/session_
    - Log-in to your account
* _DELETE api/session_
    - Log-out of your account

### books
* _GET api/books_
    - Returns all books.
* _GET api/books/:id_
    - Returns a book based on wildcard id.
* _GET api/books/:author_
    - Returns a list of books written by
    a given author.
* _GET api/books/:title_
    - Returns a list of books with the given title.
* _POST api/books_
    - Creates a new book.
* _DELETE api/books/:bookId_
    - Deletes a book with the id provided.
