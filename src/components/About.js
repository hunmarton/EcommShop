import React from "react";
import Store from "../img/store.jpg";
import { Wrapper, Image, Heading } from "../styles/About";
import { Link } from "react-router-dom";

function About() {
  return (
    <Wrapper className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6">
          <Image src={Store} alt="Our Store" />
        </div>
        <div className="col-md-6">
          <Heading>What we do?!</Heading>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi tempore doloribus blanditiis possimus aliquam dolorum, at numquam. Temporibus doloribus recusandae iure sunt modi ipsa molestias ullam sint, enim quae, asperiores aperiam impedit nesciunt perspiciatis. Amet, ipsa? Quidem recusandae accusamus culpa!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta numquam, enim provident consequatur quo esse, delectus dolorem laboriosam veniam voluptas aut. Modi consequatur excepturi id quidem neque non maiores similique quam ex a quis porro aperiam molestias, amet nesciunt nisi nemo beatae aspernatur est atque? Fugit quae voluptatibus in accusantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in quas labore, tenetur, temporibus aut accusantium sapiente fugit laudantium itaque, quae sunt voluptatibus dolor ex?</p>
          <Link to="/products" className="btn">
            Check Our Products
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
