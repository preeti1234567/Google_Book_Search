import React from "react";
import Book from "./Book"

const Saved = (props) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </div>
      <h1>Saved Books </h1>
      { props.book ? (props.books.map((book) => (
        <Book
          link={book.link}
          title={book.title}
          authors={book.authors}
          description={book.description}
          image={book.image}
        />
      ))) : (<h2>No Saved Books</h2>)}
      
    </div>
  );
};

export default Saved;
