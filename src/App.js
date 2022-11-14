import "./App.css";
import React, { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import { Routes, Route } from "react-router-dom";
function App() {
  const [allBooks, setBooks] = useState([]);
  const [flip, setFlip] = useState("");

  useEffect(() => {
    // getAllBooks();
    getAll().then((books) => {
      setBooks(books);
    });
  }, [flip, setBooks]);

  const updateBookShelf = async (book, newShelf) => {
    // console.log("App =>  Update BookShelf ");
    // console.log("Updated Book ; ", book);
    const updatedBooks = allBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = newShelf;
        return book;
      }
      return b;
    });

    await setBooks(updatedBooks);

    await update(book, newShelf);

    // console.log(allBooks);

    // console.log("change flipping  ");
    await reloadHelper();
  };

  const reloadHelper = () => {
    setFlip((t) => !t);
  };

  // console.log(allBooks);
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              state={flip}
              books={allBooks}
              updateBooksShelf={updateBookShelf}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={<Search updateBooks={updateBookShelf} allBooks={allBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
