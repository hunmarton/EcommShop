import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";

import ProductCard from "./ProductCard";

import { Wrapper, MainHeading } from "../styles/HomeSections";

function HomeProducts() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const productRef = firebase.database().ref("Products");
    productRef.on("value", snapshot => {
      const products = snapshot.val();
      let productsList = [];
      for (let id in products) {
        productsList.push(products[id]);
      }
      let shortProductList = productsList.reverse().slice(0, 3);
      setProductList(shortProductList);
    });
  }, []);
  return (
    <Wrapper className="container">
      <MainHeading>Latest Products</MainHeading>
      <div className="row justify-content-between">
        {productList.map(product => {
          return <ProductCard product={product} />;
        })}
      </div>
    </Wrapper>
  );
}

export default HomeProducts;
