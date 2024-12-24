import App from "../App";
import Profile from "./Profile";
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
  {
    path: "profile",
    element: <Profile />, // Matches /profile
  },
  {
    // this path is for a dynamic segment, so that we can reach profile/spinach or profile/popeye
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
