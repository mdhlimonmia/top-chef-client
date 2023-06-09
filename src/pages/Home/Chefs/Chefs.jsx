import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chefs = (props) => {
  const { id, name, picture, experience, number_of_recipes, likes, bio } = props.chef;

  
  return (
    <div className="mb-5">
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top img-fluid" style={{ height: '14rem' }} src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <samp className="text-primary">
              {experience} Year of experience
            </samp>
          </Card.Text>
          <Card.Text>
            <samp className="text-dark">
              Number of Recipes: {number_of_recipes}
            </samp>
          </Card.Text>
          <Card.Footer className="d-flex align-items-center justify-content-between">
            <small className="text-primary"><b>Likes: {likes}</b></small>
            <Link  to ={`recipes/${id}`} ><Button variant="primary">View Recipes</Button></Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chefs;
