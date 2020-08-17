import React, { createRef } from 'react'
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

export default function ListItem({ book }) {
    const title = createRef()
    function handleSave (){
        console.log(title.current);
    }
    return (

    <ListGroup.Item id={book.id}>
        <Row>
            <Col>
            <h2 ref={title}>{book.title}</h2>
            <p>{book.authors}</p>
            </Col>
    
            <Col className="d-flex justify-content-end align-items-start">
                <a className="mx-2 btn btn-info" href={book.link} target="_blank" rel="noopener noreferrer">View</a>
                <Button className="mx-2" onClick={handleSave}>Save</Button>
            </Col>
        </Row>

        <Row>
        <Col xs={6} md={4} className="d-flex align-items-center justify-content-center">
            <Image src={book.image} rounded />
        </Col>

        <Col>
            <p>{book.description}</p>
        </Col>
        </Row>
    </ListGroup.Item>
    )
}
