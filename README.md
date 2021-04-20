# GoodSkyrimReads

This is a solo-project made using React and Redux in JavaScript for the frontend and Sequelize for the backend. It is based on the Goodreads website using books from the popular Elder Scrolls V Skyrim video game.

## MVP List

This is a Skyrim themed clone of the popular site Goodreads. It will be built using React and Redux for the front-end and Express and Sequelize for the back-end.

### User log-in (9/28/20, 1 day)

* Users with accounts in the database are able to log-in to the site.
* Non-users can access information about different books.
* Users can add books to their lists and access them via a My Books tab

### New user account creation (9/29/20 1 day)

* Users can create a new account.
* After creating a new account, users can use that account to log-in to the site.

### Demo user account log-in (9/29/20 .5 day)

* A user account that anyone can use to explore the functionality of the site.

### NavBar (9/30/20 .5 days)

* A navbar will be present on all pages besides the login and signup page.
* It will contain different buttons to help the user navigate through the pages of the site.

### Home page (9/30/20, 1 day)

* A page displaying a sidebar and a main section
* The side-bar contains three different sections relating to bookshelves of the current user
* The main section displays a list of books in the database and their information.

### View book information (10/01/20, 1 day)

* Anyone can click on the picture of a book to see information about the book.
* A user can choose to add or remove the book from their shelves.

### Bookshelves (10/2/20, 2 days)

* A user can choose to add a book to their bookshelves.
* The user can then navigate to their bookshelves to look at all the books they have saved.
* The user can delete books from their bookshelves if they no longer want to have them saved.

### Book Browse Page (10/4/20, 1 day)

* The user will be given a list of all the books in the library that are not in the user's shelves.
* The user will have the option to add the book to one of their shelves.
* The user also has the ability to navigate to a book's detail page by clicking the cover of the book.

### Profile (10/5/20, 1 day)

* A user will be able to see their account information.
* A user will be able to update their user information.
* A user will be able to delete their account.
* A user will be able to see a summary of their shelves with book count and will be able to navigate to those shelves via a link.
* A summary of user's activity will be visible showing three books the user has in their shelves as well as the book's title and author and a bar showing which shelf the book is on.
* The user will be able to navigate to one of the books in their activity section by clicking on the book cover.

### Bonus: Reviews

* A user can leave reviews on different books via 5 stars.
* The stars will initially be grey.
* Once the user leaves their review (from 1-5 stars) the corresponding stars will change to   yellow
* Along with the stars a user will be able to leave a detailed review in the form of comments.

### Bonus: Read Status

* The user will be able to mark books with different statuses using a drop down menu on the book's information page.
* The statuses will be want to read, currently reading, and have read.

### Bonus: Search across multiple models

* Anyone accessing the application will be able to use a search bar to search through the available books.

## Schema

### Users

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| email | string | not null, unique |
| username | string | not null, unique |
| hashedPassword | bytea | not null |
| firstName | string | not null |
| lastName | string | not null |

* has_many Read
* has_many CurrRead
* has_many ToRead
* belongs_to Book

### Books

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| title | string | not null |
| description | text | not null |
| author | string | not null |
| bookSeries | string | not null |
| coverPhotoUrl | string | not null |

* has_many Read
* has_many CurrRead
* has_many ToRead
* belongs_to User

### Read

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
| shelfName | string | not null |

* belongs_to User
* belongs_to Book

### CurrRead

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
| shelfName | string | not null |

* belongs_to User
* belongs_to Book

### ToRead

| column name | data type | details |
|---|---|---|
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| bookId | integer | not null, foreign key |
| shelfName | string | not null |

* belongs_to User
* belongs_to Book

## Sample State

