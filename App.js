import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import AboutUs from "./src/Component/AboutUs";
import ContactUs from "./src/Component/ContactUs";
import Error from "./src/Component/Error";
import Offers from "./src/Component/Offers";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
