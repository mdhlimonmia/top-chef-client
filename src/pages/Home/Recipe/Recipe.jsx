import React, { useState } from "react";
import { Card, Toast } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";


const Recipe = (props) => {
  const [able, setAble] = useState(true);
  const { name, image, ingredients, cooking_method, rating } = props.recipe;

  const fevouriteHandel = ()=>{
    setAble(!able);
    console.log(able);
    Toast("Thanks!!!");
  }

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
            <div>
            {
              ingredients.map(ingredient => {
                <p>{ingredient}</p>
              })
            }
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className=" d-flex justify-content-between" >
            <div>
            <small className="text-muted">Rating: <b className="text-warning">{rating} </b></small>
            </div>
            <div  className={`${able ? "visible" : "invisible"}`}>
            <small className="btn bg-primary text-light"  onClick={fevouriteHandel}>fevourite <FaRegHeart className="text-warning"></FaRegHeart></small>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Recipe;