{

* entities: {

  * session: {

          user: {
              id: 1,
              username: 'Demo-lition',
              email: 'demo@user.io',
              lastName: 'lition',
              firstName: 'Demo',
              createdAt: '2021-04-19T17:30:02.030Z',
              updatedAt: '2021-04-19T17:30:02.030Z'
          }
      },

  * books: [

          {
              id: 1,
              title: '16 Accords of Madness, v. VI',
              description: 'A tale of a duel between Sheogorath and Hircine.',
              author: 'Anonymous',
              bookSeries: '16 Accords of Madness',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z'
          },
          {
              id: 2,
              title: '16 Accords of Madness, v. IX',
              description: 'Sheogorath and Vaermina strike a bet.',
              author: 'Anonymous',
              bookSeries: '16 Accords of Madness',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z'
          },
          {
              id: 3,
              title: '16 Accords of Madness, v. XII',
              description: 'Malacath\'s dealings with Sheogorath.',
              author: 'Anonymous',
              bookSeries: '16 Accords of Madness',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z'
          },
      ],

  * currentBook: {

          {
              id: 1,
              title: '16 Accords of Madness, v. VI',
              description: 'A tale of a duel between Sheogorath and Hircine.',
              author: 'Anonymous',
              bookSeries: '16 Accords of Madness',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z'
          },
      },

  * shelves: {

          read: [
              {
                  id: 1,
                  title: '16 Accords of Madness, v. VI',
                  description: 'A tale of a duel between Sheogorath and Hircine.',
                  author: 'Anonymous',
                  bookSeries: '16 Accords of Madness',
                  coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png',
                  createdAt: '2021-04-19T17:30:02.050Z',
                  updatedAt: '2021-04-19T17:30:02.050Z',
                  Read: {
                      userId: 1,
                      bookId: 1,
                      shelfName: 'read',
                      createdAt: '2021-04-19T17:30:02.064Z',
                      updatedAt: '2021-04-19T17:30:02.064Z'
                  }
              },
              {
                  id: 2,
                  title: '16 Accords of Madness, v. IX',
                  description: 'Sheogorath and Vaermina strike a bet.',
                  author: 'Anonymous',
                  bookSeries: '16 Accords of Madness',
                  coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png',
                  createdAt: '2021-04-19T17:30:02.050Z',
                  updatedAt: '2021-04-19T17:30:02.050Z',
                  Read: {
                      userId: 1,
                      bookId: 2,
                      shelfName: 'read',
                      createdAt: '2021-04-19T22:04:21.200Z',
                      updatedAt: '2021-04-19T22:04:21.200Z'
                  }
              },
        ],

          toRead: [
          {
              id: 6,
              title: '2920, vol 03 - First Seed\t',
              description: 'Details the disaster of the attempted Imperial invasion of Mournhold, Morrowind by Emperor Reman III.',
              author: 'Carlovac Townway',
              bookSeries: '2920',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book01.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z',
              ToRead: {
                  userId: 1,
                  bookId: 6,
                  shelfName: 'to-read',
                  createdAt: '2021-04-19T22:05:53.788Z',
                  updatedAt: '2021-04-19T22:05:53.788Z'
              }
          },
          {
              id: 12,
              title: '2920, vol 09 - Hearth Fire',
              description: 'Details Empress Tavia\'s agony and her suicide, Potentate Versidue Shaie convincing the emperor to sentence Rijja to death and Turala and Cassyr meeting a witch of the Skeffington Coven.',
              author: 'Carlovac Townway',
              bookSeries: '2920',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/SpellTomeConjuration.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z',
              ToRead: {
                  userId: 1,
                  bookId: 12,
                  shelfName: 'to-read',
                  createdAt: '2021-04-19T22:10:00.146Z',
                  updatedAt: '2021-04-19T22:10:00.146Z'
              }
          }
        ],

          currRead: [
          {
              id: 5,
              title: '2920, vol 02 - Sun\'s Dawn',
              description: 'Details one of Sotha Sil\'s lessons, Turala\'s exile and Molag Bal arriving to Gilverdale, as well as Almalexia discovering the city\'s destruction.',
              author: 'Carlovac Townway',
              bookSeries: '2920',
              coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/IllusionSkillBook.png',
              createdAt: '2021-04-19T17:30:02.050Z',
              updatedAt: '2021-04-19T17:30:02.050Z',
              CurrRead: {
                  userId: 1,
                  bookId: 5,
                  shelfName: 'curr-read',
                  createdAt: '2021-04-19T22:03:00.331Z',
                  updatedAt: '2021-04-19T22:03:00.331Z'
              }
          },
          {
                  id: 7,
                  title: '2920, vol 04 - Rain\'s Hand',
                  description: 'Follows Sotha Sil and his initiates in their negotiation and dealings with Daedra after the destruction of Gilverdale by Molag Bal.',
                  author: 'Carlovac Townway',
                  bookSeries: '2920',
                  coverPhotoUrl: 'https://goodskyrimreads.s3.us-east-2.amazonaws.com/RestorationSkillBook.png',
                  createdAt: '2021-04-19T17:30:02.050Z',
                  updatedAt: '2021-04-19T17:30:02.050Z',
                  CurrRead: {
                      userId: 1,
                      bookId: 7,
                      shelfName: 'curr-read',
                      createdAt: '2021-04-19T22:09:34.048Z',
                      updatedAt: '2021-04-19T22:09:34.048Z'
                  }
          }
        ]
     }

  }

}

