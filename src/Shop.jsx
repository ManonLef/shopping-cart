import { useState } from "react";
import Product from "./Product";

export default function Shop({ data, error, loading }) {
  console.log("rendering shop");
  const [products, setProducts] = useState(data);
  if (loading) return <div>Loading</div>;
  if (error) return <div>error {error}</div>;
  // const productsToEdit = data; // do actual product stuff here?
  console.log("shop", products);

  return (
    <div className="flex-1 p-5">
      <div className="flex gap-3 flex-wrap justify-center m-10">
        {products.map((item) => {
          return (
            <Product
              key={item.node.id}
              title={item.node.title}
              description={item.node.description}
              image={item.node.featuredImage.url}
              price={item.node.variants.edges[0].node.price.amount}   
            />
          );
        })}
      </div>
    </div>
  );
}
