import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Container from "react-bootstrap/Container";
import Chefs from "../Chefs/Chefs";
import './Home.css'

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() =>{
    fetch('https://top-chefs-server-mdhlimonmia.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
    .catch(error => console.log(error))
  },[])

  return (
    <div>
      <Container>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </Container>
      <Container className="d-flex mt-5 mx-auto align-items-center">
        <div>
          <img
            className="img-thumbnail pe-5"
            src={
              "https://thumbs.dreamstime.com/b/cartoon-chef-fat-vector-clip-art-illustration-simple-gradients-all-single-layer-64543945.jpg"
            }
            alt=""
          />
        </div>
        <div>
          <h3> <span className="text-primary">Top Chefs</span> Will Serve You The Delicious Food Of Famous Chefs </h3>
        </div>
      </Container>
      <Container className="chefs mt-12 ">
        {
          chefs.map(chef => <Chefs 
          key={chef.id}
          chef = {chef}
          ></Chefs>)
        }
      </Container>
    </div>
  );
};

export default Home;
