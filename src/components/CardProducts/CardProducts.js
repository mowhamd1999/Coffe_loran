import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import './CardProducts.css'
const CardProducts = (props) => {
  return (
    <div className="Card_container">
      <Link className="Card_link" to={`/category/${props.category}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.body.substring(0, 70)} ...More</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.info}</ListGroup.Item>
            <ListGroup.Item>{props.price} $</ListGroup.Item>
            <ListGroup.Item>{props.date}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </div>
  );
};

export default CardProducts;
