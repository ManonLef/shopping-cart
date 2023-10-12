import { useEffect, useState } from "react";

// url: "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"

const Fetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("API THINGS !!!!!");
    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setError(data.error)
        setData(data.data.products.edges)
        setLoading(false);
      })
    // json.data.products.edges
  }, [url]);

  return { data, loading, error };
};

export default Fetch

// const productDataFetched = data.data.products.edges; // do actual product stuff here?

//         productDataFetched.forEach((productData) => {
//           const product = {
//             title: productData.node.title,
//             description: productData.node.description,
//             image: productData.node.featuredImage.url,
//             price: productData.node.variants.edges[0].node.price.amount,
//             id: productData.node.id,
//           };
//           // console.log(product);
//           setProducts(prods.push(product));
//         });