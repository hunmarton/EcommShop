import React from "react";
import { Wrapper, Title, Price } from "../styles/ProductCard";

function ProductCard({ product }) {
  return (
    <Wrapper className="card col-md-4">
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <Title className="card-title">{product.name}</Title>
        <Price>${product.price}</Price>
        <a href="#" className="btn">
          Add to cart
        </a>
        <a href="#" className="btn">
          Details
        </a>
      </div>
    </Wrapper>
  );
}

export default ProductCard;
