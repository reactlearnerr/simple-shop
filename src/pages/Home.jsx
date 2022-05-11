import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import { data } from "../data";
import Products from "./Products";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setProducts(data.productslist);
      });
    return () => {
      console.log("i am getting rerendered");
    };
  }, []);

  return (
    <>
      <Banner />
      <Products products={products} isLoading={isLoading} />
    </>
  );
};
export default Home;
