import React from "react";
import BooksShelf from "../components/BooksShelf";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BooksShelf
        allBooks={props.books}
        updateBooksShelf={props.updateBooksShelf}
      />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home;
