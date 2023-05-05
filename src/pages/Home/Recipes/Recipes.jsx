import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  let { id } = useParams();
  const recipes = useLoaderData();
  const recipe = recipes?.find((r) => r.id == id);
  const { name, picture, bio, number_of_recipes, likes } = recipe;
  return (
    <div>
      <Container>

        <div className="mb-5">
          <Card>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Text>
                <b> {name}</b>
              </Card.Text>
              <Card.Text>{bio}</Card.Text>
              <Card.Text>
                <samp className="text-dark">
                  Number of Recipes: {number_of_recipes}
                </samp>
              </Card.Text>
              <small className="text-primary">
                <b>Likes: {likes}</b>
              </small>
            </Card.Body>
          </Card>
        </div>
        <b className="mt-5 fs-2 text-primary">Some Recipes:</b>
        <div className="d-flex mt-5 g-4">
            {
                recipe.recipes.map(r => <Recipe
                recipe = {r}
                key  = {id}
                ></Recipe>)
            }
        </div>
      </Container>
    </div>
  );
};

export default Recipes;
