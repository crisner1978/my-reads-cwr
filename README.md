# My Reads - CWR

Bookshelf application to showcase the power of REACT! 
- One of the projects in Udacity's React Program.
- Uses functional components and React Hooks. 
- Maximizes Composition and Reusable Components.

## Project bootstrapped with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

- getAll
- update
- search
- getAll

#### Method Signature:

getAll();

Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.
update

#### Method Signature:

update(book, shelf);
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request
search

#### Method Signature:

search(query);
query: <String>
Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).