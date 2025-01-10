import App from "../App";
import ErrorPage from "./ErrorPage";
import AllProducts from "./AllProducts/AllProducts";
import Products from "./Products/products";

const routes = [
  {
    // this path routes to the home pagehe
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products/:category",
        element: <Products />,
      },
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
