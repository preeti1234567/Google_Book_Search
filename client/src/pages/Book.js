import React from "react";
const Book = (props) => {
  return (
    <div className="card">
      <div className="row card-body">
        <div className="col-md-9 ">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">{props.authors}</h5>
        </div>
        <div className="col-md-3">
          <a className="btn btn-info">View</a>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="row card-body">
        <div className="col-md-3 ">
          <img src={props.image} className="card-img-top" alt="cardimage" />
        </div>
        <div className="col-md-9">
          <p className="card-text">{props.descrition}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
