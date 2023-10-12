import { useState } from "react";
import Product from "./Product";

export default function Shop() {
  // dummy products to display
  const [products, setProducts] = useState([
    { name: "prod1", price: "$5" },
    { name: "prod2", price: "$10" },
  ]);

  return (
    <div className="flex-1 p-5">
      <div className="flex gap-3">
      {products.map((each) => {
        return <Product name={each.name} price={each.price} />;
      })}
      </div>
    </div>
  );
}
