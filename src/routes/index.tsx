import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Views/Home";
import { Error } from "../Views/Error";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);
