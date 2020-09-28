# GoodSkyrimReads
This is a solo-project made using React and Redux in JavaScript for the frontend and Sequelize for the backend. It is a clone of the Goodreads website using books from the popular Elder Scrolls V Skyrim video game.
# MVP List
This is a Skyrim themed clone of the popular site Goodreads. It will be built using React and Redux for the front-end and Express and Sequelize for the back-end.
### User log-in (9/28/20, 1 day)
* Users with accounts in the database are able to log-in to the site.
* Non-users can access information about different books.
* Users can add books to thier lists and access them via a My Books tab
### New user account creation (9/29/20 1 day)
* Users can create a new account.
* After creating a new account, users can use that account to log-in to the site.
### Demo user account log-in (9/29/20 .5 day)
* A user account that anyone can use to explore the functionality of the site.
### View book information (9/30/20, 1 day)
* Anyone can click on the picture of a book to see information about the book.
### Bookshelves (10/1/20, 2 days)
* A user can choose to add a book to their bookshelves.
* The user can then navigate to their bookshelves to look at all the books they have saved.
* The user can delete books from their bookshleves if they no longer want to have them saved.
### Reviews (10/3/20, 1 days)
* A user can leave reviews on different books via 5 stars.
* The stars will initialy be grey.
* Once the user leaves their review (from 1-5 stars) the corresponding stars will change to   yellow
* Along with the stars a user will be able to leave a detailed review in the form of comments.
### Read Status (will read, have read, etc.) (10/4/20 1 day)
* The user will be able to mark books with different statuses using a drop down menu on the book's information page.
* The statuses will be want to read, currently reading, and have read.
### Bonus: Search across multiple models
* Anyone accessing the application will be able to use a search bar to search through the availiable books.
# Schema
### Users
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| email | string | not null, unique |
| hashedPassword | bytea | not null |
| firstName | string | not null |
| lastName | string | not null |
| location | string | not null |
* has_many ratings
* has_many reviews
* has_many haveRead
* has_many currentlyReading
* has_many wantToRead
### Books
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| title | string | not null |
| description | text | not null |
| author | string | not null |
| coverPhotoUrl | string | not null |
* has_many ratings
* has_many reviews
* has_many haveRead
* has_many currentlyReading
* has_many wantToRead
### Ratings
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
| score | float | not null |
* belongs_to users
* belongs_to books
### Reviews
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
| content | text | not null |
* belongs_to users
* belongs_to books
### HaveRead
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
* belongs_to users
* belongs_to books
### CurrentlyReading
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
* belongs_to users
* belongs_to books
### WantToRead
| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
* belongs_to users
* belongs_to books
# Sample State
{
+ entities: {

  - users: {

          1: {
              id: 1,
              email: demo@example.com,
              firstName: Demo,
              lastName: User,
              location: Somewhere, US
              ratings: {1}
              reviews: {1}
              haveRead: {1}
              currentlyReading: {1}
              wantToRead: {1}
          },
          2: {
              id: 1,
              email: demo1@example.com,
              firstName: Demo,
              lastName: User2,
              location: Somewhere, US
              ratings: {2}
              reviews: {2}
              haveRead: {2}
              currentlyReading: {2}
              wantToRead: {2}
          },
          3: {
              id: 1,
              email: demo2@example.com,
              firstName: Demo,
              lastName: User3,
              location: Somewhere, US
              ratings: {3}
              reviews: {3}
              haveRead: {3}
              currentlyReading: {3}
              wantToRead: {3}
          }
      },

  - books: {

          1: {
              id: 1,
              title: 16 Accords of Madness, v. VI,
              description: A tale of a duel between Sheogorath and Hircine,
              author: Anonymous,
              covorPhotoUrl: https://vignette.wikia.nocookie.net/elderscrolls/images/9/92/Book06.png/revision/latest/scale-to-width-down/350?cb=20120512211846,
              ratings: {1}
              reviews: {1}
              haveRead: {1}
              currentlyReading: {2}
              wantToRead: {3}
          },
          2: {
              id: 2,
              title: 16 Accords of Madness, v. IX,
              description: Sheogorath and Vaermina strike a bet.,
              author: Anonymous,
              covorPhotoUrl: https://vignette.wikia.nocookie.net/elderscrolls/images/9/92/Book06.png/revision/latest/scale-to-width-down/350?cb=20120512211846,
              ratings: {2}
              reviews: {2}
              haveRead: {2}
              currentlyReading: {3}
              wantToRead: {1}
          },
          3: {
              id: 3,
              title: 16 Accords of Madness, v. XII,
              description: Malacath's dealings with Sheogorath.,
              author: Anonymous,
              covorPhotoUrl: https://vignette.wikia.nocookie.net/elderscrolls/images/9/92/Book06.png/revision/latest/scale-to-width-down/350?cb=20120512211846,
              ratings: {3}
              reviews: {3}
              haveRead: {3}
              currentlyReading: {1}
              wantToRead: {2}
          },
      },

  - ratings: {

          1: {
              id: 1,
              userId: 1,
              bookId: 1,
              score: 4.5,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 2,
              score: 3.5,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 3,
              score: 5.0,
          },
      },

  - reviews: {

          1: {
              id: 1,
              userId: 1,
              bookId: 1,
              content: Great book would recommend!,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 2,
              content: Kinda crazy but the ending was good!,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 3,
              conent: I like this,
          },
      },

  - haveRead: {

          1: {
              id: 1,
              userId: 1,
              bookId: 1,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 2,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 3,
          },
      },

  - currentlyReading: {

          1: {
              id: 1,
              userId: 1,
              bookId: 3,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 1,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 2,
          },
      },

  - wantToRead: {

          1: {
              id: 1,
              userId: 1,
              bookId: 2,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 3,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 1,
          },
      },
  }

+auth: {

        id: 1,
        email: demo@example.com,
        firstName: Demo,
        lastName: User,
        location: Somewhere, US
        createdAt: 2020-08-31T20:22:22.211z,
        updatedAt: createdAt: 2020-08-31T20:22:22.211z
}
}

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

# Frontend Routes

The components will be organized as such:
* Root
    - Provider
        * App
            - NavBar
            - Main
            - Footer

The following routes will render in our App between the NavBar and Footer.
* /
    - The homepage that will be accessible to anyone that visits the site.
    - This page will have a list of books in the database.
    - This page also has a gallery of books the user wants to read on the side bar.
    - This page also has a snapshot of the amount of books on each of the user's bookshelves.

* /login
    - A form that will allow the user to log-in

* /signup
    - A form that will allow the user to create an account

* /mybooks
    - This will be a page that has a main element containing a table of all the books the user has in their different bookshelves.
    - There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /mybooks/read
    - This will be a page that has a main element containing a table of all the books the user has in their read bookshelf.
    - There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /mybooks/currentlyReading
    - This will be a page that has a main element containing a table of all the books the user has in their currently reading bookshelf.
    - There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /mybooks/wantToRead
    - This will be a page that has a main element containing a table of all the books the user has in their want to read bookshelf.
    - There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /book/:id
    - This page will render information about a specific book.
    - There will be a dropdown menu that will allow the user to add the book to any of their bookshelves.
    - This page will also contain reviews for the book created by different users.

* /profile
    - This page will render the user profile for the currently logged-in user.
