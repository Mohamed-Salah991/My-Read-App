import React from "react";

function BookItem(props) {
  const { book, changeBookShelf } = props;

  // console.log("IN Book item ", book?.imageLinks?.thumbnail);

  const handlerImg = () => {
    if (book?.imageLinks?.thumbnail === undefined) return;
    else return book?.imageLinks?.thumbnail;
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${handlerImg()})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf ? book.shelf : "none"}
            onChange={(e) => changeBookShelf(book, e.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors?.map((author) => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}
    </div>
  );
}

export default BookItem;
