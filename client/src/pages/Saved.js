import React, {useEffect, useState} from "react";
import Book from "./Book";
import API from "../utils/API";
import { useBookContext } from "../utils/BookContext";
const Saved = () => {
  const [state, dispatch] = useBookContext();
  // const [data, setData] = useState([]);

  useEffect(()=> {
    API.getSavedBooks()
    .then((data) => {
      // setData(data.data)
      dispatch({type: "getSavedBooks", results: data.data})
    })
  },[])

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </div>
      <h1>Saved Books </h1>
      { state["savedBooks"] ? (state["savedBooks"].map((book) => (
        <Book key={book.id}
          link={book.link}
          title={book.title}
          authors={book.authors}
          description={book.description}
          image={book.image}
          id={book.id}
        />
      ))) : (<h2>No Saved Books</h2>)}
      
    </div>
  );
};

export default Saved;
