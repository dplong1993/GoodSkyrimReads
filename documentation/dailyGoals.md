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
