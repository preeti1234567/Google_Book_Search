import React, { Component } from 'react';

const Save = (props)=> {
    return (
    <div className="jumbotron">
    <h1 className="display-4">(React) Google Books Search</h1>
    <p className="lead">Search for and Save Books of Interest</p>
    </div>
    <div className="container">
        <h1>Saved Books </h1>
        <div className ="row">
            <div className ="col-md-3 ">
                <div className ="card">
                    <img src="{ }" className ="card-img-top" alt="cardimage" />
                    <div className ="card-body">
                        <h5 className ="card-title">Book Title</h5>
                        <h5 className ="card-title">Book Author</h5>
                    </div>
                </div>
            </div>
            <div className ="col-md-9 ">
                <div className ="card">
                    <div className ="card-body">
                        <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default Save;

