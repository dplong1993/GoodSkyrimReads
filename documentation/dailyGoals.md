# Daily Goals

## 9/28/2020

### Login feature
* Watch walkthrough videos
  - Start-time: 8:34 am
  - End-time: 9:00 am
* Add a log-in component to render a log-in form
  - Start-time: 9:00 am
  - End-time: 9:15 am
* Set up the backend routes for log-in
  - Had an issue with a 403 error whenever I tried to use a PUT/POST request. This was happening because in the app.js file for the backend, I was using csrf with the app but I was not passing in any csrf token with the response. For now I have commented out the csrf use statement and I will comment it back in at a later time when I am ready to use csrf protection.
  - Start-time: 9:15 am
  - End-time: 10:45 am
* Set up Redux for log-in
  - Set up Redux store
    - Start-time: 10:45 am
    - End-time: 11:15 am
  - Set up Actions for log-in
    - Start-time: 10:45 am
    - End-time: 11:15 am
  - Set up reducer for log-in
    - Start-time: 10:45 am
    - End-time: 11:15 am
  - Update component to use action and reducer to store user info in state after log-in
    - Start-time: 1:10 pm
    - End-time: 1:33 pm
  - Write code to log-in user.
    - Had issues with infinite re-renders because I was trying to use the token in the cookie to load up the user info and store that in state from the app component. It was stuck repeating the part of the code that loaded the data from the token. So I remember that in one project we used the cookie in the reducer to set up a default state. Once I did that everything worked fine. Once a token is stored, the user information can be accessed in the home component via the store.
    - Start-time: 1:33 pm
    - End-time: 2:15 pm
* Style log-in component
  - Watch material ui videos from Soon-Mi
    - Start-time: 2:20 pm
    - End-time: 4:30 pm



## 9/29/20

### Login feature
* Style log-in component
  - Use css to style the log-in page
    - Start-time: 6:45 am
    - End-time: 9:35 am
* Push the completed component and merge back to master. Then deploy to Heroku.
  - Start-time: 9:35 am
  - End-time: 9:55 am

### Signup feature
* Add a sign-up component to the React flow
  - Start-time: 10:00 am
  - End-time: 10:15 am
* Build the signup component to render a form
  - Start-time: 10:15 am
  - End-time: 10:30 am
* Set up the Redux and code for backend route for sign-up
  - Start-time: 10:30 am
  - End-time: 12:55 pm
* Style sign-up component
  - Start-time: 12:55 pm
  - End-time: 1:30 pm
* Push the completed component and merge back to master. Then deploy to Heroku.
  - Start-time: 1:30 pm
  - End-time: 1:37 pm

### Logout feature
* Create a logout link on the nav-bar component that is only visible if there is an authenticated user in the state.
  - Start-time: 1:37 pm
  - End-time: 1:40 pm
* Create the logic that makes the logout link delete the token from cookies and deletes the authenticated user from state.
  - Start-time: 1:40 pm
  - End-time: 1:55 pm
* Make the logout button only show up if there is an user logged in
  - Start-time: 1:55 pm
  - End-time: 2:00 pm

### Nav bar updates
* Refactor the login and signup links on the nav-bar to work opposite of the logout button.
  - Start-time: 2:15 pm
  - End-time: 2:20 pm

### Demo User feature
* Create a button on the log-in form that will allow anyone viewing the site to log-in as a demo user.
  - Start-time: 2:25 pm
  - End-time: 2:32 pm

### Nav bar feature
* Created new git branch and set up tasks in dailyGoals.
  - Start-time: 2:32 pm
  - End-time: 2:39 pm
* Create a nav-bar with buttons to access different parts of the site.
  - Start-time: 3:00 pm
  - End-time:  4:30 pm

## 09/30/20

* Reviewed pokedex solution to compare it how I was doing auth. Looks the same so I think I am in a good position.
  - Start-time: 7:00 am
  - End-time: 7:40 am

### Nav bar feature
* Create a nav-bar with buttons to access different parts of the site.
  - Start-time: 7:40 am
  - End-time: 8:10 am

* Code review and morning meetings
  - Start-time: 8:15 am
  - End-time: 9:55 am

* Refactoring code to make it dryer
  * Refactor buttons to one component that takes in props
    - Start-time: 9:55 am
    - End-time: 10:30 am
  * Refactor components into styled components
    * Refactor login and signup components
      - Start-time: 10:30 am
      - End-time: 11:00 am
    * Refactor login and signup components css and classes
      - Start-time: 11:00 am
      - End-time: 11:15 am
    * Refactor login and signup components css and classes
      - Start-time: 12:30 pm
      - End-time: 1:30 pm

* Style the nav bar component
  - Start-time: 1:30 pm
  - End-time: 2:30 pm

### Home Page feature
* Create components for side-bar and main
  - Start-time: 3:00 pm
  - End-time: 3:30 pm
* Set up main component to display book information for 5-10 books
  * Set up backend for books
    - Start-time: 3:00 pm
    - End-time: 3:30 pm
  * Set up redux related components for books
  * Link the main component to the book state
  * Style main component
* Set up side component
  * Add a search bar section to add to currently reading list
  * Add a section for want to read that display book images
  * Add section for bookshelves that shows number of books in each bookshelf
  * Style the components
