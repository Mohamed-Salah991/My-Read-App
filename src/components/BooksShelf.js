import React from "react";
import ShelfItem from "./ShelfItem";

function BooksShelf(props) {
  const { allBooks, updateBooksShelf } = props;
  // console.log("In Book Shelf : ", allBooks);

  let currentlyReading = [];
  let read = [];
  let wantToRead = [];

  allBooks.forEach((book) => {
    if (book.shelf === "currentlyReading") {
      currentlyReading.push(book);
    }
    if (book.shelf === "read") {
      read.push(book);
    }
    if (book.shelf === "wantToRead") {
      wantToRead.push(book);
    }
  });

  return (
    <div className="list-books-content">
      <div>
        <ShelfItem
          title="Currently Reading"
          books={currentlyReading}
          updateBookShelf={updateBooksShelf}
        />
        <ShelfItem
          title="Want To Read"
          books={wantToRead}
          updateBookShelf={updateBooksShelf}
        />
        <ShelfItem
          title="Read"
          books={read}
          updateBookShelf={updateBooksShelf}
        />
      </div>
    </div>
  );
}

export default BooksShelf;
