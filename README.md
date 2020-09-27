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
