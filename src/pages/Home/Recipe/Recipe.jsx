import React from "react";
import { Card } from "react-bootstrap";


const Recipe = (props) => {
  const { name, image, ingredients, cooking_method, rating } = props.recipe;
  return (
    <div>
      <Card style={{ width: '21rem' }} className="me-5">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <b>Cooking Method:</b>
          <Card.Text>
            {cooking_method}
          </Card.Text>
          <b>Ingredients:</b>
          <Card.Text>
            {
              ingredients.map(ingredient => {
                <p>{ingredient}</p>
              })
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className=" d-flex justify-content-between" >
            <div>
            <small className="text-muted">Rating: <b className="text-warning">{rating} </b></small>
            </div>
            <div>
            <small className="text-muted">fevourite </small>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Recipe;
