"use client";
import React, { useEffect, useState } from "react";
import { productFetcher } from "@/lib/products";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("manoj");
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await productFetcher();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const addCartHandler = ()=>{
    console.log("you have to implement cart here");
    
  }

  return <h1>hi</h1>
 
}

export default ProductPage;