## Backend Routes

### **_API Endpoints_**

* Will be updated in the future to add routes for reviews and ratings

#### users

* _POST api/users_
  * Sign-up for an account
* _PATCH api/users_
  * Updates user account information
* _DELETE api/users/:id_
  * Deletes a user account based on wildcard id.
* _GET api/users/:id/bookshelves_
  * Gets all the bookshelves for the user based on the wildcard id.

#### session

* _POST api/session_
  * Log-in to your account.
* _DELETE api/session_
  * Log-out of your account.
* _GET api/session_
  * Restores user account.

#### books

* _GET api/books_
  * Returns all books.
* _GET api/books/:id_
  * Returns a book based on wildcard id.

#### shelves

* _POST api/shelves/read_
  * Adds a new entry to the read shelf with the current user id and current book id.
* _POST api/shelves/currread_
  * Adds a new entry to the currRead shelf with the current user id and current book id.
* _POST api/shelves/toread_
  * Adds a new entry to the toRead shelf with the current user id and current book id.
* _DELETE api/shelves/read/:id_
  * Uses a hyphenated id in the form of "1-1" to delete a record from the read shelf.
* _DELETE api/shelves/currread/:id_
  * Uses a hyphenated id in the form of "1-1" to delete a record from the currRead shelf.
* _DELETE api/shelves/toread/:id_
  * Uses a hyphenated id in the form of "1-1" to delete a record from the toRead shelf.



## Frontend Routes

The components will be organized as such:

* Root
    * Provider
        * App
            - NavBar
            - Main
            - Footer

The following routes will render in our App between the NavBar and Footer.

* /
  * This homepage will be accessible to anyone that visits the site.
  * Shows the Skyrim Logo
  * Has two blurbs about the site
  * Has a navbar with login and signup buttons.
  * Once clicked the login and signup buttons will show modals that allow the user to either log in to an account or to create a new account.

* /
  * This homepage that will be accessible to anyone that has signed into the site.
  * This page will have a list of books in the database.
  * This page has a book cover of one of the books on the user's currRead shelf.
  * This page also has up to three books covers that the user has on their wants to read shelf on the side bar.
  * This page also has a snapshot of the amount of books on each of the user's bookshelves.

* /mybooks
  * This will be a page that has a main element containing a table of all the books the user has in their different bookshelves.
  * There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /mybooks/read
  * This will be a page that has a main element containing a table of all the books the user has in their read bookshelf.
  * There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /mybooks/currentlyReading
  * This will be a page that has a main element containing a table of all the books the user has in their currently reading bookshelf.
  * There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /mybooks/wantToRead
  * This will be a page that has a main element containing a table of all the books the user has in their want to read bookshelf.
  * There will also be a sidebar that will allow users to navigate to specific bookshelves.

* /book/:id
  * This page will render information about a specific book.
  * There are buttons that allow a user to add the book to any of their shelves.
  * If the book is in one of their shelves there will be a button allowing the user to delete that book from that shelf.

* /books
  * This page contains a list of all the books in the library that are not currently in any of the user's shelves.
  * Each book row also contains buttons that allow the user to add the book to one of their shelves.
  * If all the books in the library are added to the user's shelves the page displays a special message to the user instead.

* /profile
  * This page will render the user profile for the currently logged-in user.
  * There is a default user photo that appears.
  * There are ratings and reviews links that will be updated once that feature is added.
  * There is a snapshot of the user's bookshelves with book counts with links that allow the user to go directly to those pages.
  * There is an activity snapshot that displays up to 3 books from the user's shelves. Again, the user can go directly to the book's detail page by clicking on the book cover image.
