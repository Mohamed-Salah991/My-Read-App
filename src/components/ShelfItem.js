import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

function ShelfItem(props) {
  const { books, title, updateBookShelf } = props;
  // console.log("ShelfItem", books);

  const [isEmpty, setIsEmpty] = useState(false);

  const content = <h2> The {title} Shelf Is Empty !!</h2>;

  useEffect(() => {
    if (books.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [books, setIsEmpty]);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {isEmpty
            ? content
            : books.map((book) => (
                <li key={book.id}>
                  <BookItem book={book} changeBookShelf={updateBookShelf} />
                </li>
              ))}
        </ol>
      </div>
    </div>
  );
}

export default ShelfItem;
