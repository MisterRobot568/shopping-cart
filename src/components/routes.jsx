import App from "../App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />, // Matches /profile
  },
  {
    // this path is for a dyanmic segment, so that we can reach profile/spinach or profile/popeye
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
