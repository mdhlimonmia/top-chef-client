import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Container>
        <h3>
          Tell us the differences between uncontrolled and controlled
          components.
        </h3>
        <p>
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>{" "}
        <br />
        <h3>How to validate React props using PropTypes</h3>
        <p>
          Props and PropTypes are important mechanisms for passing read-only
          attributes between React components. We can use React props, short for
          properties, to send data from one component to another. If a component
          receives the wrong type of props, it can cause bugs and unexpected
          errors in your app.
        </p> <br />

        <h3>ell us the difference between nodejs and express js.</h3>
        <p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
        <br />
        <h3>What is a custom hook, and why will you create a custom hook?</h3>
        <p>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.</p>
      </Container>
    </div>
  );
};

export default Blogs;
