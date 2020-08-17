import React from "react";

const Saved = (props) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </div>
      <h1>Saved Books </h1>
      {props.books.map((book) => (
        <Book
          url={book.url}
          title={book.title}
          author={book.author}
          details={book.details}
        />
      ))}
      ;
    </div>
  );
};

export default Saved;
