import { useState } from "react";
import Product from "./Product";

export default function Shop() {
  console.log("shop.jsx rendering");
  // dummy products to display
  const [products, setProducts] = useState([
    { name: "prod1", price: "$5", key: 1 },
    { name: "prod2", price: "$10", key: 2 },
  ]);

  return (
    <div className="flex-1 p-5">
      <div className="flex gap-3">
        {products.map((item) => {
          return <Product key={item.key} name={item.name} price={item.price} />;
        })}
      </div>
    </div>
  );
}
