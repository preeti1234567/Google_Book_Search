import React from "react";
const Book = (props) => {
  return (
    <div className="row">
      <div className="col-md-3 ">
        <div className="card">
          <img src={props.url} className="card-img-top" alt="cardimage" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-title">{props.author}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-9 ">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {props.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
