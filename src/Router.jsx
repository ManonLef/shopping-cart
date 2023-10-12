import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import Fetch from "./Fetch";

const Router = () => {
  const url =
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";
  const { data, loading, error } = Fetch(url);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <Shop data={data} loading={loading} error={error} />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
