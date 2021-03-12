import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import HomeBlog from "../components/HomeBlog";
import HomeProducts from "../components/HomeProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <About />
      <HomeBlog />
      <HomeProducts />
      <Footer />
    </>
  );
}

export default Home;
