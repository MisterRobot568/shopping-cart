import App from "../App";
import ErrorPage from "./ErrorPage";
import AllProducts from "./AllProducts/AllProducts";
import Products from "./Products/products";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";

const routes = [
  {
    // this path routes to the home pagehe
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products/:category",
        element: <Products />,
        // children: [
        //   {
        //     path: "/products/:category/:item",
        //     element: <Item />,
        //   },
        // ],
        // children: [{ path: "item/:item", element: <Item /> }],
      },
      { path: "/item/:item", element: <Item /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/:name",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/products/:name",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "products",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
];

export default routes;
