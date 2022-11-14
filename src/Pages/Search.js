import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import BookItem from "../components/BookItem";

function Search({ updateBooks, allBooks }) {
  const [books, setBooks] = useState([]);
  const [inputValue, SetInputValue] = useState("");

  const searchValueHandler = (event) => {
    SetInputValue(event.target.value);
  };

  useEffect(() => {
    try {
      let isActive = true;

      if (inputValue) {
        search(inputValue).then((data) => {
          console.log(data);
          if (data.error) {
            setBooks([]);
          } else {
            if (isActive) {
              let newSearchBooks = data.map((book) => {
                let otherBook = allBooks.find((b) => b.id === book.id);
                // console.log(otherBook);
                if (otherBook) return otherBook;
                else return book;
              });
              // allBooks.
              setBooks(newSearchBooks);
            }
          }
        });
      }

      return () => {
        isActive = false;
        setBooks([]);
      };
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);

  // console.log(books);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={searchValueHandler}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <BookItem book={book} changeBookShelf={updateBooks} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
