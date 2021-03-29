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
