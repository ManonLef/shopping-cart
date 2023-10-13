import { useState } from "react";
import Products from "./Product";
import Fetch from "./Fetch";



export default function Shop() {
  const url =
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";

  console.log("rendering shop");

  const { data, loading, error } = Fetch(url);

  if (loading) return <div className="flex-1">Loading</div>;
  if (error) return <div className="flex-1">error {error}</div>;

  return <Products data={data}/>
}
