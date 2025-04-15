import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";
import Home from "./Home";
import Contacts from "./Contacts";
import Services from "./Services";
import Prices from "./Prices";
import Characteristics from "./Characteristics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorDetail />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      {
        path: "/characteristics",
        element: <Characteristics />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
    ],
  },
]);

export default router;
