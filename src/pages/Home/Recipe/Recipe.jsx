import React from "react";
import { Card } from "react-bootstrap";

const Recipe = (props) => {
  const { name, image, ingredients, cooking_method, rating } = props.recipe;
  return (
    <div>
      <Card style={{ width: '21rem' }} className="me-5">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {cooking_method}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">fevourite</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Recipe;
